
import Image from 'next/image'
import thumnail from '@/public/loginPage/logo.png'
import LoginForm from '@/components/loginForm'



export default function Login() {
    return (
        <div className=" bg-slate-100  flex items-center justify-center  w-full h-screan">
            <div className="  flex   items-center justify-center  rounded-md bg-blue-900 w-4/5 h-4/5 ">
                <div id='vectorImg'  className="flex w-full h-full  rounded-md flex-col items-center justify-center" >   
                        <Image src={thumnail} alt='logo' />
                        <h4 className="sm:text-xl md:text-4xl font-bold text-white">WELCOME</h4>
                </div>
                <div className="flex mx-5 w-full h-full flex-col items-center  justify-center" >
                {/* Login form  */}
                 <LoginForm  />
                </div>
            </div>

        </div>
    );
  }


