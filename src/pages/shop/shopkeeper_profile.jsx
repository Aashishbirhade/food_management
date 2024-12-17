// import React, { useState, useRef ,useContext} from "react";
// import { motion } from "framer-motion"; // Import motion from framer-motion

// import { UserContext } from "../../UserContext";

// function Profile() {
//   const { user, setUser } = useContext(UserContext);
//   const getLast12Months = () => {
//     const currentDate = new Date();
//     const months = [];
//     for (let i = 11; i >= 0; i--) {
//       const date = new Date(
//         currentDate.getFullYear(),
//         currentDate.getMonth() - i,
//         1
//       );
//       months.push(
//         date.toLocaleString("default", { month: "short", year: "numeric" })
//       );
//     }
//     return months;
//   };

//   const last12Months = getLast12Months();
//   const daysPerWeek = 7;
//   const weeksPerMonth = 5; // Approximate weeks per month
//   const totalDays = daysPerWeek * weeksPerMonth;

//   const generateEmptyContributions = () => {
//     return Array(last12Months.length * totalDays).fill(false); // No random entries
//   };

//   const [contributions, setContributions] = useState(
//     generateEmptyContributions()
//   );

//   const scrollRef = useRef(null);

//   React.useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
//     }
//   }, []);

//   const addTodayContribution = () => {
//     const today = new Date();
//     const currentMonthIndex = last12Months.length - 1;
//     const currentDay = today.getDate() - 1;
//     const currentWeek = Math.floor(currentDay / daysPerWeek);
//     const dayIndexInWeek = currentDay % daysPerWeek;

//     const todayIndex =
//       currentMonthIndex * totalDays +
//       currentWeek * daysPerWeek +
//       dayIndexInWeek;

//     setContributions((prev) => {
//       const updated = [...prev];
//       updated[todayIndex] = true;
//       return updated;
//     });
//   };

//   return (
//     <>
//       <div>
//         <div className="text-white p-8 bg-black flex gap-10">
//           {/* Profile Sidebar Section with Sliding Animation */}
//           <motion.div
//             className="w-1/5 bg-zinc-800 rounded-lg p-8 space-y-8 text-center"
//             initial={{ x: "-100%" }} // Initial position off-screen
//             animate={{ x: 0 }} // Animate to normal position
//             exit={{ x: "-100%" }} // Exit to off-screen when removed
//             transition={{ duration: 1 }} // Duration of the sliding effect
//           >
//             <div>
//               <img
//                 src="./src/images/logo.jpg"
//                 alt=""
//                 className="w-3/4 m-auto rounded-full"
//               />
//             </div>
//             <div>
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 id="imageUpload"
//               />
//               <label
//                 htmlFor="imageUpload"
//                 className="bg-sky-600 p-2 font-extrabold rounded-md hover:text-black cursor-pointer"
//               >
//                 Upload Photo
//               </label>
//             </div>
//             <div className="text-lg space-y-4 text-left">
//               <p className="hover:bg-black hover:text-red-600 hover:cursor-pointer rounded-md p-2">
//                 Dashboard
//               </p>
//               <p className="hover:bg-black hover:text-red-600 hover:cursor-pointer rounded-md p-2">
//                 My Donation
//               </p>
//               <p className="hover:bg-black hover:text-red-600 hover:cursor-pointer rounded-md p-2">
//                 Add Inventory
//               </p>
//               <p className="hover:bg-black hover:text-red-600 hover:cursor-pointer rounded-md p-2">
//                 Status Inventory
//               </p>
//               <p className="hover:bg-black hover:text-red-600 hover:cursor-pointer rounded-md p-2">
//                 Donate food
//               </p>
//               <p className="hover:bg-black hover:text-red-600 hover:cursor-pointer rounded-md p-2">
//                 Decompose food
//               </p>
//             </div>
//             <div>
//               <button className="bg-red-700 hover:bg-sky-400 shadow-lg w-32 rounded-lg text-lg font-semibold text-white hover:text-black h-10">
//                 Logout
//               </button>
//             </div>
//           </motion.div>

//           {/* Main Content Section */}
//           <motion.div
//             className="w-4/5"
//             initial={{ x: "-100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "-100%" }}
//             transition={{ duration: 1 }}
//           >
//             <div className="w-full pb-5 gap-10 h-fit flex">
//               <motion.div
//                 className="w-3/5 bg-zinc-800 p-8 rounded-lg"
//                 initial={{ x: "-100%" }}
//                 animate={{ x: 0 }}
//                 exit={{ x: "-100%" }}
//                 transition={{ duration: 1 }}
//               >
//                 <div className="space-y-2">
//                   <h3 className="text-2xl font-bold">Shopkeeper Information</h3>
//                   <div className="space-y-6 p-2 text-lg">
//                     <p>Name : {user.username}</p>
//                     <p>Email : {user.email} </p>
//                     <p>Profile Type : {user.category}</p>
//                     <p>Profile Id :121</p>
//                   </div>
//                 </div>
//                 <div></div>
//               </motion.div>

//               {/* Drag Section */}
//               <motion.div
//                 className="bg-zinc-800 w-2/5 p-5 text-lg text-center rounded-md h-96 overflow-y-auto"
//                 initial={{ x: "100%" }} // Initial position off-screen
//                 animate={{ x: 0 }} // Animate to normal position
//                 exit={{ x: "100%" }} // Exit to off-screen when removed
//                 transition={{ duration: 1 }}
//               >
//                 <h1 className="mb-4 font-bold text-2xl">Running Offers</h1>
//                 <div className="space-y-3">
//                   <div className="border border-white rounded-lg flex justify-around items-center p-1">
//                     <p>1</p>
//                     <img
//                       src="./src/images/logo.jpg"
//                       alt=""
//                       className="w-12 rounded-full"
//                     />
//                     <p>Aashish Birhade</p>
//                     <p>100</p>
//                   </div>
//                   {/* Add additional leaderboard items here */}
//                 </div>
//               </motion.div>
//             </div>

//             {/* Last 12 Months Section */}

//           </motion.div>
//         </div>
//       </div>

//     </>
//   );
// }

// export default Profile;

// import React, { useState, useRef, useEffect, useContext } from "react";
// import { motion } from "framer-motion";
// import { UserContext } from "../../UserContext";

// function Profile() {
//   const { user } = useContext(UserContext);
//   const [formData, setFormData] = useState({
//     offerOn: "",
//     originalPrice: "",
//     discountedPrice: "",
//     image: null,
//   });
//   const [offers, setOffers] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const fileInputRef = useRef(null); // Ref to reset the file input

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData({ ...formData, image: URL.createObjectURL(file) }); // Convert file to a URL
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     setTimeout(() => {
//       setOffers([...offers, formData]); // Add current form data to the offers array

//       // Reset form
//       setFormData({ offerOn: "", originalPrice: "", discountedPrice: "", image: null });
//       fileInputRef.current.value = ""; // Reset the file input field
//       setIsLoading(false);
//     }, 1500);
//   };
//   const runningOffers = [
//     {
//       id: 1,
//       name: "Aashish Birhade",
//       defaultPrice: 120,
//       updatedPrice: 100,
//       image: "./src/images/logo.jpg",
//     },
//     {
//       id: 2,
//       name: "John Doe",
//       defaultPrice: 150,
//       updatedPrice: 130,
//       image: "./src/images/logo.jpg",
//     },
//     {
//       id: 3,
//       name: "Jane Smith",
//       defaultPrice: 200,
//       updatedPrice: 180,
//       image: "./src/images/logo.jpg",
//     },
//   ];

//   const slideshowRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (slideshowRef.current) {
//         slideshowRef.current.scrollLeft += 1;
//         if (
//           slideshowRef.current.scrollLeft >=
//           slideshowRef.current.scrollWidth - slideshowRef.current.clientWidth
//         ) {
//           slideshowRef.current.scrollLeft = 0; // Reset scroll when it reaches the end
//         }
//       }
//     }, 30);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <div className="text-white p-8 bg-black flex gap-10">
//         {/* Profile Sidebar Section */}

//         {/* Main Content Section */}
//         <motion.div
//           className="w-4/5"
//           initial={{ x: "-100%" }}
//           animate={{ x: 0 }}
//           exit={{ x: "-100%" }}
//           transition={{ duration: 1 }}
//         >
//           <div className="w-full pb-5 gap-10 h-fit flex">

//             {/* Running Offers Slideshow */}
//             <motion.div
//               className="bg-zinc-800 w-2/5 p-5 text-lg text-center rounded-md h-96 overflow-hidden"
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ duration: 1 }}
//             >
//               <h1 className="mb-4 font-bold text-2xl">Running Offers</h1>
//               <div
//                 ref={slideshowRef}
//                 className="flex space-x-5 overflow-hidden scrollbar-hide"
//               >
//                 {runningOffers.map((offer) => (
//                   <div
//                     key={offer.id}
//                     className="border border-white rounded-lg p-3 flex-shrink-0 w-80 h-64 bg-gray-700 text-center"
//                   >
//                     <img
//                       src={offer.image}
//                       alt="Offer"
//                       className="w-32 h m-auto rounded-full mb-2"
//                     />
//                     <p className="font-bold text-white mb-2">{offer.name}</p>
//                     <p className="line-through text-red-500">
//                       ${offer.defaultPrice}
//                     </p>
//                     <p className="text-green-400 font-bold">
//                       ${offer.updatedPrice}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//           </div>

//           <div className="space-y-10 p-10 bg-zinc-800 rounded-lg">
//       <h1 className="text-center text-3xl text-green-400 font-bold">Create Offer</h1>
//       <div>
//         <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8">
//           <p>
//             <input
//               type="text"
//               name="offerOn"
//               placeholder="Offer on"
//               className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
//               onChange={handleInputChange}
//               value={formData.offerOn}
//               required
//             />
//           </p>
//           <p>
//             <input
//               type="text"
//               name="originalPrice"
//               placeholder="Original Price"
//               className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
//               onChange={handleInputChange}
//               value={formData.originalPrice}
//               required
//             />
//           </p>
//           <p>
//             <input
//               type="text"
//               name="discountedPrice"
//               placeholder="Discounted Price"
//               className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
//               onChange={handleInputChange}
//               value={formData.discountedPrice}
//               required
//             />
//           </p>
//           <p>
//             <input
//               type="file"
//               className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
//               onChange={handleFileChange}
//               ref={fileInputRef}
//               required
//             />
//           </p>
//         </form>
//         <div className="text-center my-5">
//           <button
//             onClick={handleSubmit}
//             className="bg-[#00FF09] hover:bg-green-500 text-black font-bold shadow-lg w-32 rounded-lg text-lg hover:text-white h-10"
//           >
//             Submit
//           </button>
//         </div>
//       </div>

//       {/* Loading Animation */}
//       {isLoading && (
//         <div className="flex justify-center items-center py-5">
//           <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-400"></div>
//         </div>
//       )}

//       {/* Display All Offers */}
//       <div className="space-y-5">
//         {offers.map((offer, index) => (
//           <div
//             key={index}
//             className="flex items-center space-x-5 p-5 bg-gray-700 rounded-lg text-white"
//           >
//             {offer.image && (
//               <img
//                 src={offer.image} // Display image using the stored URL
//                 alt="Offer"
//                 className="w-32 h-32 object-cover rounded-lg"
//               />
//             )}
//             <div>
//               <h2 className="text-xl font-bold text-green-400">{offer.offerOn}</h2>
//               <p>
//                 <strong className="text-red-400 line-through">₹{offer.originalPrice}</strong>{" "}
//                 <span className="text-green-400 font-bold">₹{offer.discountedPrice}</span>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//         </motion.div>

//       </div>
//     </>
//   );
// }

// export default Profile;

import React, { useState, useRef, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { UserContext } from "../../UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    offerOn: "",
    originalPrice: "",
    discountedPrice: "",
    image: null,
  });
  const [offers, setOffers] = useState([]); // Submitted offers
  const [isLoading, setIsLoading] = useState(false);
  const [profileImage, setProfileImage] = useState("./src/images/logo.jpg"); // Default profile image
  const [isImageUpdated, setIsImageUpdated] = useState(false); // Track if image has been updated
  const fileInputRef = useRef(null); // Ref to reset the file input

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: URL.createObjectURL(file) }); // Convert file to a URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setOffers([...offers, formData]); // Add current form data to the offers array

      // Reset form
      setFormData({
        offerOn: "",
        originalPrice: "",
        discountedPrice: "",
        image: null,
      });
      fileInputRef.current.value = ""; // Reset the file input field
      setIsLoading(false);
    }, 1500);
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

  const defaultOffers = [
    {
      id: 1,
      name: "ghee",
      defaultPrice: 600,
      updatedPrice: 550,
      image: "./src/images/food/ghee.jpg",
    },
    {
      id: 2,
      name: "Butter",
      defaultPrice: 150,
      updatedPrice: 130,
      image: "./src/images/food/butter.jpg",
    },
    {
      id: 3,
      name: "Ketchup",
      defaultPrice: 200,
      updatedPrice: 180,
      image: "./src/images/food/ketchup.jpg",
    },
  ];

  const slideshowRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideshowRef.current) {
        slideshowRef.current.scrollLeft += 1;
        if (
          slideshowRef.current.scrollLeft >=
          slideshowRef.current.scrollWidth - slideshowRef.current.clientWidth
        ) {
          slideshowRef.current.scrollLeft = 0; // Reset scroll when it reaches the end
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Combine default offers with submitted offers
  const combinedOffers = [...defaultOffers, ...offers];

  return (
    <>
      <div className="text-white p-8 bg-black flex gap-10">
        {/* Profile Sidebar Section */}
        <motion.div
          className="w-1/5 bg-zinc-800 rounded-lg p-8 space-y-8 text-center"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1 }}
        >
          <div className="bg-green-600 h-40 p-2 w-40 items-center  rounded-full" >
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
            <p className="hover:bg-black hover:text-[#00FF09] hover:cursor-pointer rounded-md p-2">
              Dashboard
            </p>
            <p className="hover:bg-black hover:text-[#00FF09] hover:cursor-pointer rounded-md p-2">
              My Donation
            </p>
            <p className="hover:bg-black hover:text-[#00FF09] hover:cursor-pointer rounded-md p-2">
              Add Inventory
            </p>
            <p className="hover:bg-black hover:text-[#00FF09] hover:cursor-pointer rounded-md p-2">
              Status Inventory
            </p>
            <p className="hover:bg-black hover:text-[#00FF09] hover:cursor-pointer rounded-md p-2">
              Donate Food
            </p>
            <p className="hover:bg-black hover:text-[#00FF09] hover:cursor-pointer rounded-md p-2">
              Decompose Food
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
                <h3 className="text-2xl font-bold">Shopkeeper Information</h3>
                <div className="space-y-6 p-2 text-lg">
                  <p>Name : {user.username}</p>
                  <p>Email : {user.email}</p>
                  <p>Profile Type : {user.category}</p>
                  <p>Profile Id : 121</p>
                </div>
              </div>
            </motion.div>

            {/* Running Offers Slideshow */}
            <motion.div
              className="bg-zinc-800 w-2/5 p-5 text-lg text-center rounded-md h-96 overflow-hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 1 }}
            >
              <h1 className="mb-4 font-bold text-2xl">Running Offers</h1>
              <div
                ref={slideshowRef}
                className="flex space-x-5 overflow-hidden scrollbar-hide"
              >
                {combinedOffers.map((offer, index) => (
                  <div
                    key={index}
                    className="border border-white rounded-lg p-3 flex-shrink-0 w-80 h-64 bg-gray-700 text-center"
                  >
                    <img
                      src={offer.image}
                      alt="Offer"
                      className="w-32 h-32 m-auto rounded-full mb-2"
                    />
                    <p className="font-bold text-white mb-2">
                      {offer.name || offer.offerOn}
                    </p>
                    <p className="line-through text-red-500">
                      ₹{offer.defaultPrice || offer.originalPrice}
                    </p>
                    <p className="text-green-400 font-bold">
                      ₹{offer.updatedPrice || offer.discountedPrice}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Create Offer Form */}
          <div className="space-y-10 p-10 bg-zinc-800 rounded-lg">
            <h1 className="text-center text-3xl text-[#00FF09] font-bold">
              Create Offer
            </h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8">
              <input
                type="text"
                name="offerOn"
                placeholder="Offer on"
                className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
                onChange={handleInputChange}
                value={formData.offerOn}
                required
              />
              <input
                type="text"
                name="originalPrice"
                placeholder="Original Price"
                className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
                onChange={handleInputChange}
                value={formData.originalPrice}
                required
              />
              <input
                type="text"
                name="discountedPrice"
                placeholder="Discounted Price"
                className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
                onChange={handleInputChange}
                value={formData.discountedPrice}
                required
              />
              <input
                type="file"
                className="input-field p-3 rounded-lg bg-gray-600 text-white w-full"
                onChange={handleFileChange}
                ref={fileInputRef}
                required
              />
              <button
                type="submit"
                className="bg-[#00FF09] hover:bg-green-500 text-black font-bold shadow-lg w-32 rounded-lg text-lg hover:text-white h-10"
              >
                Submit
              </button>
            </form>

            {/* Loading Animation */}
            {isLoading && (
              <div className="flex justify-center items-center py-5">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-400"></div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Profile;
