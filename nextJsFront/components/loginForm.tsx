'use client'

import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Here, you can handle login logic, such as sending the username and password to a server
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center items-center sm:w-1xl md:w-5xl  h-full bg-white  md:p-10 mt-24 mb-24 rounded-xl">
      <form onSubmit={handleSubmit} className="bg-white-200 p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm shadow-sm 
            focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
            invalid:border-gray-500 invalid:text-gray-600
            focus:invalid:border-gray-500 focus:invalid:ring-gray-500
          "/>
        </div>
        <div className="mb-4">
          <label className="block mb-2 ">Password</label>
          <input
          type="password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm shadow-sm 
      focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
      invalid:border-gray-500 invalid:text-gray-600
      focus:invalid:border-gray-500 focus:invalid:ring-gray-500
    "/>
        </div>
        <button type="submit" className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-900">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
