import React from "react";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
// import './SignUp.css';

const LogIn = () => {
  useGSAP(() => {
    gsap.from(".login-card", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "bounce.out",
    });
  }, []);

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
      <div className="login-card z-20 bg-amber-50 text-myGreen rounded-2xl shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">🍍</div>
          <h2 className="text-2xl font-bold">Log in Account</h2>
          <p className="text-sm text-green-700">
            Because fruit friends don’t let friends skip juicy fruit!
          </p>
        </div>

        <form className="flex flex-col gap-4">

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-myGreen" />
            <input
              type="email"
              placeholder="Email"
              className="pl-10 py-2 rounded w-full border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-myGreen" />
            <input
              type="password"
              placeholder="Password"
              className="pl-10 py-2 rounded w-full border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <label className="text-sm flex items-center gap-2">
            <input type="checkbox" className="accent-lime-500" />I agree to the
            Terms and Conditions 🍉
          </label>

          <button
            type="submit"
            className="bg-myYellow hover:bg-yellow-500 text-myGreen font-bold py-2 px-4 rounded transition duration-300"
          >
            Sign Up 🍇
          </button>
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

export default LogIn;
