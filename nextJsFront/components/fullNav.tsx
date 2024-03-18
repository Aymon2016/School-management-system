'use client'

import Link from "next/link"
import Image from "next/image"
import OpenNavbar from '@/public/navbar/not cross.png'
import student from '@/public/navbar/download.jpg'
import logo from '@/public/loginPage/logo.png'



interface Props {
    close: () => void;
  }


const NavWithTitle: React.FC<Props> = ({ close }) => {
   
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
            name : 'Account',
            avator: student,
            page:'account'
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
    <div className=" h-dvh w-36 pb-5 flex bg-blue-950 flex-col justify-start">
        <div className=" flex justify-between pt-5 px-5 pb-5  bg-red-500 ">
            <Image className="w-5 h-5" src={logo} alt="logo" />
            <span onClick={close}><Image className="w-5 h-5" src={OpenNavbar} alt="open nav bar" /></span>
        </div>
        <div className=" flex  justify-center ">
            <ul className="flex flex-col pl-2 px-0 pt-5 border-b border-gray-400 gap-2">
                {
                    icon.map( (item)=>(
                        <Link href={item.page}>
                        <li className=" py-2 border-b border-gray-500 flex">
                            <Image className="w-5 h-5 mr-5" src={item.avator} alt="cross" />
                            <h4 className="text-white text-xs overflow-hidden">{item.name}</h4>
                        </li>
                        </Link>
            
                    ))
                }
                
            </ul>
           
        </div>
    </div>
  )
};

export default NavWithTitle;
