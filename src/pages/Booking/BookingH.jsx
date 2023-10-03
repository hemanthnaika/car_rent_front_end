import { collection, onSnapshot, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import BookingCar from "../../components/BookingCar";


const BookingH = () => {
    const [Booking, setBooking] = useState("");
    const { currentUser } = useContext(AuthContext);
    useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "rentDetails"),where("userId", "==", currentUser.uid),

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
    Booking ? Booking.map((item,i)=><BookingCar key={i} data={item}/>):<></> 
    
  )
}

export default BookingH