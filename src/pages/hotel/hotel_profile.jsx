

import React, { useState, useRef, useContext } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Drag from "../drag";
import { UserContext } from "../../UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [profileImage, setProfileImage] = useState("./src/images/logo.jpg"); // Default profile image
  const [isImageUpdated, setIsImageUpdated] = useState(false); // Track if image has been updated
  const [leaderboardData, setLeaderboardData] = useState([
    { id: 1, name: "Aashish Birhade", points: 100, image: "./src/images/logo.jpg" },
    { id: 2, name: "Jayesh", points: 80, image: "./src/images/logo.jpg" },
    { id: 3, name: "Gaurav", points: 60, image: "./src/images/logo.jpg" },
    { id: 4, name: "Sanket", points: 40, image: "./src/images/logo.jpg" },
    { id: 5, name: "Moreshwar", points: 20, image: "./src/images/logo.jpg" },
  ]);

  // Sort leaderboard by points in descending order
  const sortedLeaderboard = leaderboardData.sort((a, b) => b.points - a.points);

  const getLast12Months = () => {
    const currentDate = new Date();
    const months = [];
    for (let i = 11; i >= 0; i--) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - i,
        1
      );
      months.push(
        date.toLocaleString("default", { month: "short", year: "numeric" })
      );
    }
    return months;
  };

  const last12Months = getLast12Months();
  const daysPerWeek = 7;
  const weeksPerMonth = 5; // Approximate weeks per month
  const totalDays = daysPerWeek * weeksPerMonth;

  const generateEmptyContributions = () => {
    return Array(last12Months.length * totalDays).fill(false); // No random entries
  };

  const [contributions, setContributions] = useState(generateEmptyContributions());

  const scrollRef = useRef(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, []);

  const addTodayContribution = () => {
    const today = new Date();
    const currentMonthIndex = last12Months.length - 1;
    const currentDay = today.getDate() - 1;
    const currentWeek = Math.floor(currentDay / daysPerWeek);
    const dayIndexInWeek = currentDay % daysPerWeek;

    const todayIndex =
      currentMonthIndex * totalDays +
      currentWeek * daysPerWeek +
      dayIndexInWeek;

    setContributions((prev) => {
      const updated = [...prev];
      updated[todayIndex] = true;
      return updated;
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        setIsImageUpdated(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div>
        <div className="text-white p-8 bg-black flex gap-10">
          {/* Profile Sidebar Section with Sliding Animation */}
          <motion.div
            className="w-1/5 bg-zinc-800 rounded-lg p-8 space-y-8 text-center"
            initial={{ x: "-100%" }} // Initial position off-screen
            animate={{ x: 0 }} // Animate to normal position
            exit={{ x: "-100%" }} // Exit to off-screen when removed
            transition={{ duration: 1 }} // Duration of the sliding effect
          >
            <div className="bg-purple-700 h-40 p-2 w-40 items-center  rounded-full" >
              <img
                src={profileImage}
                alt="Profile"
                className=" m-auto  h-36 w-36 rounded-full"
              />
            </div>
            <div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="imageUpload"
                onChange={handleImageUpload}
              />
              <label
                htmlFor="imageUpload"
                className="bg-sky-600 p-2 font-extrabold rounded-md hover:text-black cursor-pointer"
              >
                {isImageUpdated ? "Update Image" : "Upload Photo"}
              </label>
            </div>
            <div className="text-lg space-y-4 text-left">
              <p className="hover:bg-black hover:text-red-600 hover:cursor-pointer rounded-md p-2">
                Dashboard
              </p>
              <p className="hover:bg-black hover:text-red-600 hover:cursor-pointer rounded-md p-2">
                My Donation
              </p>
              <p className="hover:bg-black hover:text-red-600 hover:cursor-pointer rounded-md p-2">
                Add Inventory
              </p>
              <p className="hover:bg-black hover:text-red-600 hover:cursor-pointer rounded-md p-2">
                Status Inventory
              </p>
              <p className="hover:bg-black hover:text-red-600 hover:cursor-pointer rounded-md p-2">
                Donate food
              </p>
              <p className="hover:bg-black hover:text-red-600 hover:cursor-pointer rounded-md p-2">
                Decompose food
              </p>
            </div>
            <div>
              <button className="bg-red-700 hover:bg-sky-400 shadow-lg w-32 rounded-lg text-lg font-semibold text-white hover:text-black h-10">
                Logout
              </button>
            </div>
          </motion.div>

          {/* Main Content Section */}
          <motion.div
            className="w-4/5"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1 }}
          >
            <div className="w-full pb-5 gap-10 h-fit flex">
              <motion.div
                className="w-3/5 bg-zinc-800 p-8 rounded-lg"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 1 }}
              >
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Hotel Owner Personal Information</h3>
                  <div className="space-y-6 p-2 text-lg">
                    <p>Name : {user.username}</p>
                    <p>Email : {user.email} </p>
                    <p>Profile Type : {user.category}</p>
                    <p>Profile Id :121</p>
                  </div>
                </div>
              </motion.div>

              {/* Leaderboard Section */}
              <motion.div
                className="bg-zinc-800 w-2/5 p-5 text-lg text-center rounded-md h-96 overflow-y-auto"
                initial={{ x: "100%" }} // Initial position off-screen
                animate={{ x: 0 }} // Animate to normal position
                exit={{ x: "100%" }} // Exit to off-screen when removed
                transition={{ duration: 1 }}
              >
                <h1 className="mb-4 font-bold text-2xl">Leaderboard</h1>
                <div className="space-y-3">
                  {sortedLeaderboard.map((user, index) => (
                    <div
                      key={user.id}
                      className="border border-white rounded-lg flex justify-around items-center p-1"
                    >
                      <p>{index + 1}</p>
                      <img
                        src={user.image}
                        alt={user.name}
                        className="w-12 rounded-full"
                      />
                      <p>{user.name}</p>
                      <p>{user.points}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Last 12 Months Section */}
             {/* Last 12 Months Section */}
             <motion.div
              className="bg-green-600 h-fit"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1 }}
            >
              <div className="flex flex-col items-start bg-zinc-800 text-white min-h-fit p-6">
                <h1 className="text-2xl font-bold mb-4">
                  Last 12 Months Food Donation{" "}
                </h1>
                <div className="flex items-center justify-between mb-4 w-full"></div>
                <div
                  ref={scrollRef}
                  className="flex gap-4 overflow-auto w-full border border-gray-700 rounded-lg p-4"
                >
                  {last12Months.map((month, monthIndex) => (
                    <div
                      key={monthIndex}
                      className="flex flex-col items-center"
                    >
                      <h2 className="text-sm font-medium mb-2">{month}</h2>
                      <div className="flex flex-col gap-1">
                        {Array.from({ length: weeksPerMonth }).map(
                          (_, weekIndex) => (
                            <div key={weekIndex} className="flex gap-1">
                              {Array.from({ length: daysPerWeek }).map(
                                (_, dayIndex) => {
                                  const globalIndex =
                                    monthIndex * totalDays +
                                    weekIndex * daysPerWeek +
                                    dayIndex;
                                  const dayOfMonth =
                                    weekIndex * daysPerWeek + dayIndex + 1;

                                  // Ensure valid day numbers for each month
                                  const daysInMonth = new Date(
                                    new Date().getFullYear(),
                                    monthIndex + 1,
                                    0
                                  ).getDate();
                                  const validDay = dayOfMonth <= daysInMonth;

                                  return (
                                    <div
                                      key={globalIndex}
                                      className={`w-8 h-8 rounded-sm flex items-center justify-center text-xs font-medium transition-colors ${
                                        validDay
                                          ? contributions[globalIndex]
                                            ? "bg-green-500 text-white"
                                            : "bg-gray-700 text-gray-300"
                                          : "bg-gray-800 text-gray-500"
                                      }`}
                                    >
                                      {validDay ? dayOfMonth : ""}
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Donate Food Section */}
      <div className="flex gap-10 bg-black px-8">
        {/* Donation Form Section */}
        <motion.div
          className="text-white  bg-black py-2 w-1/2"
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }} // Slide in from the left when in view
          exit={{ x: "-100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} // Animate only once when scrolled into view
        >
          <div className="w-full bg-zinc-800 rounded-lg p-8">
            <p className="font-bold text-center text-2xl">Donate Food</p>
            <form action="">
              <label htmlFor="" className="block font-medium mb-1">
                Enter food Name
              </label>
              <input
                type="text"
                name=""
                id=""
                className="w-full p-2 border mb-3 border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
              />

              <label htmlFor="" className="block font-medium mb-1">
                Enter Item Quantity
              </label>
              <input
                type="number"
                name=""
                id=""
                className="w-full p-2 border mb-3 border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
              />

              <label htmlFor="" className="block font-medium mb-1">
                Enter Item Image
              </label>
              <input
                type="file"
                name=""
                id=""
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
              />
            </form>
            <div className="text-center mt-8">
              <button
                onClick={addTodayContribution}
                className="bg-green-600 p-3 rounded-lg text-xl font-bold"
              >
                Donate
              </button>
            </div>
          </div>
        </motion.div>

        {/* Drag Section on Right */}
        <motion.div
          className="w-1/2"
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }} // Slide in from the right when in view
          exit={{ x: "100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} // Animate only once when scrolled into view
        >
          <Drag />
        </motion.div>
      </div>
    </>
  );
}

export default Profile;

