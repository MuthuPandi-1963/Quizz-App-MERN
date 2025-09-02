import { useState, type FormEvent } from "react";

interface Category {
  id: string;
  name: string;
}

interface AddAptitudeFormProps {
  categories: Category[];
  onSubmit: (data: {
    id: string;
    name: string;
    description: string;
    category_id: string;
    image: string;
  }) => void;
}

export default function AddAptitudeForm({ categories, onSubmit }: AddAptitudeFormProps) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ id: Date.now().toString(), name, description, category_id: categoryId, image });
    setName("");
    setDescription("");
    setCategoryId("");
    setImage("");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
      <h2 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2 text-green-600" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
          />
        </svg>
        Add New Aptitude Topic
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-green-700 mb-1">
            Topic Name
          </label>
          <input
            type="text"
            className="w-full border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 px-4 py-2 rounded-lg transition duration-200"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="e.g., Algebra, Geometry"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-green-700 mb-1">
            Description
          </label>
          <textarea
            className="w-full border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 px-4 py-2 rounded-lg transition duration-200"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief description of this aptitude topic"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-green-700 mb-1">
            Category
          </label>
          <select
            className="w-full border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 px-4 py-2 rounded-lg transition duration-200"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
          >
            <option value="">Select a Category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-green-700 mb-1">
            Image URL
          </label>
          <input
            type="text"
            className="w-full border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 px-4 py-2 rounded-lg transition duration-200"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Paste image URL here"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg transition duration-200 flex items-center justify-center"
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
          Add Aptitude Topic
        </button>
      </form>
    </div>
  );
}