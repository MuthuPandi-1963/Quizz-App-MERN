import { useState, type FormEvent } from "react";

interface Aptitude {
  id: string;
  name: string;
}

interface AddQuestionFormProps {
  aptitudes: Aptitude[];
  onSubmit: (data: {
    aptitude_id: string;
    question: string;
    options: string[];
    answer: string;
    explanation: string;
  }) => void;
}

export default function AddQuestionForm({ aptitudes, onSubmit }: AddQuestionFormProps) {
  const [aptitudeId, setAptitudeId] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [options, setOptions] = useState<string[]>(["", "", "", ""]);
  const [answer, setAnswer] = useState<string>("");
  const [explanation, setExplanation] = useState<string>("");

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ aptitude_id: aptitudeId, question, options, answer, explanation });
    setAptitudeId("");
    setQuestion("");
    setOptions(["", "", "", ""]);
    setAnswer("");
    setExplanation("");
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (index: number) => {
    if (options.length <= 2) return;
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-purple-100">
      <h2 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2 text-purple-600" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        Add New Question
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Aptitude Topic
          </label>
          <select
            className="w-full border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 px-4 py-2 rounded-lg transition duration-200"
            value={aptitudeId}
            onChange={(e) => setAptitudeId(e.target.value)}
            required
          >
            <option value="">Select a Topic</option>
            {aptitudes.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Question
          </label>
          <textarea
            className="w-full border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 px-4 py-2 rounded-lg transition duration-200"
            rows={3}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            placeholder="Enter your question here"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-purple-700">
              Options
            </label>
            <button
              type="button"
              onClick={addOption}
              className="text-xs bg-purple-100 text-purple-700 hover:bg-purple-200 px-2 py-1 rounded"
            >
              + Add Option
            </button>
          </div>
          
          {options.map((opt, i) => (
            <div key={i} className="flex items-center mb-2">
              <input
                type="radio"
                name="correctAnswer"
                checked={answer === opt}
                onChange={() => setAnswer(opt)}
                className="mr-2 text-purple-600 focus:ring-purple-500"
                disabled={!opt.trim()}
              />
              <input
                type="text"
                className="flex-1 border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 px-3 py-2 rounded-lg transition duration-200"
                value={opt}
                onChange={(e) => handleOptionChange(i, e.target.value)}
                placeholder={`Option ${i + 1}`}
                required
              />
              {options.length > 2 && (
                <button
                  type="button"
                  onClick={() => removeOption(i)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Explanation
          </label>
          <textarea
            className="w-full border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 px-4 py-2 rounded-lg transition duration-200"
            rows={3}
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            required
            placeholder="Explain why this is the correct answer"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 rounded-lg transition duration-200 flex items-center justify-center"
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
          Add Question
        </button>
      </form>
    </div>
  );
}