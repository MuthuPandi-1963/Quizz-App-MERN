import type React from "react"
import { useState, useRef, useEffect } from "react"
import { FiMail, FiRefreshCw } from "react-icons/fi"
import { useAppDispatch, useAppSelector } from "../../interfaces/hook"
import { OTPThunk } from "../../../store/thunks/auth/OTPThunk"
import type { OTPDataType } from "../../interfaces/auth"
export default function OTPVerification() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""])
    const [timeLeft, setTimeLeft] = useState(300) // 5 minutes
    const inputRefs = useRef<(HTMLInputElement | null)[]>(new Array(6).fill(null))
    const dispatch = useAppDispatch()

    const { isLoading, email, phone, id} = useAppSelector((state) => state.auth.data)  
    // assume your auth slice has email, phone, isLoading

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const onVerify = (otp: string) => {
        const OTPData  : OTPDataType = {id,otp,email ,phone}
        console.log(OTPData);
        
        dispatch(OTPThunk({ otp, email, phone ,id })) 
    }

    const onResend = () => {
        // Optionally dispatch a resend thunk
        console.log("Resend OTP triggered")
    }

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) return

        const newOtp = [...otp]
        newOtp[index] = value
        setOtp(newOtp)

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus()
        }

        if (newOtp.every((digit) => digit !== "") && !isLoading) {
            onVerify(newOtp.join(""))
        }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus()
        }
    }

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault()
        const pastedData = e.clipboardData.getData("text").slice(0, 6)
        const newOtp = [...otp]

        for (let i = 0; i < pastedData.length; i++) {
            if (i < 6 && /^\d$/.test(pastedData[i])) {
                newOtp[i] = pastedData[i]
            }
        }

        setOtp(newOtp)
        if (newOtp.every((digit) => digit !== "")) {
            onVerify(newOtp.join(""))
        }
    }

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, "0")}`
    }

    return (
        <div className="space-y-6 mt-10 p-8 rounded-xl">
            <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiMail className="w-8 h-8 text-emerald-600" />
                </div>
                <p className="text-gray-600">
                    We've sent a verification code to{" "}
                    <span className="font-semibold text-gray-900">{email || phone}</span>
                </p>
            </div>

            {/* OTP Inputs */}
            <div className="flex justify-center gap-x-2">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        ref={(el) =>{ (inputRefs.current[index] = el)}}
                        type="text"
                        inputMode="numeric"
                        pattern="\d*"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-all duration-200"
                        disabled={isLoading}
                    />
                ))}
            </div>

            <div className="text-center">
                <p className="text-sm text-gray-500">
                    Code expires in{" "}
                    <span className="font-semibold text-emerald-600">{formatTime(timeLeft)}</span>
                </p>
            </div>

            <div className="text-center grid justify-items-center">
                <p className="text-sm text-gray-600">Didn't receive the code?</p>
                <button
                    onClick={onResend}
                    disabled={timeLeft > 0 || isLoading}
                    className="inline-flex items-center px-4 text-sm font-medium text-emerald-600 hover:text-emerald-700 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
                >
                    <FiRefreshCw className="w-4 h-4 mr-2 text-green-600 " />
                    <span className="text-green-500 font-bold">Resend Code</span>
                </button>
            </div>

            {isLoading && (
                <div className="text-center">
                    <div className="inline-flex items-center px-4 py-2 text-sm text-gray-600">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-emerald-600 mr-2"></div>
                        Verifying...
                    </div>
                </div>
            )}
        </div>
    )
}
