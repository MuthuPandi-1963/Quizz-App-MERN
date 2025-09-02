import { Link } from "react-router-dom";
import { FiHome, FiArrowLeft, FiSearch, FiFileText, FiBookOpen } from "react-icons/fi";

export default function Staff404Page() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 flex ">
      <div className=" w-full h-screen overflow-hidden grid justify-center">
        <div className="px-8">
          {/* Error Code */}
          <div className="flex justify-center mt-8">

          <div className="text-center mb-8">
            <h1 className="text-9xl font-bold text-blue-800">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
            <p className="text-gray-600 mt-2">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Illustration */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-28 h-28 bg-blue-100 rounded-full flex items-center justify-center">
                <FiBookOpen className="text-blue-500 text-6xl" />
                <div className="absolute top-0 right-0 bg-red-100 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="text-red-600 text-2xl font-bold">?</span>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/staff/dashboard"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center"
            >
              <FiHome className="mr-2" />
              Go to Dashboard
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center"
            >
              <FiArrowLeft className="mr-2" />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Popular Staff Pages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link
                to="/staff/create-quiz"
                className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-200"
              >
                <FiFileText className="text-blue-600 mr-3" />
                <span>Create Quiz</span>
              </Link>
              <Link
                to="/staff/upload"
                className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-200"
              >
                <FiArrowLeft className="text-blue-600 mr-3 transform rotate-90" />
                <span>Upload Materials</span>
              </Link>
              <Link
                to="/staff/performance"
                className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-200"
              >
                <FiSearch className="text-blue-600 mr-3" />
                <span>Student Performance</span>
              </Link>
              <Link
                to="/staff/students"
                className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-200"
              >
                <FiBookOpen className="text-blue-600 mr-3" />
                <span>My Students</span>
              </Link>
            </div>
          </div>

          {/* Support Contact */}
          <div className="text-center mt-6 text-sm text-gray-600">
            <p>
              Need help? Contact{" "}
              <a href="mailto:support@eduplatform.com" className="text-blue-600 hover:underline">
                staff support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}