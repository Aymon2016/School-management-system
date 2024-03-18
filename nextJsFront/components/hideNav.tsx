'use client'

import Image from "next/image"
import cross from '@/public/navbar/cross.png'
import student from '@/public/navbar/download.jpg'
import Link from "next/link"

interface Props {
    open: () => void;
  }


const NavWithoutTitle: React.FC<Props> = ({ open }) => {
   
    const icon = [
        {
            name:"Dashboard",
            avator:student,
            page:'dashboard'
        },
        {
            name : 'Student',
            avator: student,
            page:'students'
        },
        {
            name : 'Teacher',
            avator: student,
            page:'teachers'
        },
        {
            name : 'Setting',
            avator: student,
            page:'setting'
        },
        {
            name : 'Login',
            avator: student,
            page:'/'
        }
    ]
  return (
    <div className=" h-dvh min-w-18  pb-5 flex bg-blue-950 flex-col justify-start">
        <div className=" flex justify-between pt-5 p-2 pb-5  bg-red-500 ">
            <span onClick={open}><Image className="w-5 h-4" src={cross} alt="open nav bar" /></span>
        </div>
        <div className=" flex  justify-center ">
            <ul className="flex flex-col pl-2 px-0 pt-5 border-b border-gray-400 gap-2">
                {
                    icon.map( (item)=>(
                        <Link href={item.page}>
                        <li className=" py-2 border-b border-gray-500 flex">
                            <Image className="w-5 h-5 mr-5" src={item.avator} alt="cross" />
                        </li>
                        </Link>
            
                    ))
                }
                
            </ul>
           
        </div>
    </div>
  )
};

export default NavWithoutTitle;
