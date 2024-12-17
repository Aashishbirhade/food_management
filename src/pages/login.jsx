// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Login = () => {
//   const [category, setCategory] = useState("individual");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [createPassword, setCreatePassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   // Handle category change
//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (createPassword !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     alert(`Form submitted for category: ${category}`);
//   };

//   // Image based on category
//   const getImage = () => {
//     switch (category) {
//       case "individual":
//         return "./src/images/1.png";
//       case "shopkeeper":
//         return "./src/images/4.png";
//       case "hotel":
//         return "./src/images/3.png";
//       default:
//         return "./src/images/4.png";
//     }
//   };

//   return (
//     <div className="flex w-full h-screen bg-zinc-800 text-white">
//       {/* Left Side: Image */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={category}
//           className="w-1/2 h-full flex items-center justify-center"
//           initial={{ x: -500, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: 100, opacity: 0 }}
//           transition={{
//             type: "spring",
//             stiffness: 100,
//             damping: 25,
//             duration: 0.1,
//           }}
//           style={{
//             backgroundImage: `url(${getImage()})`,
//             backgroundSize: "contain", // Adjusts the image size to fit the container without clipping
//             backgroundPosition: "center", // Centers the image inside the container
//             backgroundRepeat: "no-repeat", // Prevents repeating the background image
//             height: "400px", 
//             marginTop:'200px',
           
//           }}
//         >
//           {/* Image will stay centered even with reduced height */}
//         </motion.div>
//       </AnimatePresence>

//       {/* Right Side: Form */}
//       <motion.div
//         className="w-1/2 h-full p-8 flex flex-col justify-center bg-zinc-800 rounded-lg"
//         initial={{ x: 500 }}
//         animate={{ x: 0 }}
//         exit={{ x: -500 }}
//         transition={{ type: "spring", stiffness: 100, damping: 25 }}
//       >
//         <h2 className="text-3xl mb-6 text-center">
//           Multi Category Registration
//         </h2>

//         {/* Category Buttons */}
//         <div className="flex justify-center space-x-6 mb-6">
//           <button
//             value="individual"
//             onClick={handleCategoryChange}
//             className={`category-btn ${
//               category === "individual" ? "bg-orange-500" : "bg-gray-700"
//             } p-3 text-white rounded-full`}
//           >
//             Individual
//           </button>
//           <button
//             value="shopkeeper"
//             onClick={handleCategoryChange}
//             className={`category-btn ${
//               category === "shopkeeper" ? "bg-orange-500" : "bg-gray-700"
//             } p-3 text-white rounded-full`}
//           >
//             Shopkeeper
//           </button>
//           <button
//             value="hotel"
//             onClick={handleCategoryChange}
//             className={`category-btn ${
//               category === "hotel" ? "bg-orange-500" : "bg-gray-700"
//             } p-3 text-white rounded-full`}
//           >
//             Hotel
//           </button>
//         </div>

//         {/* Form based on category */}
//         {/* Form based on category */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Individual Form */}
//           {category === "individual" && (
//             <motion.div
//               className="form-container space-y-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1 }}
//             >
//               <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Username"
//                 className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
//                 required
//               />
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
//                 required
//               />
//               <input
//                 type="password"
//                 id="createPassword"
//                 value={createPassword}
//                 onChange={(e) => setCreatePassword(e.target.value)}
//                 placeholder="Create Password"
//                 className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
//                 required
//               />
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="Confirm Password"
//                 className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
//                 required
//               />
//             </motion.div>
//           )}

//           {/* Shopkeeper Form */}
//           {category === "shopkeeper" && (
//             <motion.div
//               className="form-container space-y-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1 }}
//             >
//               <input
//                 type="text"
//                 id="shopkeeperName"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Shopkeeper Name"
//                 className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
//                 required
//               />
//               <input
//                 type="email"
//                 id="shopkeeperEmail"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Shopkeeper Email"
//                 className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
//                 required
//               />
//               <input
//                 type="password"
//                 id="shopkeeperPassword"
//                 value={createPassword}
//                 onChange={(e) => setCreatePassword(e.target.value)}
//                 placeholder="Shopkeeper Password"
//                 className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
//                 required
//               />
//               <input
//                 type="password"
//                 id="shopkeeperConfirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="Confirm Password"
//                 className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
//                 required
//               />
//               <input
//                 type="text"
//                 id="shopName"
//                 placeholder="Shop Name"
//                 className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
//                 required
//               />
//             </motion.div>
//           )}

//           {/* Hotel Form */}
//           {category === "hotel" && (
//             <motion.div
//               className="form-container space-y-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1 }}
//             >
//               <input
//                 type="text"
//                 id="hotelName"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Hotel Name"
//                 className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
//                 required
//               />
//               <input
//                 type="email"
//                 id="hotelEmail"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Hotel Email"
//                 className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
//                 required
//               />
//               <input
//                 type="password"
//                 id="hotelPassword"
//                 value={createPassword}
//                 onChange={(e) => setCreatePassword(e.target.value)}
//                 placeholder="Hotel Password"
//                 className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
//                 required
//               />
//               <input
//                 type="password"
//                 id="hotelConfirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="Confirm Password"
//                 className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
//                 required
//               />
//               <input
//                 type="text"
//                 id="hotelLocation"
//                 placeholder="Hotel Location"
//                 className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
//                 required
//               />
//             </motion.div>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-orange-500 p-3 text-white rounded-lg mt-4"
//           >
//             Register
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;


import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserContext } from "../UserContext"; // Assuming the UserContext is in a separate file
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Login = () => {
  const [category, setCategory] = useState("individual");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");


  const { setUser } = useContext(UserContext); // Consume UserContext
  const navigate = useNavigate(); // Initialize the navigation hook

  // Handle category change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    
    // Update user context
    setUser({
      username: username,
      category: category,email :email,
      isLoggedIn: true,
    });

    // Navigate based on category
    if (category === "individual") {
      navigate("/profile");
    } else if (category === "shopkeeper") {
      navigate("/shopkeeper_profile");
    } else if (category === "hotel") {
      navigate("/hotel_profile");
    }
  };

  // Image based on category
  const getImage = () => {
    switch (category) {
      case "individual":
        return "./src/images/1.png";
      case "shopkeeper":
        return "./src/images/4.png";
      case "hotel":
        return "./src/images/3.png";
      default:
        return "./src/images/4.png";
    }
  };

  return (
    <div className="flex w-full h-screen bg-zinc-800 text-white">
      {/* Left Side: Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={category}
          className="w-1/2 h-full flex items-center justify-center"
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            duration: 0.1,
          }}
          style={{
            backgroundImage: `url(${getImage()})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "400px",
            marginTop: "200px",
          }}
        />
      </AnimatePresence>

      {/* Right Side: Form */}
      <motion.div
        className="w-1/2 h-full p-8 flex flex-col justify-center bg-zinc-800 rounded-lg"
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        exit={{ x: -500 }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
      >
        <h2 className="text-3xl mb-6 text-center">
          Multi Category Login
        </h2>

        {/* Category Buttons */}
        <div className="flex justify-center space-x-6 mb-6">
          <button
            value="individual"
            onClick={handleCategoryChange}
            className={`category-btn ${
              category === "individual" ? "bg-[#00FF09]" : "bg-gray-700"
            } p-3 text-white rounded-full`}
          >
            Individual
          </button>
          <button
            value="shopkeeper"
            onClick={handleCategoryChange}
            className={`category-btn ${
              category === "shopkeeper" ? "bg-[#00FF09]" : "bg-gray-700"
            } p-3 text-white rounded-full`}
          >
            Shopkeeper
          </button>
          <button
            value="hotel"
            onClick={handleCategoryChange}
            className={`category-btn ${
              category === "hotel" ? "bg-[#00FF09]" : "bg-gray-700"
              
            } p-3 text-white rounded-full`}
          >
            Hotel
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div
            className="form-container space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={
                category === "individual"
                  ? "Username"
                  : category === "shopkeeper"
                  ? "Shopkeeper Name"
                  : "Hotel Name"
              }
              className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
              required
            />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={`${category} Email`}
              className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
              required
            />
            <input
              type="password"
              id="createPassword"
              value={createPassword}
              onChange={(e) => setCreatePassword(e.target.value)}
              placeholder="Password"
              className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
              required
            />
          
          </motion.div>

          <button
            type="submit"
            className="w-full bg-[#00FF09] hover:bg-green-500 hover:text-white p-3 text-black text-lg font-bold rounded-lg mt-4"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
