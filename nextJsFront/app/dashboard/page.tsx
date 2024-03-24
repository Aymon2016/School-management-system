

import Searchbar from "@/components/searchbar";
import Card from '@/components/card'
import {Data} from '@/api/data'


export default  function Home() {

  
  return (
    <div className="flex flex-col w-full">
      <div className=" flex flex-row bg-white-500">
        <Searchbar />
      </div>
      <div className=" flex  flex-col ">
        <h4 className="sm:text-sm md:text-2xl py-2 px-5 font-semiBold text-black-">
          Admin Dashboard
          <hr className="border-b w-5 border-red-500 font-bold "/>
        </h4>
        <div className="flex p-5 flex-row gap-2">
          {
            Data.map( (item)=>(
              <Card key={Math.random()} data ={item}></Card>
            ))
          }
        </div>
      </div>
    </div>
  );
}





