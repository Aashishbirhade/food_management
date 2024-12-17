import React, { createContext, useState, useContext } from "react";

// Create UserContext
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    category: "",
    isLoggedIn: false,
  });
  
  // New state for inventory
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Paneer', quantity: '200gm', manufactureDate: '21/10/22', expiryDate: '23/10/23', image: './src/images/paneer.webp' },
    { id: 2, name: 'Cheese', quantity: '500gm', manufactureDate: '10/10/22', expiryDate: '22/12/23', image: './src/images/paneer.webp' },
    // Add more items as needed
  ]);

  return (
    <UserContext.Provider value={{ user, setUser, inventory, setInventory }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUserContext = () => {
  return useContext(UserContext);
};
