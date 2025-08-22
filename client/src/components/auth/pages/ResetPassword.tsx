import type React from "react"
import { useState } from "react"
import { FiMail, FiArrowRight, FiCheck } from "react-icons/fi"

// interface ResetPasswordProps {
//   onSubmit: (email: string) => void
//   isLoading?: boolean
//   isSuccess?: boolean
// }
// { onSubmit, isLoading = false, isSuccess = false }: ResetPasswordProps
export default function ResetPassword() {
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState<{ email?: string }>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const onSubmit = (email : string)=>{setIsLoading(prev=>!prev);setIsSuccess(prev=>prev);email}
  const validateForm = () => {
    const newErrors: { email?: string } = {}

    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm() && !isLoading) {
      onSubmit(email)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <FiCheck className="w-8 h-8 text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Check Your Email</h3>
          <p className="text-gray-600">
            We've sent password reset instructions to <span className="font-semibold text-gray-900">{email}</span>
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>Didn't receive the email?</strong> Check your spam folder or try again in a few minutes.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Info Section */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FiMail className="w-8 h-8 text-blue-600" />
        </div>
        <p className="text-gray-600">
          Enter your email address and we'll send you instructions to reset your password.
        </p>
      </div>

      {/* Email Input */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <div className="relative">
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500 focus:outline-none transition-all duration-200 ${
              errors.email ? "border-red-300" : "border-gray-300"
            }`}
            placeholder="Enter your email address"
            disabled={isLoading}
          />
          <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Sending Instructions...
          </>
        ) : (
          <>
            Send Reset Instructions
            <FiArrowRight className="ml-2 w-5 h-5" />
          </>
        )}
      </button>

      {/* Help Text */}
      <div className="text-center mt-4">
        <p className="text-md  text-gray-500">
          Remember your password?{" "}
          <button
            type="button"
            className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200"
            onClick={() => window.history.back()}
          >
            Back to Login
          </button>
        </p>
      </div>
    </form>
  )
}
