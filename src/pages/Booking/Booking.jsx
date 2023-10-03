import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import {
  collection,
  where,
  onSnapshot,

} from "firebase/firestore";
import { db } from "../../firebase";

import BookingCar from "../../components/BookingCar";
import BookingH from "./BookingH";

const Booking = () => {
  const { currentUser } = useContext(AuthContext);
  const [Booking, setBooking] = useState("");


    useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "rentHistory"),where("userId", "==", currentUser.uid),

      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setBooking(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  return (
    <section className="w-full min-h-screen bg-slate-100">
      <div className="w-full h-72 bg-[url('https://images.unsplash.com/photo-1611236849860-0d678360a5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1954&q=80')] bg-cover bg-center flex items-center mb-5">
        <h1 className="text-white text-4xl padding">My Booking</h1>
      </div>
      <div className="padding-x ">
      <BookingH/>
        {Booking ? Booking.map((item,i)=><BookingCar key={i} data={item}/>):<></> }
      </div>
    </section>
  );
};

export default Booking;

