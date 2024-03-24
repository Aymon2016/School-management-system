'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { TeacherQuery } from '@/components/teacherQueryField';
import { teachers } from '@/api/teacher';

const TeacherPage= ()=>{
   
  
  
   
    return (
        <div className='bg-white rounded-md p-5 w-full h-96 overflow-x-auto overflow-y-auto'>
            <TeacherQuery />
            <div>
            <div className="overflow-y-auto">
                    <table className="table-auto w-full border-collapse border border-gray-800">
                    <thead>
                      <tr>
                        <th className="border border-gray-400 px-4 py-2">ID</th>
                        <th className="border border-gray-400 px-4 py-2">Name</th>
                        <th className="border border-gray-400 px-4 py-2">Phone Number</th>
                        <th className="border border-gray-400 px-4 py-2">Gender</th>
                        <th className="border border-gray-400 px-4 py-2">Religion</th>
                        <th className="border border-gray-400 px-4 py-2">Address</th>
                        <th className="border border-gray-400 px-4 py-2">Class Teacher</th>
                        <th className="border border-gray-400 px-4 py-2">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teachers.map(teacher => (
                        <tr key={teacher.id}>
                          <td className="border border-gray-400 px-4 py-2">{teacher.id}</td>
                          <td className="border border-gray-400 px-4 py-2">{teacher.name}</td>
                          <td className="border border-gray-400 px-4 py-2">{teacher.phoneNumber}</td>
                          <td className="border border-gray-400 px-4 py-2">{teacher.gender}</td>
                          <td className="border border-gray-400 px-4 py-2">{teacher.religion}</td>
                          <td className="border border-gray-400 px-4 py-2">{teacher.address}</td>
                          <td className="border border-gray-400 px-4 py-2">{teacher.classTeacher}</td>
                          <Link href = {`teachers/${teacher.id}`}>
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

export default TeacherPage