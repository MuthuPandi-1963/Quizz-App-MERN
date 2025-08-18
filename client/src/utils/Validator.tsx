export function validateEmailOrPhone(value: string): string | null {
  if (!value.trim()) {
    return "Email or phone is required";
  }

  // Email regex (simple, not overly strict)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Phone regex (10–15 digits, optional + at start)
  const phoneRegex = /^\+?\d{10,15}$/;

  if (!emailRegex.test(value) && !phoneRegex.test(value)) {
    return "Enter a valid email or phone number";
  }

  return null; // ✅ No errors
}
export function validateFullName(fullName: string): string | null {
  if (!fullName.trim()) {
    return "Full name is required";
  }
  if (fullName.trim().length < 2) {
    return "Full name must be at least 2 characters";
  }
  return null;
}

export function validatePassword(password: string): string | null {
  if (!password) {
    return "Password is required";
  }

  if (password.length < 8) {
    return "Password must be at least 8 characters";
  }

  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter";
  }

  if (!/[a-z]/.test(password)) {
    return "Password must contain at least one lowercase letter";
  }

  if (!/[0-9]/.test(password)) {
    return "Password must contain at least one number";
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return "Password must contain at least one special character";
  }

  return null;
}


export function validateConfirmPassword(
  password: string,
  confirmPassword: string
): string | null {
  if (!confirmPassword) {
    return "Confirm password is required";
  }
  if (password !== confirmPassword) {
    return "Passwords do not match";
  }
  return null;
}


export const ValidateIsEmail  = (data : string) :boolean =>{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(data)
}
export const ValidateIsPhone = (data : string):boolean =>{
  const phoneRegex = /^\+?\d{10,15}$/;
  return phoneRegex.test(data)
}