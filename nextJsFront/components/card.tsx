
import React from 'react';

import image from '@/public/navbar/download.jpg'
import Image from 'next/image';

const Card = ({data}) => {
  return (
    <div className="justify-center items-center flex flex-row bg-white shadow-lg rounded-sm overflow-hidden">
      <div className="w-32 h-10 flex justify-center items-center">
        <Image className="w-10 h-full rounded-md" src={image} alt="Card" />
      </div>
      <div className="border-b  border-red-500 "></div>

      <div className="px-6 py-4">
        <div className="text-sm">{data.name}</div>
        <div className="font-bold text-gray-400 text-base">{data.total}</div>
      </div>
    </div>
   
  );
};

export default Card;
