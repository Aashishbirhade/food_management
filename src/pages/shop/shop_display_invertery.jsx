import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Shop_display_invertery() {
  // Sample dictionary for card data
  const cardData = [
    { id: 1, name: 'Paneer', quantity: '200gm', manufactureDate: '21/10/22', expiryDate: '23/10/23', image: './src/images/paneer.webp' },
    { id: 2, name: 'Cheese', quantity: '500gm', manufactureDate: '10/10/22', expiryDate: '22/12/23', image: './src/images/paneer.webp' },
    { id: 3, name: 'Milk', quantity: '1L', manufactureDate: '01/12/23', expiryDate: '05/12/23', image: './src/images/paneer.webp' },
    { id: 4, name: 'Butter', quantity: '250gm', manufactureDate: '15/11/23', expiryDate: '30/12/23', image: './src/images/paneer.webp' },
    { id: 5, name: 'Yogurt', quantity: '150gm', manufactureDate: '01/12/23', expiryDate: '03/12/23', image: './src/images/paneer.webp' },
    { id: 6, name: 'Ghee', quantity: '1L', manufactureDate: '10/12/23', expiryDate: '15/01/24', image: './src/images/paneer.webp' },
  ];

  // States for filter, search, pagination, and filtered data
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(cardData);

  const itemsPerPage = 4;

  // Search and filter handler
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    const filtered = cardData.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page after search
  };

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    if (selectedFilter === 'near-expiry') {
      const today = new Date();
      const nearExpiryItems = cardData.filter((item) => {
        const expiryDate = new Date(item.expiryDate.split('/').reverse().join('-'));
        const timeDiff = expiryDate - today;
        return timeDiff >= 0 && timeDiff <= 5 * 24 * 60 * 60 * 1000; // 5 days in milliseconds
      });
      setFilteredData(nearExpiryItems);
    } else if (selectedFilter === 'quantity') {
      setFilteredData(cardData.filter((item) => parseInt(item.quantity) > 300));
    } else {
      setFilteredData(cardData);
    }
    setCurrentPage(1);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Helper function to determine expiry color
  const getExpiryColor = (expiryDate) => {
    const today = new Date();
    const date = new Date(expiryDate.split('/').reverse().join('-'));
    const timeDiff = date - today;
    return timeDiff >= 0 && timeDiff <= 5 * 24 * 60 * 60 * 1000 ? 'text-red-500' : 'text-green-500';
  };

  return (
    <>
      <div className='bg-black p-8'>
        <div className='flex text-center'>
          {/* Search bar */}
          <div className='w-1/2 p-3'>
            <motion.input
              type='text'
              value={search}
              onChange={handleSearchChange}
              className='w-96 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300'
              placeholder='Search items'
              animate={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <motion.button
              className='bg-sky-700 hover:bg-sky-400 mx-2 shadow-lg w-32 rounded-lg text-lg font-semibold text-white hover:text-black h-10'
              whileHover={{ scale: 1.1 }}
            >
              Search
            </motion.button>
          </div>

          {/* Filter dropdown */}
          <div className='w-1/2 flex items-center justify-center'>
            <motion.select
              value={filter}
              onChange={handleFilterChange}
              className='w-48 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300'
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <option value=''>All</option>
              <option value='near-expiry'>Near Expiry</option>
              <option value='quantity'>Quantity  300gm</option>
            </motion.select>
          </div>
        </div>

        {/* Cards */}
        <div className='my-10 justify-center items-center p-10'>
          {paginatedData.length > 0 ? (
            paginatedData.map((item) => (
              <motion.div
                key={item.id}
                className='bg-white flex rounded-lg shadow-md justify-around p-5 text-center text-lg my-3'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className='w-1/5'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-1/2 m-auto rounded-md'
                  />
                </div>
                <div className='w-1/5 flex justify-center items-center'>{item.name}</div>
                <div className='w-1/5 flex justify-center items-center'>{item.quantity}</div>
                <div className='w-1/5 flex justify-center items-center'>{item.manufactureDate}</div>
                <div className={`w-1/5 flex justify-center items-center ${getExpiryColor(item.expiryDate)}`}>
                  {item.expiryDate}
                </div>
              </motion.div>
            ))
          ) : (
            <div className='text-center text-gray-600 text-xl'>No items match the selected filter.</div>
          )}
        </div>

        {/* Pagination buttons */}
        <div className='flex justify-center'>
          <motion.button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className='bg-gray-400 hover:bg-gray-600 text-white px-4 py-2 rounded-l disabled:opacity-50'
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            Previous
          </motion.button>
          <span className='px-4 py-2 bg-gray-200'>{currentPage}</span>
          <motion.button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className='bg-gray-400 hover:bg-gray-600 text-white px-4 py-2 rounded-r disabled:opacity-50'
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            Next
          </motion.button>
        </div>
      </div>
    </>
  );
}

export default Shop_display_invertery;
