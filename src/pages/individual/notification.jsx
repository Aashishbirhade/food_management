// import React, { useState, useEffect ,useRef,useContext} from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Chatbot from '../chat';
// import { UserContext } from "../../UserContext";

// const images = [
//   { src: './src/images/n1.jpg',  },  // Change this to the correct path if needed
//   { src: './src/images/n2.jpg', },
//   { src: './src/images/n3.jpg', }
// ];

// function Notification() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [direction, setDirection] = useState('next');
//   const [animating, setAnimating] = useState(false);

//   const goToPrevious = () => {
//     if (animating) return;
//     setDirection('prev');
//     setAnimating(true);
//     setTimeout(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//       setAnimating(false);
//     }, 500);
//   };

//   const goToNext = () => {
//     if (animating) return;
//     setDirection('next');
//     setAnimating(true);
//     setTimeout(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//       setAnimating(false);
//     }, 500);
//   };

//   const goToImage = (index) => {
//     if (animating) return;
//     setDirection(index > currentImageIndex ? 'next' : 'prev');
//     setAnimating(true);
//     setTimeout(() => {
//       setCurrentImageIndex(index);
//       setAnimating(false);
//     }, 500);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNext();
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   useEffect(() => {
//     // Scroll to the top of the page when the component is mounted
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <>
//       <div className='w-full bg-black text-white text-md p-8 text-lg'>

//         <div className="flex flex-col items-center h-auto md:h-screen mt-8 md:mt-0">
//           <div className="relative w-full md:w-4/5   h-80 md:h-4/5 overflow-hidden">
//             <div className="absolute top-1/2 transform-translate-y-1/2 left-0 z-10 hidden md:block">
//               <button onClick={goToPrevious} className="text-[#00FF09] text-2xl bg-gray-800 p-2 rounded-full hover:bg-gray-700">
//                 <FaArrowLeft />
//               </button>
//             </div>
//             <div
//               className={`transition-transform duration-500 ${animating ? (direction === 'next' ? 'translate-x-full' : '-translate-x-full') : 'translate-x-0'}`}
//               style={{
//                 transform: animating
//                   ? direction === 'next'
//                     ? 'translateX(-100%)'
//                     : 'translateX(100%)'
//                   : 'translateX(0)',
//               }}
//             >
//               <Link to={images[currentImageIndex].link}>
//                 <img src={images[currentImageIndex].src} alt="Slideshow" className="w-9/12 m-auto my-10 object-cover rounded-lg cursor-pointer" />
//               </Link>
//             </div>
//             <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 hidden md:block">
//               <button onClick={goToNext} className="text-[#00FF09] text-2xl bg-gray-800 p-2 rounded-full hover:bg-gray-700">
//                 <FaArrowRight />
//               </button>
//             </div>
//           </div>
//           <div className="flex space-x-2 mt-2 md:mb-4"> {/* Adjusted margin top for mobile view */}
//             {images.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToImage(index)}
//                 className={`w-7 h-7 rounded-full ${index === currentImageIndex ? 'bg-gradient-to-l from-[#c300FF] to-[#930071] text-white' : 'bg-gray-300'}`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className='flex gap-10 p-4 text-center'>
//             <div className=' p-2 w-3/5 text-3xl font-bold space-y-4'>
//                 <p>This food will be expire soon</p>
//                 <div className='space-y-4 text-black'>
//                   <div className='bg-green-600 rounded-lg flex gap-4 text-lg font-bold text-center'>
//                     <p className='w-1/4'>Image</p>
//                     <p className='w-1/4'>Food Name</p>
//                     <p className='w-1/4'>Quantity</p>
//                     <p className='w-1/4'>Exp. Date</p>
//                   </div>
//                   <div className='bg-green-300 shadow-md shadow-white  rounded-lg flex gap-4 text-lg font-bold items-center text-center'>
//                   <p className='w-1/4'><img src="./src/images/s1.png" alt="" /></p>
//                     <p className='w-1/4 '>pizza</p>
//                     <p className='w-1/4'>1kg</p>
//                     <p className='w-1/4'>16/12/2024</p>
//                   </div>
//                   <div className='bg-green-300 shadow-md shadow-white rounded-lg flex gap-4 text-lg font-bold items-center text-center'>
//                   <p className='w-1/4'><img src="./src/images/1.png" alt="" /></p>
//                     <p className='w-1/4 '>pizza</p>
//                     <p className='w-1/4'>1kg</p>
//                     <p className='w-1/4'>16/12/2024</p>
//                   </div>
//                 </div>
//             </div>
//             <div className=' space-y-2 p-3  w-2/5'>
//             <p className=' text-3xl font-bold'>Generate Recipe</p>
//             <Chatbot/>
//             </div>
//         </div>

//       </div>
//     </>
//   );
// }

// export default Notification;

import React, { useState, useEffect, useContext } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import { UserContext } from "../../UserContext";

// Define different sets of images for each category
const categoryImages = {
  individual: [
    { src: "./src/images/n1.jpg" },
    { src: "./src/images/n2.jpg" },
    { src: "./src/images/n3.jpg" },
  ],
  shopkeeper: [
    { src: "./src/images/shop1.jpg" },
    { src: "./src/images/shop2.jpg" },
    { src: "./src/images/shop3.jpg" },
  ],
  hotel: [
    { src: "./src/images/hotel1.jpg" },
    { src: "./src/images/hotel2.jpg" },
    { src: "./src/images/hotel3.jpg" },
  ],
};

const products = [
  {
    id: 1,
    image: "./src/images/food/paneer.webp",
    name: "paneer",
    quantity: "1kg",
    expDate: "2024-12-16", // Expiration date in YYYY-MM-DD format
    price: "300",
  },
  {
    id: 2,
    image: "./src/images/food/milk.jpg",
    name: "milk",
    quantity: "2l",
    expDate: "2024-12-25",
    price: "70",
  },
  {
    id: 3,
    image: "./src/images/food/butter.jpg",
    name: "butter",
    quantity: "500g",
    expDate: "2024-12-15",
    price: "200",
  },
];

function Notification() {
  const { user } = useContext(UserContext);
  const { category } = user; // Access category from context
  const images = categoryImages[category] || []; // Fallback to an empty array if no category
  const [shopProducts, setShopProducts] = useState(products); // Local state for shopkeeper products
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [animating, setAnimating] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // To store the selected product for the form

  const goToPrevious = () => {
    if (animating) return;
    setDirection("prev");
    setAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setAnimating(false);
    }, 500);
  };

  const goToNext = () => {
    if (animating) return;
    setDirection("next");
    setAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setAnimating(false);
    }, 500);
  };

  const goToImage = (index) => {
    if (animating) return;
    setDirection(index > currentImageIndex ? "next" : "prev");
    setAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (product) => {
    setSelectedProduct(product); // Set the selected product to fill the form
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedProduct) {
      // Remove the selected product from the list after submission
      setShopProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== selectedProduct.id)
      );
      setSelectedProduct(null); // Reset the selected product after submission
    }
  };

  const sortedProducts = shopProducts
    .sort((a, b) => new Date(a.expDate) - new Date(b.expDate)) // Sort products by expiration date
    .reverse(); // To show near-expiration products on top

  return (
    <>
      <div className="w-full bg-black text-white text-md p-8 text-lg">
        <div className="flex flex-col items-center h-auto md:h-screen mt-8 md:mt-0">
          <div className="relative w-full md:w-4/5 h-80 md:h-4/5 overflow-hidden">
            <div className="absolute top-1/2 transform-translate-y-1/2 left-0 z-10 hidden md:block">
              <button
                onClick={goToPrevious}
                className="text-[#00FF09] text-2xl bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <FaArrowLeft />
              </button>
            </div>
            {images.length > 0 && (
              <div
                className={`transition-transform duration-500 ${
                  animating
                    ? direction === "next"
                      ? "translate-x-full"
                      : "-translate-x-full"
                    : "translate-x-0"
                }`}
                style={{
                  transform: animating
                    ? direction === "next"
                      ? "translateX(-100%)"
                      : "translateX(100%)"
                    : "translateX(0)",
                }}
              >
                <Link to={images[currentImageIndex].link}>
                  <img
                    src={images[currentImageIndex].src}
                    alt="Slideshow"
                    className="w-9/12 m-auto my-10 object-cover rounded-lg cursor-pointer"
                  />
                </Link>
              </div>
            )}
            <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 hidden md:block">
              <button
                onClick={goToNext}
                className="text-[#00FF09] text-2xl bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="flex space-x-2 mt-2 md:mb-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-7 h-7 rounded-full ${
                  index === currentImageIndex
                    ? "bg-gradient-to-l from-[#c300FF] to-[#930071] text-white"
                    : "bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content Based on Category */}
        {category === "individual" && (
          <div className="flex gap-10 p-4 text-center">
            <div className="p-2 w-3/5 text-3xl font-bold space-y-4">
              <p>This food will expire soon</p>
              <div className="space-y-4 text-black">
                <div className="bg-green-600 rounded-lg flex gap-4 text-lg font-bold text-center">
                  <p className="w-1/4">Image</p>
                  <p className="w-1/4">Food Name</p>
                  <p className="w-1/4">Quantity</p>
                  <p className="w-1/4">Exp. Date</p>
                </div>
                {/* Scrollable container */}
                <div className="max-h-96 overflow-y-auto p-2 space-y-2">
                  {sortedProducts.map((product) => {
                    const isExpired = new Date(product.expDate) < new Date();
                    return (
                      <div
                        key={product.id}
                        className="bg-green-300 shadow-md shadow-white rounded-lg flex gap-4 text-lg font-bold items-center text-center"
                      >
                        <p className="w-1/4 p-2 ">
                          <img src={product.image} alt={product.name}  className="rounded-lg"/>
                        </p>
                        <p className="w-1/4">{product.name}</p>
                        <p className="w-1/4">{product.quantity}</p>
                        {/* Expiration date with red color if expired */}
                        <p
                          className={`w-1/4 ${
                            isExpired ? "text-red-600" : "text-black"
                          }`}
                        >
                          {product.expDate}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="space-y-2 p-3 w-2/5">
              <p className="text-3xl font-bold">Generate Recipe</p>
              <div className="bg-green-400">
                a
              </div>
            </div>
          </div>
        )}

        {category === "shopkeeper" && (
          <div className="flex gap-10 p-4 text-center">
            
            <div className="space-y-4 w-3/5">
              <div className="bg-green-600 rounded-lg flex gap-4 text-lg font-bold text-center">
                <p className="w-1/4">Image</p>
                <p className="w-1/4">Food Name</p>
                <p className="w-1/4">Quantity</p>
                <p className="w-1/4">Exp. Date</p>
                <p className="w-1/4">Price</p>
              </div>
              <div className="max-h-96 overflow-y-auto p-2 space-y-2">
                {sortedProducts.map((product) => {
                  const isExpired = new Date(product.expDate) < new Date();
                  return (
                    <div
                      key={product.id}
                      className="bg-green-300 shadow-md shadow-white rounded-lg flex gap-4 text-lg font-bold items-center text-center"
                      onClick={() => handleCardClick(product)}
                    >
                      <p className="w-1/4">
                        <img src={product.image} alt={product.name} />
                      </p>
                      <p className="w-1/4">{product.name}</p>
                      <p className="w-1/4">{product.quantity}</p>
                      <p
                        className={`w-1/4 ${
                          isExpired ? "text-red-600" : "text-black"
                        }`}
                      >
                        {product.expDate}
                      </p>
                      <p className="w-1/4">${product.price}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-4 bg-zinc-800 text shadow-lg rounded-lg  w-2/5">
              <p className="text-center text-2xl font-bold mb-4">Generate Offer</p>
              <form onSubmit={handleSubmit}>
                {selectedProduct && (
                  <>
                    <p>Food Name: {selectedProduct.name}</p>
                    <p>Quantity: {selectedProduct.quantity}</p>
                    <p>Expiration Date: {selectedProduct.expDate}</p>
                    <p>Price: ${selectedProduct.price}</p>
                    <button
                      type="submit"
                      className="bg-green-500 text-white p-2 rounded mt-4 w-full"
                    >
                      Submit Offer
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        )}

        {category === "hotel" && (
          <div className="text-center p-10 text-xl">
          </div>
        )}
      </div>
    </>
  );
}

export default Notification;
