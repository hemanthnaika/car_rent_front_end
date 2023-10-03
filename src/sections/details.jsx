import { steering } from "../assets/icons";
import { MdAirlineSeatReclineExtra, MdGpsFixed } from "react-icons/md";
import { IoLogoModelS } from "react-icons/io";
import { BsFillFuelPumpFill, BsMusicNoteBeamed } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import BookingForm from "../components/BookingForm";
import { TbAirConditioning } from "react-icons/tb";

import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { useParams } from "react-router-dom";

const Details = () => {
  const {id } = useParams();
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
      const docRef = doc(db, "car", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data())
      } else {
      
        console.log("No such document!");
      }
      } catch (error) {
        console.log(error)
      }
    };
    fetchData()
  }, [id]);

  return (
    <section className="min-h-screen w-full  flex justify-center items-center flex-col ">
      <div className="grid__container mt-24 mb-5 mx-5">
        <div className="bg-slate-100  p-1 rounded-md shadow-lg  max-w-lg">
          <div>
           <div className="py-5 flex justify-center">
           <img src={data?.img} className="96" alt="" />
           </div>
           
          </div>
          <div className="font-Poppins font-semibold px-8 mb-5">
            <h1 className="text-2xl font-bold pt-3">{data?.carname}</h1>
            <h1 className="mt-5 text-2xl font-normal">₹ {data?.price}/day</h1>
            <p className="max-w-md text-sm leading-7 mt-2 font-light">
            {data?.desc}
            </p>

            <h2 className="mt-3 text-xl">Overview</h2>

            <div className="mb-2 flex overView__iconBox mt-3 max-w-sm ">
              <h1 color="blue-gray" className="font-medium overView__h1">
                <AiFillCar className="overView--icon" />
                Brand: {data?.Brand}
              </h1>
              <h1 color="blue-gray" className="font-medium overView__h1 ">
                <BsFillFuelPumpFill className="overView--icon " />
                Fuel: {data?.fuel}
              </h1>
            </div>
            <div className="mb-2 overView__iconBox mt-3 max-w-sm">
              <h1 className="font-medium overView__h1">
                <img src={steering} alt="" />
               
                Transmission: {data?.transmission}
              </h1>
              <h1 className="font-medium overView__h1">
                <MdAirlineSeatReclineExtra className="overView--icon" />
                Seats: {data?.seat}
              </h1>
            </div>
            <div className="mb-2 overView__iconBox mt-3 max-w-sm">
              <h1 className="font-medium overView__h1">
                <MdGpsFixed className="overView--icon" />
                GPS: {data?.gps}
              </h1>
              <h1 className="font-medium overView__h1">
                <IoLogoModelS className="overView--icon" />
                Model: {data?.carmodel}
              </h1>
            </div>
            <div className="mb-2 overView__iconBox mt-3 max-w-sm">
              <h1 color="blue-gray" className="font-medium overView__h1">
                <BsMusicNoteBeamed className="overView--icon" />
                Music: {data?.music}
              </h1>
              <h1 className="font-medium overView__h1">
                <TbAirConditioning className="overView--icon" />
                AC: {data?.ac}
              </h1>
            </div>
          </div>
        </div>
        <div className="max-w-lg ">
          <BookingForm price={data?.price} id={id} img={data?.img} carName={data?.carname}/>
        </div>
      </div>
    </section>
  );
};

export default Details;
