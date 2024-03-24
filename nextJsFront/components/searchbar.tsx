'use client'

import { useState } from 'react';
import Link from 'next/link'
import { FaUser, FaBell, FaInbox,FaSearch, FaSignOutAlt } from 'react-icons/fa';


const Searchbar= () =>{

    const [login, setLogin] = useState(false);

  const handleToggle = () => {
    setLogin(!login);
  }
  return (
    <div  className=" flex flex-row justify-between w-full bg-white shadow-lg h-10 px-5 pr-10  ">
        <div className="flex items-center justify-start">
            <div className="flex flex-row">
                <button  className="flex items-center focus:outline-none">
                    <FaSearch className="w-5 h-5 mt-2 text-gray-500" />
                </button>
                <input
                type="text"
                placeholder="Search"
                className=" bg-white h-10 px-5 pr-10  text-sm focus:outline-none"
                />    
            </div>
        </div>
        <div className="relative flex flex-row gap-2">
                <button  className="flex items-center focus:outline-none">
                    <FaInbox className="w-6 h-6 mt-2 text-gray-500" />
                </button>
                <button  className="flex items-center focus:outline-none">
                    <FaBell className="w-6 h-6 mt-2 text-gray-500" />
                </button>
                
                 <button onClick={handleToggle} className="flex items-center focus:outline-none">
                    <FaUser className="w-6 h-6  text-gray-500" />
                </button>
                 
                {login && (
                    <div className="absolute right-0 mt-10 py-1 w-24 bg-white  shadow-lg z-10">
                    <button className="block px-2 py-2 text-gray-800 hover:bg-gray-200 w-1/5 text-left">
                        <FaSignOutAlt className="mr-2" />
                        logout
                    </button>
                </div>
            )}
            </div>
    </div>
  )
};
export default Searchbar;