// import React from 'react'

// const Landing = () => {
//   return (
//     <>
//     <div className='bg-black p-8 flex justify-center h-screen text-md items-center'>
//         <div className='w-1/2 '><img src="./src/images/log-in-girl.svg" alt="" /></div>
//         <div className='bg-zinc-800 w-3/5 shadow-md  rounded-lg p-6'>
//             <form action="">
//                 <div className='mb-1  py-4 px-20'>
//                     <label htmlFor="" className="block text-white  font-medium mb-1">Enter Iteam Name</label>
//                     <input type="text" name="" id="" placeholder='enter Grosary' className="w-full p-2 border mb-3 border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"/>

//                     <label htmlFor="" className="block text-white font-medium mb-1">Enter Item Manufacture Date</label>
//                     <input type="Date" name="" id="" className="w-full p-2 border mb-3  border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300" />

//                     <label htmlFor="" className="block text-white  font-medium mb-1">Enter Iteam Expire Date</label>
//                     <input type="Date" name="" id="" className="w-full p-2 border mb-3 border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"/>

//                     <label htmlFor="" className="block text-white  font-medium mb-1">Enter Iteam Quantity</label>
//                     <input type = "number" name="" placeholder='enter Quantity' id="" className="w-full p-2 border mb-3 border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"/>

//                     <label htmlFor="" className="block text-white  font-medium mb-1">Enter Iteam Image</label>
//                     <input type="File" name="" id="" className="w-full p-2 border text-white  border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"/>
//                 </div>
//                 <div className=' text-center p-2 mt-5 '>
//                     <input type="submit" value="Submit" className='bg-[#00FF09] hover:bg-green-500 text-black font-bold shadow-lg w-32 rounded-lg text-lg  hover:text-white h-10' />
//                 </div>
//             </form>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Landing



import React, { useState } from "react";
import { useUserContext } from "../../UserContext";  // Make sure the import is correct
import { useNavigate } from "react-router-dom";  // Import to handle page navigation

const Landing = () => {
  const { inventory, setInventory } = useUserContext();  // Using the custom hook
  const navigate = useNavigate();  // To handle page redirection

  const [itemName, setItemName] = useState('');
  const [manufactureDate, setManufactureDate] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);  // Loading state for animation
  const [submitted, setSubmitted] = useState(false);  // State to show the submitted message

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);  // Start the loading animation

    const newItem = {
      id: inventory.length + 1,
      name: itemName,
      manufactureDate,
      expiryDate,
      quantity,
      image: URL.createObjectURL(image),
    };

    setTimeout(() => {
      setInventory([...inventory, newItem]);

      // Clear the form after submission
      setItemName('');
      setManufactureDate('');
      setExpiryDate('');
      setQuantity('');
      setImage(null);

      setLoading(false);  // Stop the loading animation
      setSubmitted(true);  // Set submitted to true to display the message and button
    }, 2000);  // Simulate network delay or processing time
  };

  const handleCheckStatus = () => {
    // Redirect to the DisplayPage or the desired page
    navigate("/display");
  };

  return (
    <>
      <div className="bg-black p-8 flex justify-center h-screen text-md items-center relative">
        {/* Form and image section */}
        <div className={`w-1/2 ${loading ? 'blur-sm' : ''}`}>
          <img src="./src/images/log-in-girl.svg" alt="" />
        </div>
        <div className={`bg-zinc-800 w-3/5 shadow-md rounded-lg p-6 ${loading ? 'blur-sm' : ''}`}>
          <form onSubmit={handleSubmit}>
            <div className="mb-1 py-4 px-20">
              <label htmlFor="itemName" className="block text-white font-medium mb-1">Enter Item Name</label>
              <input
                type="text"
                id="itemName"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Enter Grocery"
                className="w-full p-2 border mb-3 border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
                disabled={loading}  // Disable inputs when loading
              />

              <label htmlFor="manufactureDate" className="block text-white font-medium mb-1">Enter Item Manufacture Date</label>
              <input
                type="date"
                id="manufactureDate"
                value={manufactureDate}
                onChange={(e) => setManufactureDate(e.target.value)}
                className="w-full p-2 border mb-3 border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
                disabled={loading}
              />

              <label htmlFor="expiryDate" className="block text-white font-medium mb-1">Enter Item Expiry Date</label>
              <input
                type="date"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-full p-2 border mb-3 border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
                disabled={loading}
              />

              <label htmlFor="quantity" className="block text-white font-medium mb-1">Enter Item Quantity</label>
              <input
                type="text"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter Quantity"
                className="w-full p-2 border mb-3 border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
                disabled={loading}
              />

              <label htmlFor="image" className="block text-white font-medium mb-1">Enter Item Image</label>
              <input
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full p-2 border text-white border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
                disabled={loading}
              />
            </div>

            <div className="text-center p-2 mt-5">
              <input
                type="submit"
                value="Submit"
                className="bg-[#00FF09] hover:bg-green-500 text-black font-bold shadow-lg w-32 rounded-lg text-lg hover:text-white h-10"
                disabled={loading}  // Disable the submit button when loading
              />
            </div>
          </form>

          {/* Show the loading animation and submitted message */}
          {loading && (
            <div className="absolute inset-0 flex justify-center items-center z-10">
              <div className="w-16 h-16 border-4 border-t-4 border-green-500 rounded-full animate-spin"></div>
            </div>
          )}

          {submitted && !loading && (
            <div className="absolute inset-0 flex justify-center items-center z-10">
              <div className="bg-green-500 p-6 rounded-lg text-white w-1/2 text-center">
                <p className="text-xl font-bold">Submitted Successfully!</p>
                <button
                  onClick={handleCheckStatus}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 p-2 rounded"
                >
                  Check Status
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Landing;
