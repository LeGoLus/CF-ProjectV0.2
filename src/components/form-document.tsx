import { FormEventHandler, useState } from "react";
import { trpc } from "../utils/trpc";



interface Document {
  id: string;
  namedocument: string;
  description: string;
}

const FormDocument = ({ document }: { document: Document }) => {
  const util = trpc.useContext();
  const [namedocument, setNameDocument] = useState(document.namedocument);
  const [description, setDescription] = useState(document.description);
  const [isEditing, setIsEditing] = useState(false);
  const deleteFormDocument = trpc.document.delete.useMutation({
    onSuccess() {
      util.document.invalidate();
    },
  });
  const updateFormDocument = trpc.document.update.useMutation({
    async onSuccess() {
      await util.document.invalidate();
      setIsEditing(false);
    },
  });

  const handleUpdate: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await updateFormDocument.mutateAsync({
      id: document.id,
      document: {
        namedocument: namedocument,
        description: description,
      },
    });
  };
  const handleDelete = async () => {
    await deleteFormDocument.mutateAsync({ id: document.id });
  };

  return (
    <form onSubmit={handleUpdate} className="space-y-4">
      <div className="space-y-2">
        <label className="block font-medium">Document Name</label>
        <input
          type="text"
          value={namedocument}
          onChange={(e) => setNameDocument(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
      </div>
      <div className="space-y-2">
        <label className="block font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
      </div>
      <div className="flex space-x-4">
        {isEditing ? (
          <>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </form>
  );
};

export default FormDocument;

