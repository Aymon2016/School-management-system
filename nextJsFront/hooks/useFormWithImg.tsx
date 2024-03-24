

import { useState } from 'react';


export const useForm = (initialState:any,onSubmit:any) => {

  const [formData, setFormData] = useState(initialState);
  const [imagePreview, setImagePreview] = useState(null);

 
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevFormData:any) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleImageChange = (e:any) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevFormData:any) => ({
        ...prevFormData,
        image: file,
      }));

      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

 
  const handleClear = () => {
    setFormData(initialState);
    setImagePreview(null);
  };


  const handleSubmit = (e:any) => {
    e.preventDefault();
    onSubmit(formData);
   
  };

  return {
    formData,
    imagePreview,
    handleChange,
    handleImageChange,
    handleSubmit,
    handleClear,
  };
};
