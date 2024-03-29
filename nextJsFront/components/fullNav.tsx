'use client'

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import OpenNavbar from '@/public/navbar/not cross.png'
import student from '@/public/navbar/download.jpg'
import logo from '@/public/loginPage/logo.png'



interface Props {
    close: () => void;
  }


const NavWithTitle: React.FC<Props> = ({ close }) => {
   
    const [isHovered, setIsHovered] = useState(false); 
    const [teacherHovered, setTeacherHovered] = useState(false); 
    const [accountHovered, setAccountHovered] = useState(false); 

  return (
    <div className=" h-dvh w-36 pb-5 flex bg-blue-950 flex-col justify-start">
        <div className=" flex justify-between pt-5 px-5 pb-5  bg-red-500 ">
            <Image className="w-5 h-5" src={logo} alt="logo" />
            <span onClick={close}><Image className="w-5 h-5" src={OpenNavbar} alt="open nav bar" /></span>
        </div>
        <div className=" flex  justify-center ">
            <ul className="flex w-32  flex-col pl-2 px-0 pt-5 border-gray-400 gap-2">
                <Link href= '/'>
                    <li className=" py-2 border-b border-gray-500 flex">
                            <Image className="w-5 h-5 mr-5" src={student} alt="cross" />
                            <h4 className="text-white text-xs overflow-hidden">Dashboard</h4>
                    </li>
                </Link>
                
                <li className=" py-2  border-b border-gray-500 flex"
                    onClick={() => setIsHovered(!isHovered)}
                    
                >
                    <Image className="w-5 h-5 mr-5" src={student} alt="cross" />
                    <h4 className="text-white text-xs overflow-hidden">Student</h4>
                </li>

                {isHovered && (
                    <ul className="flex flex-col border-gray-950 bg-blue-950 gap-2">
                        <Link href= '/students/all_students'>
                        <li className=" py-2 border-b border-gray-500 flex">
                            <Image className="w-5 h-5 mr-5" src={student} alt="cross" />
                            <h4 className="text-white text-xs overflow-hidden">All Student</h4>
                        </li>
                        </Link>
                        <Link href= '/students/add_student'>
                        <li className=" py-2 border-b border-gray-500 flex">
                            <Image className="w-5 h-5 mr-5" src={student} alt="cross" />
                            <h4 className="text-white text-xs overflow-hidden">Add Student</h4>
                        </li>
                        </Link>
                        <Link href= '/students/promotion'>
                        <li className=" py-2 border-b border-gray-500 flex">
                            <Image className="w-5 h-5 mr-5" src={student} alt="cross" />
                            <h4 className="text-white text-xs overflow-hidden">Promotion</h4>
                        </li>
                        </Link>
                    </ul>
                    )}

                    <li className=" py-2  border-b border-gray-500 flex"
                        onClick={() => setTeacherHovered(!teacherHovered)}  
                        >
                        <Image className="w-5 h-5 mr-5" src={student} alt="cross" />
                        <h4 className="text-white text-xs overflow-hidden">Teachers</h4>
                    </li>
                        {teacherHovered && (
                           <ul className="flex flex-col border-gray-950 bg-blue-950 gap-2">
                           <Link href= '/teachers/all_teacher'>
                           <li className=" py-2 border-b border-gray-500 flex">
                               <Image className="w-5 h-5 mr-5" src={student} alt="cross" />
                               <h4 className="text-white text-xs overflow-hidden">All Teacher</h4>
                           </li>
                           </Link>
                           <Link href= '/teachers/add_teacher'>
                           <li className=" py-2 border-b border-gray-500 flex">
                               <Image className="w-5 h-5 mr-5" src={student} alt="cross" />
                               <h4 className="text-white text-xs overflow-hidden">Add Teacher</h4>
                           </li>
                           </Link>
                           <Link href= '/teachers/promotion'>
                           <li className=" py-2 border-b border-gray-500 flex">
                               <Image className="w-5 h-5 mr-5" src={student} alt="cross" />
                               <h4 className="text-white text-xs overflow-hidden">Promotion</h4>
                           </li>
                           </Link>
                            </ul>
                            )}
                            <li className=" py-2  border-b border-gray-500 flex"
                                onClick={() => setAccountHovered(!accountHovered)}
                                
                            >
                                <Image className="w-5 h-5 mr-5" src={student} alt="cross" />
                                <h4 className="text-white text-xs overflow-hidden">Accounts</h4>
                            </li>

                            {accountHovered && (
                                <ul className="flex flex-col border-gray-950 bg-blue-950 gap-2">
                                    <Link href= '/accounts/add_accounts'>
                                    <li className=" py-2 border-b border-gray-500 flex">
                                        <Image className="w-5 h-5 mr-5" src={student} alt="cross" />
                                        <h4 className="text-white text-xs overflow-hidden">Add Expenses</h4>
                                    </li>
                                    </Link>
                                    <Link href= '/accounts/all_expenses'>
                                    <li className=" py-2 border-b border-gray-500 flex">
                                        <Image className="w-5 h-5 mr-5" src={student} alt="cross" />
                                        <h4 className="text-white text-xs overflow-hidden">All Expenses</h4>
                                    </li>
                                    </Link>
                                    <Link href= '/accounts/students_fee'>
                                    <li className=" py-2 border-b border-gray-500 flex">
                                        <Image className="w-5 h-5 mr-5" src={student} alt="cross" />
                                        <h4 className="text-white text-xs overflow-hidden">Students Tracsection</h4>
                                    </li>
                                    </Link>
                                    <Link href= '/accounts/teachers_salary'>
                                    <li className=" py-2 border-b border-gray-500 flex">
                                        <Image className="w-5 h-5 mr-5" src={student} alt="cross" />
                                        <h4 className="text-white text-xs overflow-hidden">Teachers Tracsection</h4>
                                    </li>
                                    </Link>
                                </ul>
                                )}
                <Link href= '/setting'>
                    <li className=" py-2 border-b border-gray-500 flex">
                            <Image className="w-5 h-5 mr-5" src={student} alt="cross" />
                            <h4 className="text-white text-xs overflow-hidden">Setting</h4>
                    </li>
                </Link>
                
            </ul>
           
        </div>
    </div>
  )
};

export default NavWithTitle;
