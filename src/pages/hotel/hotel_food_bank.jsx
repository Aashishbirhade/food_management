import React, { useState } from 'react';
import { motion } from 'framer-motion';

const  Hotel_Food_bank = () => {
  const [foodName, setFoodName] = useState('');
  const [foodQuantity, setFoodQuantity] = useState('');
  const [itemImage, setItemImage] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    setShowSuccess(true); // Show the success message
    setTimeout(() => setShowSuccess(false), 4000); // Hide the message after 4 seconds

    // Clear form data
    setFoodName('');
    setFoodQuantity('');
    setItemImage(null);
  };

  return (
    <>
      <div className="bg-black p-8 flex justify-center h-screen items-center">
        {/* Apply blur effect when success message is shown */}
        <div
          className={`${
            showSuccess ? 'bg-black filter blur-sm' : 'bg-black'
          } p-8 flex justify-center h-screen items-center w-full`}
        >
          {/* Image on the left side with slower sliding effect */}
          <motion.div
            className="w-1/2"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 150, damping: 50 }} // Slower animation
          >
            <img
              src="./src/images/donate.png"
              alt="donate"
              className="w-1/2 m-auto"
            />
          </motion.div>

          {/* Form on the right side with slower sliding effect */}
          <motion.div
            className="bg-zinc-800 w-3/5 shadow-lg rounded-lg p-8"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 150, damping: 50 }} // Slower animation
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="" className="block text-white font-medium mb-2">
                  Enter food Name
                </label>
                <input
                  type="text"
                  name="foodName"
                  value={foodName}
                  onChange={(e) => setFoodName(e.target.value)}
                  placeholder="Enter food Name"
                  className="w-full p-2 border mb-4 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <label htmlFor="" className="block text-white font-medium mb-2">
                  Enter food Quantity
                </label>
                <input
                  type="text"
                  name="foodQuantity"
                  placeholder='Enter food Quantity'
                  value={foodQuantity}
                  onChange={(e) => setFoodQuantity(e.target.value)}
                  className="w-full p-2 border mb-4 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <label htmlFor="" className="block text-white font-medium mb-2">
                  Enter food Image
                </label>
                <input
                  type="file"
                  name="itemImage"
                  onChange={(e) => setItemImage(e.target.files[0])}
                  className="w-full p-2 border mb-4 border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="text-center">
                <input
                  type="submit"
                  value="Submit"
                  className="bg-sky-700 hover:bg-sky-400 shadow-xl w-40 rounded-lg text-lg font-semibold text-white hover:text-black h-12"
                />
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <motion.div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-6 rounded-lg shadow-xl"
          initial={{ opacity: 0, backgroundColor: 'green' }}
          animate={{
            opacity: 1,
            backgroundColor: ['green', 'blue', 'green'], // Blue background effect
          }}
          transition={{
            duration: 1,
            times: [0, 0.5, 1], // Background color change animation
            opacity: { duration: 0.5 },
          }}
        >
          <p className="text-xl font-semibold">
            Thank you for your generous donation! You are making a difference.
          </p>
        </motion.div>
      )}
    </>
  );
};

export default Hotel_Food_bank;
