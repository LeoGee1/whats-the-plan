import { Outlet } from "react-router-dom";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const AuthLayout = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const toggleMode = () => setIsSignUp(!isSignUp);

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gray-400 dark:bg-gray-900 font-['Inter']">
      <div className="w-full h-screen flex flex-col md:flex-row rounded-md shadow-xl overflow-hidden">
        {/* Left Panel with Image */}
        <div
          className={`w-full md:w-2/5 h-1/2 md:h-full relative transition-all duration-500 ${
            isSignUp ? "order-1 md:order-1" : "order-2 md:order-2"
          }`}
        >
          <img
            src={isSignUp ? "/images/event-image.png" : "/images/event-image1.png"}
            alt="Auth Visual"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-6 text-center">
            <h2
              className="text-4xl font-lighter mb-4 text-white/80"
              style={{ fontFamily: "Pacifico, cursive" }}
            >
              What’s the plan?
            </h2>
            <p className="mb-4 max-w-xs">
              {isSignUp
                ? "To keep connected with us, please login with your info"
                : "Create an account and discover new event experiences"}
            </p>
            <button
              onClick={toggleMode}
              className="bg-white/80 text-gray-900 px-6 py-2 rounded-md shadow hover:bg-gray-200 transition"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>

        {/* Right Panel with Form */}
        <div
          className={`w-full md:w-3/5 flex items-center justify-center p-6 md:p-10 transition-all duration-500 ${
            isSignUp ? "order-2 md:order-2" : "order-1 md:order-1"
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isSignUp ? "signup" : "signin"}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-md rounded-md"
            >
              <h2 className="text-2xl font-bold text-center mb-6">
                {isSignUp ? (
                  <>
                    Sign Up to know What’s the{" "}
                    <span className="text-purple-600 font-extrabold">plan</span>
                  </>
                ) : (
                  <>
                    Sign In to know What’s the{" "}
                    <span className="text-purple-600 font-extrabold">plan</span>
                  </>
                )}
              </h2>

              <form className="space-y-6 text-left">
                {isSignUp && (
                  <div>
                    <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white  focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                )}
                <div>
                  <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase">
                    Enter Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white  focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="********"
                    className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white  focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                {isSignUp && (
                  <div>
                    <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="********"
                      className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white  focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                )}
                <button
                  type="submit"
                  className="bg-purple-800 text-white/90 py-2 px-14 rounded-md mx-auto block hover:bg-purple-700 transition"
                >
                  {isSignUp ? "Sign Up" : "Sign In"}
                </button>
              </form>

              {!isSignUp && (
                <div className="text-right mt-2">
                  <a
                    href="#"
                    className="text-sm text-purple-500 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
              )}

              <div className="flex items-center my-4">
                <hr className="flex-grow border-t border-gray-300 dark:border-gray-600" />
                <span className="mx-2 text-gray-500 dark:text-gray-400">Or</span>
                <hr className="flex-grow border-t border-gray-300 dark:border-gray-600" />
              </div>

              <button className="flex items-center justify-center bg-white dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-14 shadow hover:bg-gray-100 mx-auto border-1 border-black dark:hover:bg-gray-600 transition">
                <FaGoogle className="mr-2" />
                {isSignUp ? "Sign up with Google" : "Sign in with Google"}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
