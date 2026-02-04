import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectTemplate from "../components/templates/project/project";

export default function Project() {
  const { slug } = useParams<{ slug: string }>();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p className="p-4">Project not found</p>;
  }

  return <ProjectTemplate {...project} />;
}
