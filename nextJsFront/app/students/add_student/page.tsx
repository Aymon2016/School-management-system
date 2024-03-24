'use client'
import {useForm} from '@/hooks/useFormWithImg';
import Image from 'next/image';


const AddStudentForm = () => {
    const initialFormData = {
        name: '',
        fatherName: '',
        motherName: '',
        class: '',
        gender: '',
        location: '',
        dateOfBirth: '',
        bloodGroup: '',
        religion: '',
        fatherEmail: '',
        fatherOccupation: '',
        fatherNumber: '',
        image: null,
      };
      const onSubmit = (formData:any) => {
      
        console.log(formData);
        handleClear()
      };
    
    const {
      formData,
    imagePreview,
    handleChange,
    handleImageChange,
    handleSubmit,
    handleClear,
    } = useForm(initialFormData,onSubmit)
    

  return (
    <div className="max-w-5xl flex mx-auto flex-col justify-center rounded:md px-10 bg-white">
      <h2 className="text-base mt-4 font-bold mb-4">Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
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
              onChange={handleChange}
              className="w-full h-6 sm:h-10 border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">Mother Name</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              className="w-full h-6 sm:h-10 border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">Class</label>
            <input
              type="text"
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="w-full h-6 sm:h-10 border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">Gender</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full h-6 sm:h-10 border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full h-6 sm:h-10 border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">DateOfBirth</label>
            <input
              type="text"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full h-6 sm:h-10 border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">BloodGroup</label>
            <input
              type="text"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="w-full h-6 sm:h-10 border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">Religion</label>
            <input
              type="text"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              className="w-full h-6 sm:h-10 border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">FatherEmail</label>
            <input
              type="text"
              name="fatherEmail"
              value={formData.fatherEmail}
              onChange={handleChange}
              className="w-full h-6 sm:h-10 border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">FatherOccupation</label>
            <input
              type="text"
              name="fatherOccupation"
              value={formData.fatherOccupation}
              onChange={handleChange}
              className="w-full h-6 sm:h-10 border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">FatherNumber</label>
            <input
              type="text"
              name="fatherNumber"
              value={formData.fatherNumber}
              onChange={handleChange}
              className="w-full h-6 sm:h-10 border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
            <div>
                <label htmlFor="image" className="block mb-1">Image</label>
                <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                 />
            </div>
            {/* {imagePreview && (
                <div className="flex items-center">
                <Image src={imagePreview} alt="Uploaded" className="h-12 w-12 object-cover rounded-full" />
                
                </div>
            )} */}
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

export default AddStudentForm;
