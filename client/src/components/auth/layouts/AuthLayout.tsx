import { FiArrowLeft } from "react-icons/fi"
import { Outlet } from "react-router-dom"
import Footer from "../../common/Footer"



export default function AuthLayout() {
  return (
    <div className="min-h-full   flex">
      {/* Left Side - Image Section */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-blue-600"></div>
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
          <div className=" text-center grid justify-center">
            <img
              src="/e-learning-platform.png"
              alt={"image"}
              className="w-full mx-auto mb-8 rounded-2xl shadow-2xl"
            />
            <h2 className="text-3xl font-bold mb-4">Transform Your Learning Journey</h2>
            <p className="text-emerald-100 text-lg leading-relaxed">
              Join thousands of students and educators in our comprehensive learning management system. Track progress,
              take assessments, and achieve your academic goals.
            </p>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-300/20 rounded-full blur-lg"></div>
      </div>

      {/* Right Side - Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-6">
        <div className="bg-white rounded-2xl border p-4 max-w-md mx-auto w-full">
            <button
              className="flex items-center text-gray-600 hover:text-emerald-600 mb-8 transition-colors duration-200"
            >
              <FiArrowLeft className="mr-2" />
              Back
            </button>

          {/* Form Content */}
          <div className="">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  )
}
