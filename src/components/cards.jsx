import { steering } from "../assets/icons";

import Button from "./Button";

import { BsFillFuelPumpDieselFill } from "react-icons/bs";

import { MdAirlineSeatReclineExtra} from "react-icons/md";

const Cards = ({value}) => {

 
  return (
    <div className="max-w-md rounded overflow-hidden shadow-2xl hover:bg-blue-100 mx-5">
        <div className="px-6 py-4 flex justify-between">
        <h2 className="font-bold text-xl mb-2 capitalize">{value.carname}</h2>
        <h1>₹<span className="font-bold text-xl">{value.price}</span>/day</h1>
      </div>
      <div className="flex justify-center">
      <img  src={value.img} alt="" className="h-52 " />
      </div>
      <div className="px-6 pt-4 pb-2 flex  w-full justify-center gap-5 items-center font-Roboto">
       <div className=" font-semibold text-gray-700 flex flex-col items-center gap-1  px-5 py-2 text-sm ">
       <MdAirlineSeatReclineExtra className="text-blue-600 text-xl"/>
       <p>{value?.seat} Seats</p>
       </div>
       <div className=" font-semibold text-gray-700 flex flex-col items-center  px-5 py-2 text-sm gap-1 ">
       <img src={steering} alt=""/>
       {value.transmission==='A'? <p>Automatic</p>:<p>Manual</p>}
       </div>
       <div className=" font-semibold text-sm text-gray-700 flex items-center flex-col px-5 py-1 gap-1">
       <BsFillFuelPumpDieselFill className="text-blue-600 text-xl "/>
       <p>{value.mpg} MPG</p>
       </div>
      </div>
      <div className="pb-3 px-4 w-full flex justify-center">
       <Button label="More Details" link={`/details/${value.id}`}/>
      </div>
    </div>
  )
}

export default Cards
