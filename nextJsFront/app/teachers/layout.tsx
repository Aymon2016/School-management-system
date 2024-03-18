
import Searchbar from "@/components/searchbar";

export default function StudentPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return(
      <div className="flex flex-col w-full">
      <div className=" flex flex-row bg-white-500">
        <Searchbar />
      </div>
      <div>
        <h4 className="sm:text-sm md:text-2xl py-2 px-5 font-semiBold text-black">
          Students
          <hr className="border-b w-5 border-red-500 font-bold "/>
        </h4>
        
        <div className="flex p-5 flex-row gap-2">
         {
          children
         }
        </div>
        
      </div>
    </div>
    )
}
