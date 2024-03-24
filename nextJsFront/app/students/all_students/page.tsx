'use client'


import Link from 'next/link';
import {students} from '@/api/student'
import {Query} from '@/components/queryField'

const StudentPage= ()=>{
   
  
    return (
        <div className='bg-white rounded-md p-5 w-full h-96 overflow-x-auto overflow-y-auto'>
            <Query />
            <div>
            <div className="overflow-y-auto">
                    <table className="table-auto w-full border-collapse border border-gray-800">
                    <thead>
                      <tr>
                        <th className="border border-gray-400 px-4 py-2">ID</th>
                        <th className="border border-gray-400 px-4 py-2">Name</th>
                        <th className="border border-gray-400 px-4 py-2">Number</th>
                        <th className="border border-gray-400 px-4 py-2">Gender</th>
                        <th className="border border-gray-400 px-4 py-2">Class</th>
                        <th className="border border-gray-400 px-4 py-2">Section</th>
                        <th className="border border-gray-400 px-4 py-2">Group</th>
                        <th className="border border-gray-400 px-4 py-2">Religion</th>
                        <th className="border border-gray-400 px-4 py-2">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map(student => (
                        <tr key={student.studentId}>
                          <td className="border border-gray-400 px-4 py-2">{student.studentId}</td>
                          <td className="border border-gray-400 px-4 py-2">{student.firstName} {student.lastName}</td>
                          <td className="border border-gray-400 px-4 py-2">{student.studentContactNumber}</td>
                          <td className="border border-gray-400 px-4 py-2">{student.gender}</td>
                          <td className="border border-gray-400 px-4 py-2">{student.class}</td>
                          <td className="border border-gray-400 px-4 py-2">{student.section}</td>
                          <td className="border border-gray-400 px-4 py-2">{student.group}</td>
                          <td className="border border-gray-400 px-4 py-2">{student.religious}</td>
                          
                          <td className=" text-center align-middle border border-gray-400">Show</td>
                        
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