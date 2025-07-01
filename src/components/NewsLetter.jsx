import React from "react";

function NewsLetter() {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-6 py-32 px-4 bg-[linear-gradient(rgba(0,32,0,0.5),rgba(0,0,0,0.5)),url(/images/fruit-bg.jpg)] bg-cover bg-center text-white">
        {/* Heading & Subtext */}
        <div className="text-center max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#b2bd34] mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-[#efe1b0] text-base sm:text-lg">
            Get the latest updates and exclusive offers!
          </p>
        </div>

        {/* Form */}
        <form
          className="w-full max-w-xl flex items-center justify-center border border-[#efe1b0] rounded-full p-2 sm:p-3 bg-[#033733] transform hover:scale-105 shadow-md hover:shadow-yellow-400 hover:shadow-xl 
                transition duration-300"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 bg-transparent text-[#efe1b0] placeholder-[#dcd3a1] px-4 py-2 focus:outline-none"
          />
          <button
            type="submit"
            className="sm:mt-0 sm:ml-4 px-6 py-2 bg-[#b2bd34] text-[#022d28] font-semibold rounded-full hover:bg-[#a1aa30] transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
}

export default NewsLetter;
