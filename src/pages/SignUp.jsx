import React, { useState } from "react";
import { FaUserAlt, FaLock, FaEnvelope, FaPhone } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
// import './SignUp.css';

const SignUp = () => {
  useGSAP(() => {
    gsap.from(".signup-card", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "bounce.out",
    });
  }, []);

  //form data
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  //evaluate password strength
  const evaluatePasswordStrength = (password) => {
    if (password.length < 6) return "Weak";
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length >= 8 && hasLetters && hasNumbers && hasSpecial)
      return "Strong";
    if (password.length >= 8 && hasLetters && hasNumbers) return "Medium";
    return "Weak";
  };

  //validate field
  const validateField = (name, value) => {
    switch (name) {
      case "email":
        return /^\S+@\S+\.\S+$/.test(value) ? "" : "Invalid email format";
      case "password":
        return value.length >= 8 && /\d/.test(value) && /[a-zA-Z]/.test(value)
          ? ""
          : "Password must be at least 8 characters, include a letter and a number";
      case "phone":
        return /^\d{10,15}$/.test(value)
          ? ""
          : "Phone must be 10-15 digits with no spaces";
      default:
        return "";
    }
  };

  //confirm password logic
  const [confirmPassword, setConfirmPassword] = useState("");
  const confirmPasswordError =
    confirmPassword !== formData.password ? "Passwords do not match" : "";

  //handle confirm password change
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  //handle input field change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "password") {
      setPasswordStrength(evaluatePasswordStrength(value));
    }

    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  //hundle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const newErrors = {
      email: validateField("email", formData.email),
      password: validateField("password", formData.password),
      phone: validateField("phone", formData.phone),
    };

    setErrors(newErrors);
    if (Object.values(newErrors).some((error) => error)) return;

    try {
      const res = await fetch(
        "/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setMessage(data.message);
      setFormData({ fullName: "", phone: "", email: "", password: "" });
      setPasswordStrength("");
    } catch (err) {
      setMessage(err.message);
      console.log(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-myGreen flex flex-col items-center justify-center text-white px-4 py-8">
      <img
        src="/images/loginChungwa.png"
        alt="glitter"
        className="absolute -z-0 mt-[-10px] ml-[20rem] md:ml-[24rem] size-80 saturate-50 opacity-40  object-cover"
      />
      <img
        src="/images/watermelon.png"
        alt="glitter"
        className="absolute -z-0 mt-[-10px] mr-[80rem] md:ml-[24rem] size-40 saturate-50 opacity-40  object-cover"
      />
      <div className="signup-card z-20 bg-amber-50 text-green-900 rounded-2xl shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">🍍</div>
          <h2 className="text-2xl font-bold">Create Your Account</h2>
          <p className="text-sm text-green-700">
            Because fruit friends don’t let friends skip sign-up!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <FaUserAlt className="absolute left-3 top-3 text-green-800" />
            <input
              value={formData.fullName}
              type="text"
              placeholder="full Name"
              className="pl-10 py-2 rounded w-full border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-green-800" />
            <input
              value={formData.email}
              type="email"
              placeholder="Email"
              className="pl-10 py-2 rounded w-full border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div className="relative">
            <FaPhone className="absolute left-3 top-3 text-green-800" />
            <input
              value={formData.phone}
              type="text"
              placeholder="Phone number"
              className="pl-10 py-2 rounded w-full border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div className="relative flex items-center">
            <FaLock className="absolute left-3 top-3 text-green-800" />
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="pl-10 py-2 rounded w-full border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 text-gray-600 dark:text-gray-300"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">{errors.password}</p>
          )}
          {formData.password && (
            <div className="mt-1">
              <div
                className={`h-1 rounded transition-all ${
                  passwordStrength === "Strong"
                    ? "bg-green-500 w-full"
                    : passwordStrength === "Medium"
                    ? "bg-yellow-500 w-2/3"
                    : "bg-red-500 w-1/3"
                }`}
              />
              <p
                className={`text-sm mt-1 ${
                  passwordStrength === "Strong"
                    ? "text-green-500"
                    : passwordStrength === "Medium"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {passwordStrength} Password
              </p>
            </div>
          )}

          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-green-800" />
            <input
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              type="password"
              placeholder="Confirm Password"
              className="pl-10 py-2 rounded w-full border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          {confirmPasswordError && (
            <p className="text-sm text-red-500 mt-1">{confirmPasswordError}</p>
          )}

          <label className="text-sm flex items-center gap-2">
            <input type="checkbox" className="accent-lime-500" />I agree to the
            Terms and Conditions 🍉
          </label>

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold py-2 px-4 rounded transition duration-300"
          >
            Sign Up 🍇
          </button>
          {/* Message */}
          {message && <p className="text-sm text-yellow-300">{message}</p>}
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="#" className="text-lime-600 font-semibold">
            Log in
          </a>
        </p>
      </div>

      <img
        src="/images/glitter-2.png"
        alt="glitter"
        className="absolute z-20 mt-[28rem] ml-[15rem] md:ml-[24rem] w-10 h-10 object-cover"
      />
    </div>
  );
};

export default SignUp;
