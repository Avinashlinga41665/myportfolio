// src/app/work/[slug]/page.tsx

import { projects } from "@/data/projects";
import WorkDetails from "@/components/work/WorkDetails";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function WorkDetailsPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return <WorkDetails project={project} />;
}
