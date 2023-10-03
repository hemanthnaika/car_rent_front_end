import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export function UserDetails() {
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState([]);
  useEffect(() => {
    const getBooking = async () => {
      try {
        const docRef = doc(db, "user", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUser(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getBooking();
  }, [currentUser]);
  return user;
}
