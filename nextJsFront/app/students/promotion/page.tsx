'use client'

import Image from 'next/image';
import { useState, } from 'react';

const Promotion = () => {
    const initialFormData = {
        id:'',
        name: 'aymon',
        fatherName: 'aklas',
        motherName: 'sadia',
        currentClass: 'class 10',
        promotionClass:'',
        
      };
    
      const [formData, setFormData] = useState(initialFormData);
     
      const handleClear = () => {
        setFormData(initialFormData);
      };

      const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        console.log(formData)
      };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <div className="max-w-5xl flex mx-auto flex-col justify-center rounded:md px-10 bg-white">
      <h2 className="text-base mt-4 font-bold mb-4">Promotion Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block mb-1">ID</label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="w-full h-6 sm:h-10 border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              disabled
              value={formData.name}
              onChange={handleChange}
              className="w-full h-6 sm:h-10 border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">Father Name</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              disabled
              onChange={handleChange}
              className="w-full h-6 sm:h-10 border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">Mother Name</label>
            <input
              type="text"
              name="motherName"
              disabled
              value={formData.motherName}
              onChange={handleChange}
              className="w-full h-6 sm:h-10 border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">Current Class</label>
            <input
              type="text"
              name="class"
              disabled
              value={formData.currentClass}
              onChange={handleChange}
              className="w-full h-6 sm:h-10 border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4 mt-2">
            <label htmlFor="class" className="block text-sm font-medium text-gray-700">Promotion Class:</label>
            <select
                id="class"
                name="promotionClass"
                value={formData.promotionClass}
                onChange={handleChange}
                className="w-full h-6 sm:h-10 border border-gray-300 rounded px-3 py-2 ">
                <option value="">Select...</option>
                <option value="class6">Class 6</option>
                <option value="class7">Class 7</option>
                <option value="class8">Class 8</option>
            </select>
          </div>
        </div> 
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
        <button
          onClick={handleClear}
          className="mt-4 ml-5 px-4 py-2 bg-red-500 text-white rounded hover:bg-blue-600"
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default Promotion;
