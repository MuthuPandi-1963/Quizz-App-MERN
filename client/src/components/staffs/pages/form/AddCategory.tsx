import { useState, type FormEvent } from "react";

interface AddCategoryFormProps {
  onSubmit: (category: { id: string; name: string; description: string }) => void;
}

export default function AddCategoryForm({ onSubmit }: AddCategoryFormProps) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ id: Date.now().toString(), name, description });
    setName("");
    setDescription("");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-blue-100">
      <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2 text-blue-600" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
          />
        </svg>
        Add New Category
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-blue-700 mb-1">
            Category Name
          </label>
          <input
            type="text"
            className="w-full border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-4 py-2 rounded-lg transition duration-200"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="e.g., Mathematics, Science"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-blue-700 mb-1">
            Description
          </label>
          <textarea
            className="w-full border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-4 py-2 rounded-lg transition duration-200"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief description of this category"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition duration-200 flex items-center justify-center"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
            />
          </svg>
          Add Category
        </button>
      </form>
    </div>
  );
}