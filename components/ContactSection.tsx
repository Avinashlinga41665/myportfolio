"use client";
import { useState, useEffect } from "react";

export default function ContactSection() {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function getTimeBasedMessage() {
    const hour = new Date().getHours();

    if (hour < 12) return "Good morning! I’ll get back to you shortly.";
    if (hour < 17) return "Thanks for reaching out! I’ll get back to you soon.";
    if (hour < 21) return "Good evening! I’ll respond shortly.";
    return "Thanks for your message! I’ll get back to you soon.";
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch(
      "https://formspree.io/f/mwvkybae",
      {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      }
    );

    setLoading(false);

    if (response.ok) {
      setMessage(getTimeBasedMessage());
      setShowPopup(true);
      form.reset();
    }
  }

  // AUTO-CLOSE POPUP AFTER 3 SECONDS
  useEffect(() => {
    if (!showPopup) return;

    const timer = setTimeout(() => {
      setShowPopup(false);
      window.location.reload();
    }, 5000);

    return () => clearTimeout(timer);
  }, [showPopup]);
  

  function handleClose() {
    setShowPopup(false);
    window.location.reload(); // refresh page
  }

  return (
   <section id="contact" className="bg-light px-6 md:px-20 lg:px-40 pt-32 pb-24" > 
    <div className="max-w-6xl mx-auto"> {/* HEADER */}
      <div className="max-w-xl mb-16"> 
        <p className="text-3xl md:text-4xl font-medium text-foreground mb-4"> Contact </p> 
        <p className="text-muted leading-relaxed mb-4"> Have a project in mind or need a website? Let’s discuss how I can help. </p> 
        <p className="text-muted leading-relaxed mb-8"> Whether you’re looking to build a new website, redesign an existing one, or create a custom application, feel free to reach out.
    </p>
    </div>
     <form  onSubmit={handleSubmit} className="max-w-md space-y-6">

    <input type="text" name="name" placeholder="Your name" className="w-full bg-white text-foreground border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition"/>
    <input type="email" name="email" placeholder="Your email" className=" w-full bg-white text-foreground border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition"/>
    <textarea rows={4} name="message" placeholder="Tell me about your project" className="w-full bg-white text-foreground border border-white/10 rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-white/30 transition"/>
    <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-[var(--primary)] px-6 py-3 text-white font-medium shadow-sm hover:bg-[#4F46E5]/90 hover:shadow-md transition">
      Send Message
    </button>
  </form>
     {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl p-8 max-w-sm text-center">
            <h3 className="text-xl font-semibold mb-3">Message Sent 🎉</h3>
            <p className="text-gray-600 mb-6">Thanks for reaching out! I’ll get back to you shortly. </p>
            <button
              onClick={handleClose}
              className="px-6 py-2 bg-primary text-black rounded-xl font-medium"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
   </section>
  );
}
