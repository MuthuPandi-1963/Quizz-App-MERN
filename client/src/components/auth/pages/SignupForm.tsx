"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateConfirmPassword, validateEmailOrPhone, validateFullName, ValidateIsEmail, ValidateIsPhone, validatePassword } from "../../../utils/Validator";
import TextInput from "../../../utils/form/TextInput";
import PasswordInput from "../../../utils/form/PasswordInput";
import Checkbox from "../../../utils/form/CheckBox";
import { SignupThunk } from "../../../store/thunks/auth/SignupThunk";
import { useAppDispatch } from "../../interfaces/hook";
import type { SignupDataType } from "../../interfaces/auth";



const SignupForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [fullName, setFullName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (validateFullName(fullName)) newErrors.fullName = validateFullName(fullName)!;
    if (validateEmailOrPhone(emailOrPhone)) newErrors.emailOrPhone = validateEmailOrPhone(emailOrPhone)!;
    if (validatePassword(password)) newErrors.password = validatePassword(password)!;
    if (validateConfirmPassword(password, confirmPassword))
      newErrors.confirmPassword = validateConfirmPassword(password, confirmPassword)!;
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    try {
      setIsLoading(true);
      
      const SignupData :SignupDataType = {full_name:fullName,password}
      if(ValidateIsEmail(emailOrPhone)) SignupData.email = emailOrPhone
      if(ValidateIsPhone(emailOrPhone)) SignupData.phone = emailOrPhone
      console.log(SignupData);
      const response = await dispatch(SignupThunk(SignupData));
      console.log(response.payload);
      if(response.payload.success){
        console.log("hsdkfhdskfhk");
        
        navigate("/auth/otp")
      }
      
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-transparent rounded-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
        <p className="text-gray-600 mt-2">Join our learning platform</p>
      </div>

      <form onSubmit={handleSubmit} className="md:space-y-6 space-y-2">
        <TextInput
          id="fullName"
          label="Full Name"
          icon="user"
          value={fullName}
          onChange={setFullName}
          error={errors.fullName}
          placeholder="Enter your full name"
          autoComplete="name"
        />

        <TextInput
          id="emailOrPhone"
          label="Email or Phone"
          icon="mail"
          value={emailOrPhone}
          onChange={setEmailOrPhone}
          error={errors.emailOrPhone}
          placeholder="Enter email or phone number"
          autoComplete="email"
        />

        <PasswordInput
          id="password"
          label="Password"
          value={password}
          onChange={setPassword}
          error={errors.password}
          placeholder="Create a password"
          withRules
        />

        <PasswordInput
          id="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          error={errors.confirmPassword}
          placeholder="Confirm your password"
        />

        <Checkbox
          id="terms"
          label={
            <>
              I agree to the{" "}
              <a href="#" className="text-green-600 hover:text-green-500">
                Terms and Conditions
              </a>
            </>
          }
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 transition-all font-medium"
        >
          {isLoading ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      <div className="mt-4 text-center">
        <p>
          Already have an account?{" "}
          <Link to={"/auth/login"} className="ml-2 text-blue-700 font-bold underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
