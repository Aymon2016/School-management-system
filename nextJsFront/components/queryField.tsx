
import React, { useState } from 'react';
import useForm from '@/hooks/useForm';

export const Query = () =>{
    const initialValues = {
        search: '',
        selectedClass: '',
    }

    const onSubmit = (values) => {
        console.log(values);
    }
    const {values,handleChange,handleSubmit} = useForm(initialValues,onSubmit)

   
    
    return (
        <div className='flex gap-10 justify-between'>
                <div className="mb-4">
                    <label className="block mb-2">Username</label>
                    <input
                        type="text"
                        name='search'  
                        value={values.search}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                </div>
                <div className="mb-4 mt-2">
                        <label htmlFor="class" className="block text-sm font-medium text-gray-700">Select Class:</label>
                        <select
                            id="class"
                            name='selectedClass'
                            value={values.selectedClass}
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
                    <button onClick={handleSubmit}  className=" mt-7 sm:w-32 w-18 py-2 px-3 text-white  bg-red-500 rounded-md shadow-md focus:outline-none hover:bg-red-900 sm:text-sm">Search</button>
                </div>
            </div>
    )
}