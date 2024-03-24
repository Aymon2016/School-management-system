'use client'
import useForm from '@/hooks/useForm'

export default function Signup() {

    const initialValues = {
        username: '',
        email: '',
        password: ''
    };

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
        <div className="flex mx-auto flex-col justify-center items-center sm:w-1xl md:w-5xl h-full bg-white md:p-10 mt-10 mb-10 rounded-xl">
            <h2 className="text-black py-2 px-4 text-semiBold font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit} className="bg-white-200 p-6">
                <div className="mb-4 shadow:md">
                    <label htmlFor="username" className="block mb-2">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm shadow-sm focus:border-gray-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm shadow-sm focus:border-gray-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm shadow-sm focus:border-gray-500"
                    />
                </div>
                <button type="submit" className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-900">
                    Signup
                </button>
            </form>
        </div>
    );
}
