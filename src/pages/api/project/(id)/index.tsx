// import { useRouter } from "next/router";
// import { trpc } from "../../../utils/trpc";

// interface Project {
//   id: string;
//   nameproject: string;
//   description: string;
// }

// const ProjectDetailPage = () => {
//   // const router = useRouter();

//   // const util = trpc.useContext();
//   // const { slug } = router.query;
//   const { project.id } = router.query;


//   // Fetch project details based on the slug
//   // const { data: project, error } = trpc.project.getBySlug.useQuery({ slug: slug });
//   const { data: project, error } = trpc.project.getBySlug.useQuery({ slug: project.id });

//   if (error) {
//     // Handle error state
//     return <p>Error fetching project details</p>;
//   }

//   if (!project) {
//     // Render loading state or handle project not found
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>Project ID: {project.id}</h1>
//       <h2>Project Name: {project.name}</h2>
//       <p>Project Description: {project.description}</p>
//     </div>
//   );
// };

// export default ProjectDetailPage;

// import Header from '../../../pages/header-page';
// import Footer from '../../../pages/footer-page';
// import ActionBar from '../../../pages/actionbar';
// import { useRouter } from "next/router";
// import { trpc } from "../../../utils/trpc";
// import { signOut, useSession } from "next-auth/react";

// interface Project {
//   id: string;
//   nameproject: string;
//   description: string;
// }

// const ProjectDetailPage = () => {
//   const router = useRouter();
//   const util = trpc.useContext();
//   const { data: session, status } = useSession();
//   const { id } = router.query;

//   if (status == "loading") {
//     return <p>Loading ...</p>;
//   }
//   if (status == "unauthenticated") {
//     router.push("/login");
//     return <p>Access denied!</p>;
//   }

//   // Fetch project details based on the id
//   // const { data: project, error } = trpc.project.getBySlug.useQuery({ slug: id);
//   const { data: project, error } = trpc.project.getBySlug.useQuery({slug: id});

//   if (error) {
//     // Handle error state
//     return <p>Error fetching project details</p>;
//   }

//   if (!project) {
//     // Render loading state or handle project not found
//     return <p>Loading...</p>;
//   }

//   return (
    
//     <div>
//          <Header></Header>
//           <div className="flex w-screen justify-center bg-gray-200 px-8 pt-6"><div/>
//           <ActionBar></ActionBar>   
//          </div>
//          <div className="absolute top-4 right-4">
//           Welcome {session?.user?.email}
//           <button
//             onClick={() => signOut({ callbackUrl: "/login" })}
//             className="ml-4 font-semibold text-purple-800 underline underline-offset-2"
//           >
//             Logout?
//           </button>
//         </div>       
//         <div>
//           <h1>Project ID: {project.id}</h1>
//           <h2>Project Name: {project.nameproject}</h2>
//           <p>Project Description: {project.description}</p>
//         </div>
//          <div className="grid grid-cols-1 gap-2 h-1/4"><Footer></Footer></div>
//         </div>
//   );
// };

// export default ProjectDetailPage;


// Part 2 Edit

import { useRouter } from "next/router";
import { trpc } from "../../../utils/trpc";
import { signOut, useSession } from "next-auth/react";

const ProjectDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading ...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/login");
    return <p>Access denied!</p>;
  }

  const { data: project, error } = trpc.project.getBySlug.useQuery({ slug: id });
  // const { data: project, error } = trpc.project.useQuery(["project.getBySlug", { id }]);

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
      <h2>Project Name: {project.nameproject}</h2>
      <p>Project Description: {project.description}</p>
      <div>
        Welcome {session?.user?.email}
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="ml-4 font-semibold text-purple-800 underline underline-offset-2"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProjectDetailPage;

// import { useRouter } from "next/router";
// import { trpc } from "../../../../utils/trpc";
// import { signOut, useSession } from "next-auth/react";

// const ProjectDetailPage = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   const { data: session, status } = useSession();

//   if (status === "loading") {
//     return <p>Loading ...</p>;
//   }

//   if (status === "unauthenticated") {
//     router.push("/login");
//     return <p>Access denied!</p>;
//   }

//   // Fetch project details based on the id
//   const queryResult = trpc.useQuery(["project.getBySlug", { id }]);
//   const project = queryResult.data;

//   if (queryResult.error) {
//     // Handle error state
//     return <p>Error fetching project details</p>;
//   }

//   if (!project) {
//     // Render loading state or handle project not found
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>Project ID: {project.id}</h1>
//       <h2>Project Name: {project.nameproject}</h2>
//       <p>Project Description: {project.description}</p>
//       <div>
//         Welcome {session?.user?.email}
//         <button
//           onClick={() => signOut({ callbackUrl: "/login" })}
//           className="ml-4 font-semibold text-purple-800 underline underline-offset-2"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetailPage;


