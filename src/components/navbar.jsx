// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';


// function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <>
//             <div className='fixed w-full z-10 bg-black text-white px-4'>
//                 <div className='flex justify-between items-center '>
//                     <h1 className='flex font-bold text-3xl'>
//                         <p>Food</p>
//                         <p className='text-orange-500'>Care</p>
//                     </h1>

//                     <div className='hidden sm:flex gap-4'>
//                         <Link to= '' onClick={() => {
//                             document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
//                         }}
//                             className='hover:text-orange-500 hover:underline hover:decoration-orange-500'>Home</Link>
//                         <Link to='Add_invertery' className='hover:text-orange-500 '>Add grosary</Link>
//                         <Link to='display' className='hover:text-orange-500 '>Status</Link>
//                         <Link to='profile' className='hover:text-orange-500 '>Profile</Link>
//                         <Link to = 'food_bank' >food_bank</Link>
                       
//                     </div>
//                     <div className='hidden sm:flex gap-3 py-4 text-black font-bold'>
//                         <Link to="Add">
//                             <button className='border-none p-2 rounded-lg bg-orange-500 hover:text-white'>Log In</button>
//                         </Link>
//                         <Link to="Register">
//                             <button className='border-none p-2 rounded-lg bg-white hover:text-orange-500'>Sign Up</button>
//                         </Link>
//                     </div>
//                 </div>
               
//             </div>
//             <div className='h-16 sm:h-16 md:h-16 lg:h-16 xl:h-16 2xl:h-16'></div> {/* Spacer to ensure content is not hidden behind navbar */}
//         </>
//     );
// }

// export default Navbar;





import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { user, setUser } = useContext(UserContext); // Access and update user context
    const dropdownRef = useRef(null); // Ref for dropdown to handle outside clicks

    // Toggle dropdown menu
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Close dropdown if clicking outside
    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    // Log out handler
    const handleLogout = () => {
        setUser({ username: '', category: '', isLoggedIn: false });
        setIsDropdownOpen(false);
    };

    // Determine menu items based on category
    const getMenuItems = () => {
        switch (user.category) {
            case 'individual':
                return [
                    { path: '', label: 'Home' },
                    { path: 'Add_invertery', label: 'Add Grocery' },
                    { path: 'display', label: 'Status' },
                    { path: 'food_bank', label: 'Food Bank' },
                    { path: 'profile', label: 'Profile' },
                ];
            case 'shopkeeper':
                return [
                    { path: '', label: 'Home' },
                    { path: 'shopkeeper_profile', label: 'Profile' },
                    { path: 'Add_invertery', label: 'Shop' },
                    { path: 'display', label: 'Shop Status' },
                ];
            case 'hotel':
                return [
                    { path: '', label: 'Home' },
                    { path: 'hotel_profile', label: 'Profile' },
                    { path: 'food_bank', label: 'Food Bank' },
                ];
            default:
                return [
                    { path: '', label: 'Home' },
                    { path: '#', label: 'About' },
                    { path: '#', label: 'Feature' },
                    { path: '#', label: 'Footer' },
                ];
        }
    };

    // Background color for username circle based on category
    const getUsernameBackgroundColor = () => {
        switch (user.category) {
            case 'individual':
                return 'bg-blue-500';
            case 'shopkeeper':
                return 'bg-green-500';
            case 'hotel':
                return 'bg-purple-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div className="w-full bg-black text-white p-4">
            <div className="flex justify-between items-center">
                {/* Brand Logo */}
                <h1 className="flex font-serif font-extrabold text-3xl">
                    <p>Food</p>
                    <p className="text-[#00FF09]">Care</p>
                </h1>

                {/* Menu Items */}
                <div className="hidden sm:flex gap-4">
                    {getMenuItems().map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            onClick={() => {
                                if (item.path === '') {
                                    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="hover:text-[#00FF09] hover:underline hover:decoratio-[#00FF09]"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Right Side Buttons */}
                <div className="hidden sm:flex gap-3 items-center relative">
                    {user.isLoggedIn ? (
                        <>
                            {/* Bell Icon */}
                            <Link to="notification"><button className="relative p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                                <img src="./src/images/ghanta.png" alt="" className='w-7 ' />
                            </button></Link>

                            {/* Username Circle */}
                            <div
                                className={`flex items-center justify-center w-10 h-10 rounded-full ${getUsernameBackgroundColor()} text-white font-bold cursor-pointer`}
                                onClick={toggleDropdown}
                            >
                                {user.username.charAt(0).toUpperCase()}
                            </div>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div
                                    ref={dropdownRef}
                                    className="absolute right-0 mt-32 w-40 bg-gray-800 rounded-lg shadow-lg p-3 z-10"
                                >
                                    <p className="text-white mb-2">{user.username}</p>
                                    <p className="text-white mb-2">{user.category}</p>
                                    <Link to=""> <button
                                        className="w-full text-left text-red-500 hover:underline"
                                        onClick={handleLogout}
                                    >
                                        Log Out
                                    </button></Link>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <Link to="login">
                                <button className="border-none p-2 rounded-lg font-semibold text-black bg-orange-500 hover:text-white">
                                    Log In
                                </button>
                            </Link>
                            <Link to="register">
                                <button className="border-none p-2 rounded-lg text-black bg-[#00FF09] font-semibold hover:text-white">
                                    Sign Up
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
