import type React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { validateEmailOrPhone, validatePassword, ValidateIsEmail, ValidateIsPhone, validateUsername } from "../../../utils/Validator";
import { LoginThunk } from "../../../store/thunks/auth/LoginThunk";
import type { LoginDataType } from "../../interfaces/auth";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [identifier, setIdentifier] = useState(""); // username | email | phone
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

const validateForm = () => {
  const newErrors: { [key: string]: string } = {};

  // Check if identifier is email
  if (ValidateIsEmail(identifier)) {
    const emailError = validateEmailOrPhone(identifier);
    if (emailError) newErrors.identifier = emailError;
  }
  // Check if identifier is phone
  else if (ValidateIsPhone(identifier)) {
    const phoneError = validateEmailOrPhone(identifier);
    if (phoneError) newErrors.identifier = phoneError;
  }
  // Otherwise treat it as username
  else {
    const usernameError = validateUsername(identifier);
    if (usernameError) newErrors.identifier = usernameError;
  }

  // Password validation
  const passwordError = validatePassword(password);
  if (passwordError) newErrors.password = passwordError;

  return newErrors;
};


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setIsLoading(true);

      const loginData: LoginDataType = { password };

      if (ValidateIsEmail(identifier)) {
        loginData.email = identifier;
      } else if (ValidateIsPhone(identifier)) {
        loginData.phone = identifier;
      } else {
        loginData.username = identifier;
      }


      const response = await dispatch(LoginThunk(loginData) as any);
      if(response.payload.success){
        const {role} = response.payload.data
        navigate(`/${role}`)
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
        <p className="text-gray-600 mt-2">Sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Identifier (username/email/phone) */}
        <div>
          <label htmlFor="identifier" className="block text-sm font-medium text-gray-700 mb-2">
            Username, Email or Phone
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiUser className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="identifier"
              type="text"
              required
              autoComplete="username"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter username, email or phone"
            />
          </div>
          {errors.identifier && <p className="text-red-500 text-sm mt-1">{errors.identifier}</p>}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiLock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              ) : (
                <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              )}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
            Forgot password?
          </a>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full rounded-xl my-3 text-amber-100 bg-blue-600 py-3 cursor-pointer ${isLoading && "cursor-not-allowed"}`}
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      {/* Switch to Signup */}
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Don't have an account?{" "}
          <Link to={"/auth/signup"} className="ml-2 text-green-700 font-bold underline cursor-pointer">
            Sign Up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
