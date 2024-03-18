import Image from 'next/image';
import image from '@/public/loginPage/Vector.png';

const Student = ({ params }) => {
    const { id } = params;

    return (
        <div className=" overflow-y-auto flex justify-center items-start w-full h-full ">
            <div className=" bg-white p-5 rounded-lg shadow-lg flex flex-row md:max-w-3xl">
                <div className="md:mr-8 ml-2 w-24 h-18 ">
                    <Image  src={image} alt="Student Image" width={300} height={300} />
                </div>
                <div>
                    <div className="mb-4">
                        <h1 className="text-3xl font-bold mb-2">Daniel Grant</h1>
                        <p className="text-sm md:text-base lg:text-ls xl:text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam laborum blanditiis totam nihil qui facilis vero sit culpa veniam. Velit!</p>
                    </div>
                    <div>
                        <p className="mb-2 text-sm md:text-base lg:text-ls xl:text-xl"><span className="font-bold">ID Number:</span> 111</p>
                        <p className="mb-2 text-sm md:text-base lg:text-ls xl:text-xl"><span className="font-bold">Name:</span> Daniel Grant</p>
                        <p className="mb-2 text-sm md:text-base lg:text-ls xl:text-xl"><span className="font-bold">Father Name:</span> 111</p>
                        <p className="mb-2 text-sm md:text-base lg:text-ls xl:text-xl"><span className="font-bold">Mother Name:</span> Daniel Grant</p>
                        <p className="mb-2 text-sm md:text-base lg:text-ls xl:text-xl"><span className="font-bold">Date of Birth:</span> 111</p>
                        <p className="mb-2 text-sm md:text-base lg:text-ls xl:text-xl"><span className="font-bold">Religion:</span> Daniel Grant</p>
                        <p className="mb-2 text-sm md:text-base lg:text-ls xl:text-xl"><span className="font-bold">Father Occupation:</span> 111</p>
                        <p className=" text-sm md:text-base lg:text-ls xl:text-xl"><span className="font-bold">Email:</span> Daniel Grant</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Student;
