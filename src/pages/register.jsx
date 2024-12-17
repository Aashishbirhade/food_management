import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const categories = ["Individual", "Shopkeeper", "Hotel", "Corporate", "Other"];

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Show success message
    setSuccessMessage(true);

    // After 2 seconds, navigate to the login page
    setTimeout(() => {
      setSuccessMessage(false);
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="flex w-full h-screen bg-zinc-800 text-white relative">
      {/* Blur Effect and Success Message */}
      <AnimatePresence>
        {successMessage && (
          <>
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-green-500 text-black p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold">Registration Successful!</h2>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Left Side: Image */}
      <div className="hidden md:block md:w-1/2 py-16">
        <motion.img
          src="./src/images/r2.png"
          alt="Register"
          className="w-1/2 m-auto"
          initial={{ x: -300, opacity: 0 }} // Start position (offscreen to the left)
          animate={{ x: 0, opacity: 1 }} // End position (onscreen)
          transition={{
            type: "spring", // Match with form animation
            stiffness: 80, // Slightly softer stiffness
            damping: 20, // Smooth the spring effect
            duration: 1.2, // Slightly longer duration
          }}
        />
      </div>

      {/* Right Side: Form */}
      <motion.div
        className={`w-full md:w-1/2 h-full p-8 flex flex-col justify-center bg-zinc-800 rounded-lg mx-auto ${
          successMessage ? "blur-sm" : ""
        }`}
        initial={{ opacity: 0, x: 100 }} // Start position (offscreen to the right)
        animate={{ opacity: 1, x: 0 }} // End position (onscreen)
        exit={{ opacity: 0, x: -100 }} // Exit animation
        transition={{
          type: "spring", // Spring animation
          stiffness: 100,
          damping: 25,
          duration: 1.2, // Match duration with image
        }}
      >
        <h2 className="text-3xl mb-6 text-center font-bold">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Form inputs */}
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
            required
          />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
            required
          />
          {/* Category input */}
          <div className="relative">
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              list="categories"
              placeholder="Category"
              className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
              required
            />
            <datalist id="categories">
              {categories.map((cat, index) => (
                <option key={index} value={cat} />
              ))}
            </datalist>
          </div>
          {/* Password input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
          {/* Confirm password input */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-[#00FF09] hover:bg-green-500 hover:text-white p-3 text-black text-lg font-bold rounded-lg mt-4"
          >
            Register
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;
