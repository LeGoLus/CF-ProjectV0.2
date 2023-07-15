// import { type NextPage } from "next";
import { type FormEventHandler, useState } from "react";
import { trpc } from "../utils/trpc";


interface Document {
  id: string;
  namedocument: string;
  description: string;
}

const formDocument = ({ document }: { document: Document }) => {
  const util = trpc.useContext();
  // const [input, setInput] = useState(document.nameDocument , document.description);
  const [namedocument, setNameDocument] = useState(document.namedocument);
  const [description, setDescription] = useState(document.description);
  const [isEditing, setIsEditing] = useState(false);
  const deleteformDocument = trpc.document.delete.useMutation({
    onSuccess() {
      util.document.invalidate();
    },
  });
  const updateformDocument = trpc.document.update.useMutation({
    async onSuccess() {
      await util.document.invalidate();
      setIsEditing(false);
    },
  });

  const handleUpdate: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await updateformDocument.mutateAsync({ 
      id: document.id, 
      document: { namedocument, description} });
  };

  const handleDelete = async () => {
    await deleteformDocument.mutateAsync({ id: document.id });
  };

//   return (
//     <li className="relative flex items-center justify-between border-b px-2 py-6">
//       <div>
//           (isEditing) 
//           <form onSubmit={handleUpdate} className="inline-block">
//             <input
//               type="text"
//               value={namedocument}
//               onChange={(e) => setNameDocument(e.target.value)}
//               className="border-grey-600 w-full rounded border px-2 py-1 outline-none"
//             />
//             <input
//               type="text"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="border-grey-600 w-full rounded border px-2 py-1 outline-none"
//             />
            
//           </form>
//           <div className="absolute right-0 flex items-center space-x-2">
//         <button onClick={() => setIsEditing(!isEditing)}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-blue-600"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
//             />
//           </svg>
//         </button>
//           <button onClick={handleDelete}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-red-700"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>
//       </div>
//       </div>
//     </li>
//   );
// };

// export default formDocument;

return (
  <li className="relative flex items-center justify-between border-b px-2 py-6">
    <div>
      {isEditing && <span>(isEditing)</span>}
      <form onSubmit={handleUpdate} className="inline-block">
        <input
          type="text"
          value={nameDocument}
          onChange={(e) => setNameDocument(e.target.value)}
          className="border-grey-600 w-full rounded border px-2 py-1 outline-none"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-grey-600 w-full rounded border px-2 py-1 outline-none"
        />
      </form>
      <div className="absolute right-0 flex items-center space-x-2">
        <button onClick={() => setIsEditing(!isEditing)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {/* <!-- SVG path goes here --> */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </button>
        <button onClick={handleDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
                       
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </li>
);
};

export default formDocument;
