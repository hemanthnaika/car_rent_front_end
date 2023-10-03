import { Link} from "react-router-dom";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";
const BookingCar = ({data}) => {

    // Update Status
  const handleStatusChange = async (id) => {
    
    const statusRef = doc(db, "rentDetails", id);
    try {
      await updateDoc(statusRef, {
        status:"Cancelled" ,
      });
      
      toast.success("Booking Successful Cancel")
    } catch (error) {
      console.log(error);
    }
  };

  return (
   data ?  <div className="max-w-full   rounded overflow-hidden shadow-lg  bg-[#ffff] grid__container items-center px-2 py-4 mb-5">
   <div className="w-full flex justify-center ">
     <img className="w-[500px] object-contain justify-center" src={data.img} />
   </div>
   <div className="sm:px-6 px-1 py-4">
     <div className="font-bold text-2xl mb-3">{data.carname}</div>
     <div className="flex flex-wrap gap-5 px-10">
       <ul className="text-gray-600 font-bold mb-2 tracking-wide leading-8">
        <li>Booking ID:-{data.id}</li>
         <li>Start Date & Time: {data.pickupDate} {data.pickupTime}</li>
         <li>End Date & Time: {data.dropDate} {data.dropUpTime}</li>
       </ul>
       <ul className="text-gray-600 font-bold mb-2 tracking-wide leading-8">
         <li>Pickup Location:- {data.pickLocation}</li>
         <li>Drop Off Location:- {data.dropLocation}</li>
         <li className="text-xl ">Total Price:-{data.totalRent} </li>
       </ul>
     </div>
     <hr className="h-1 bg-slate-400 mb-5" />
     <h5 className="font-bold mb-3">Booking Status</h5>
     <h6 className={data?.status ==="Cancelled"  ? "bg-red-600 py-2 text-center rounded-md text-gray-100 w-56 "
:"bg-green-600 py-2 text-center rounded-md text-gray-100 w-56 "}>
       {data?.status}
     </h6>

     <div className="flex gap-5 flex-wrap">
      <Link to={`/details/${data.carID}`}>
      <button className="bg-blue-500 px-5 py-2 rounded-lg mt-5 ">
         More Info
       </button>
      </Link>
      {data.status !== "Cancelled" &&  <button className="bg-red-500 px-5 py-2 rounded-lg mt-5 w-20"
       onClick={()=>handleStatusChange(data.id)}
       >
         Cancel
       </button>}
     </div>
   </div>
 </div>:<h1>No Booking Found</h1>
  );
};

export default BookingCar;
