import { useRouter } from "next/router";
import { trpc } from "../../../utils/trpc";

interface Project {
  id: string;
  name: string;
  description: string;
}

const ProjectDetailPage = () => {
  const router = useRouter();
  const util = trpc.useContext();
  const { slug } = router.query;

  // Fetch project details based on the slug
  const { data: project, error } = trpc.project.getBySlug.useQuery({ slug: slug });

  if (error) {
    // Handle error state
    return <p>Error fetching project details</p>;
  }

  if (!project) {
    // Render loading state or handle project not found
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Project ID: {project.id}</h1>
      <h2>Project Name: {project.name}</h2>
      <p>Project Description: {project.description}</p>
    </div>
  );
};

export default ProjectDetailPage;
