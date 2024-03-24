'use client'

import useForm from "@/hooks/useForm";

const LoginForm = () => {

  const initialValues = {
    Email:'',
    password:''
  }

const onSubmit = async (values:any) => {
    try {
        const response = await fetch('', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        });
  
        if (response.ok) {
          console.log('Form submitted successfully');
          
        } else {
          console.error('Form submission failed');
          
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        
      }
};

const { values, handleChange, handleSubmit } = useForm(initialValues, onSubmit);

  return (
    <div className="flex justify-center items-center sm:w-1xl md:w-5xl  h-full bg-white  md:p-10 mt-24 mb-24 rounded-xl">
      <form onSubmit={handleSubmit} className="bg-white-200 p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            value={values.Email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-500 rounded-md text-sm shadow-sm focus:border-gray-500"/>
        </div>
        <div className="mb-4">
          <label className="block mb-2 ">Password</label>
          <input
          type="password"
          value={values.password} 
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-500 rounded-md text-sm shadow-sm focus:border-gray-500"/>
        </div>
        <button type="submit" className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-900">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
