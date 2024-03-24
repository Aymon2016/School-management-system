'use client'

import { useState } from "react";

const useForm = (initialValues:any, onSubmit:any) => {
    
    const [values, setValues] = useState(initialValues);

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        onSubmit(values);
    };
  
    const handleClear = () => {
        setValues(initialValues);
        
      };
    return {
        values,
        handleChange,
        handleSubmit,
        handleClear
    };
};

export default useForm;
