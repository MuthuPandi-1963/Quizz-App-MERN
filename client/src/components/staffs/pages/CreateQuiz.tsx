import { useState } from "react";
import AddCategoryForm from "./form/AddCategory";
import AddAptitudeForm from "./form/AddAptitude";
import AddQuestionForm from "./form/AddQuestions";

interface Category {
  id: string;
  name: string;
  description?: string;
}

interface Aptitude {
  id: string;
  name: string;
  description?: string;
  category_id: string;
  image?: string;
}

interface Question {
  aptitude_id: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export default function CreateQuiz() {
  const [activeTab, setActiveTab] = useState<"category" | "aptitude" | "question">("category");
  const [categories, setCategories] = useState<Category[]>([]);
  const [aptitudes, setAptitudes] = useState<Aptitude[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleAddCategory = (category: Category) => {
    setCategories([...categories, { ...category, id: Date.now().toString() }]);
  };

  const handleAddAptitude = (aptitude: Aptitude) => {
    setAptitudes([...aptitudes, { ...aptitude, id: Date.now().toString() }]);
  };

  const handleAddQuestion = (question: Question) => {
    setQuestions([...questions, question]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800">Create New Quiz</h1>
        <p className="text-blue-600">Design assessments for your students</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side - Tabs and Forms */}
        <div className="w-full lg:w-2/3 bg-white rounded-xl shadow-lg p-6">
          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-8 relative">
            <div className="absolute top-1/2 h-1 transform -translate-y-1/2 bg-blue-100 w-full -z-10"></div>
            <div className={`flex flex-col items-center ${activeTab === 'category' ? 'text-blue-700' : 'text-blue-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeTab === 'category' ? 'bg-blue-600 text-white' : 'bg-blue-100'}`}>
                1
              </div>
              <span className="text-sm mt-2 font-medium">Category</span>
            </div>
            <div className={`flex flex-col items-center ${activeTab === 'aptitude' ? 'text-blue-700' : activeTab === 'question' ? 'text-blue-700' : 'text-blue-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeTab === 'aptitude' || activeTab === 'question' ? 'bg-blue-600 text-white' : 'bg-blue-100'}`}>
                2
              </div>
              <span className="text-sm mt-2 font-medium">Aptitude</span>
            </div>
            <div className={`flex flex-col items-center ${activeTab === 'question' ? 'text-blue-700' : 'text-blue-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeTab === 'question' ? 'bg-blue-600 text-white' : 'bg-blue-100'}`}>
                3
              </div>
              <span className="text-sm mt-2 font-medium">Questions</span>
            </div>
          </div>

          {/* Tab Buttons */}
          <div className="flex space-x-2 mb-6 bg-blue-50 p-1 rounded-lg">
            <button
              className={`flex-1 py-3 px-4 rounded-md text-center font-medium ${activeTab === "category" ? "bg-white text-blue-700 shadow-md" : "text-blue-500 hover:bg-blue-100"}`}
              onClick={() => setActiveTab("category")}
            >
              Add Category
            </button>
            <button
              className={`flex-1 py-3 px-4 rounded-md text-center font-medium ${activeTab === "aptitude" ? "bg-white text-green-700 shadow-md" : "text-green-600 hover:bg-green-100"}`}
              onClick={() => setActiveTab("aptitude")}
            >
              Add Aptitude
            </button>
            <button
              className={`flex-1 py-3 px-4 rounded-md text-center font-medium ${activeTab === "question" ? "bg-white text-purple-700 shadow-md" : "text-purple-600 hover:bg-purple-100"}`}
              onClick={() => setActiveTab("question")}
            >
              Add Question
            </button>
          </div>

          {/* Form + List */}
          <div className="mt-4">
            {activeTab === "category" && (
              <>
                <AddCategoryForm onSubmit={handleAddCategory} />
                <h3 className="mt-6 text-lg font-semibold text-blue-800 border-b pb-2">Existing Categories</h3>
                <ul className="mt-2 space-y-2">
                  {categories.map((c) => (
                    <li key={c.id} className="p-3 bg-blue-50 border border-blue-100 rounded-lg flex justify-between items-center">
                      <div>
                        <strong className="text-blue-700">{c.name}</strong>
                        <p className="text-sm text-blue-600">{c.description}</p>
                      </div>
                      <button className="text-red-500 hover:text-red-700 text-sm font-medium">Remove</button>
                    </li>
                  ))}
                  {categories.length === 0 && (
                    <li className="p-4 text-center text-blue-500 bg-blue-50 rounded-lg border border-dashed border-blue-200">
                      No categories added yet
                    </li>
                  )}
                </ul>
              </>
            )}

            {activeTab === "aptitude" && (
              <>
                <AddAptitudeForm categories={categories} onSubmit={handleAddAptitude} />
                <h3 className="mt-6 text-lg font-semibold text-green-800 border-b pb-2">Existing Aptitudes</h3>
                <ul className="mt-2 space-y-2">
                  {aptitudes.map((a) => (
                    <li key={a.id} className="p-3 bg-green-50 border border-green-100 rounded-lg">
                      <div className="flex justify-between items-center">
                        <strong className="text-green-700">{a.name}</strong>
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                          {categories.find(c => c.id === a.category_id)?.name || "N/A"}
                        </span>
                      </div>
                      {a.description && <p className="text-sm text-green-600 mt-1">{a.description}</p>}
                    </li>
                  ))}
                  {aptitudes.length === 0 && (
                    <li className="p-4 text-center text-green-500 bg-green-50 rounded-lg border border-dashed border-green-200">
                      No aptitudes added yet
                    </li>
                  )}
                </ul>
              </>
            )}

            {activeTab === "question" && (
              <>
                <AddQuestionForm aptitudes={aptitudes} onSubmit={handleAddQuestion} />
                <h3 className="mt-6 text-lg font-semibold text-purple-800 border-b pb-2">Added Questions</h3>
                <ul className="mt-2 space-y-3">
                  {questions.map((q, i) => (
                    <li key={i} className="p-4 bg-purple-50 border border-purple-100 rounded-lg">
                      <p className="font-medium text-purple-700 mb-2">{q.question}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                        {q.options.map((opt, idx) => (
                          <li key={idx} className={`p-2 text-sm rounded ${opt === q.answer ? 'bg-purple-100 text-purple-800 font-medium border border-purple-200' : 'bg-white text-gray-700 border'}`}>
                            {opt}
                            {opt === q.answer && <span className="ml-2 text-xs text-purple-600">(Correct Answer)</span>}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-purple-600"><strong>Explanation:</strong> {q.explanation}</p>
                    </li>
                  ))}
                  {questions.length === 0 && (
                    <li className="p-4 text-center text-purple-500 bg-purple-50 rounded-lg border border-dashed border-purple-200">
                      No questions added yet
                    </li>
                  )}
                </ul>
              </>
            )}
          </div>
        </div>

        {/* Right Side - Preview and Actions */}
        <div className="w-full lg:w-1/3 space-y-6">
          {/* Quiz Summary Card */}
          <div className="bg-white rounded-xl shadow-lg p-5">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Quiz Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-blue-700">Categories</span>
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  {categories.length}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-green-700">Aptitudes</span>
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  {aptitudes.length}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="text-purple-700">Questions</span>
                <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  {questions.length}
                </span>
              </div>
            </div>
            
            <button 
              className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200"
              disabled={questions.length === 0}
            >
              Finalize Quiz
            </button>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-white rounded-xl shadow-lg p-5">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center p-3 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition duration-200">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-blue-700">Save as Template</p>
                  <p className="text-xs text-blue-500">For future use</p>
                </div>
              </button>
              
              <button className="w-full flex items-center p-3 text-left bg-green-50 hover:bg-green-100 rounded-lg transition duration-200">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-green-700">Export Questions</p>
                  <p className="text-xs text-green-500">PDF, Word, or CSV</p>
                </div>
              </button>
              
              <button className="w-full flex items-center p-3 text-left bg-purple-50 hover:bg-purple-100 rounded-lg transition duration-200">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-purple-700">Schedule Quiz</p>
                  <p className="text-xs text-purple-500">Set availability dates</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}