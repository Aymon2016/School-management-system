'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const StudentPage= ()=>{
    const [search, setSearch] = useState('');
    const [selectedClass, setSelectedClass] = useState('');

  
    const [query, setQuery] = useState({
        search: '',
        selectedClass: '',
      });
    
      const handleChange = (e:any) => {
        setQuery({ ...query, [e.target.name]: e.target.value });
      };
  
    const students = [
        {
            id:1,
            name:'aymon',
            phoneNumber:'90000',
            class:'5'
        },
        {
          id:1,
          name:'aymon',
          phoneNumber:'90000',
          class:'5'
      }, {
        id:1,
        name:'aymon',
        phoneNumber:'90000',
        class:'5'
    },  {
      id:1,
      name:'aymon',
      phoneNumber:'90000',
      class:'5'
  },
  {
    id:1,
    name:'aymon',
    phoneNumber:'90000',
    class:'5'
}, {
  id:1,
  name:'aymon',
  phoneNumber:'90000',
  class:'5'
},  {
  id:1,
  name:'aymon',
  phoneNumber:'90000',
  class:'5'
},
{
id:1,
name:'aymon',
phoneNumber:'90000',
class:'5'
}, {
id:1,
name:'aymon',
phoneNumber:'90000',
class:'5'
}
    ]
    return (
        <div className='bg-white rounded-md p-5 w-full h-96 overflow-x-auto overflow-y-auto'>
            <div className='flex gap-10'>
                <div className="mb-4">
                    <label className="block mb-2">Username</label>
                    <input
                        type="text"
                        value={search}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                </div>
                <div className="mb-4 mt-2">
                        <label htmlFor="class" className="block text-sm font-medium text-gray-700">Select Class:</label>
                        <select
                            id="class"
                            name="class"
                            value={selectedClass}
                            onChange={handleChange}
                            className="mt-1 block sm:w-64 w-32 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select...</option>
                            <option value="class6">Class 6</option>
                            <option value="class7">Class 7</option>
                            <option value="class8">Class 8</option>
                        </select>
                 </div>
                 <div className="mb-4">
                    <button  className=" mt-7 sm:w-32 w-18 py-2 px-3 text-white  bg-red-500 rounded-md shadow-md focus:outline-none hover:bg-red-900 sm:text-sm">Search</button>
                </div>
            </div>
            <div>
            <div className="overflow-y-auto">
                    <table className="table-auto w-full border-collapse border border-gray-800">
                    <thead>
                      <tr>
                        <th className="border border-gray-400 px-4 py-2">ID</th>
                        <th className="border border-gray-400 px-4 py-2">Name</th>
                        <th className="border border-gray-400 px-4 py-2">Class</th>
                        <th className="border border-gray-400 px-4 py-2">Phone Number</th>
                        <th className="border border-gray-400 px-4 py-2">ID</th>
                        <th className="border border-gray-400 px-4 py-2">Name</th>
                        <th className="border border-gray-400 px-4 py-2">Class</th>
                        <th className="border border-gray-400 px-4 py-2">Phone Number</th>
                        <th className="border border-gray-400 px-4 py-2">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map(student => (
                        <tr key={student.id}>
                          <td className="border border-gray-400 px-4 py-2">{student.id}</td>
                          <td className="border border-gray-400 px-4 py-2">{student.name}</td>
                          <td className="border border-gray-400 px-4 py-2">{student.class}</td>
                          <td className="border border-gray-400 px-4 py-2">{student.phoneNumber}</td>
                          <td className="border border-gray-400 px-4 py-2">{student.id}</td>
                          <td className="border border-gray-400 px-4 py-2">{student.name}</td>
                          <td className="border border-gray-400 px-4 py-2">{student.class}</td>
                          <td className="border border-gray-400 px-4 py-2">{student.phoneNumber}</td>
                          <Link href = {`students/${student.id}`}>
                          <td className="border flex justify-center border-gray-400 px-4 py-2 text-white p-2 rounded-sm bg-red-500  focus:outline-none hover:bg-red-900 sm:text-sm">Show</td>
                        </Link>
                        </tr>
                      ))}
                    </tbody>
                  </table>
              </div>
            </div>
            <div className="flex mt-2 justify-end items-center">
                <button
                  className="mr-2 px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300">
                  Previous
                </button>
                <ul className="flex gap-2">
                  <li className='border-solid border-2 border-red-500 py-2 px-4 bg-red-500'>1</li>
                  <li className='border-solid border-2 border-red-500 py-2 px-4'>2</li>
                  <li className='border-solid border-2 border-red-500 py-2 px-4'>3</li>
                </ul>
                <button
                  className="ml-2 px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300">
                  Next
                </button>
        </div>
        </div>
      );
}

export default StudentPage