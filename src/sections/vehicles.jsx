import Cards from "../components/cards";
import { useState, useEffect } from "react";

import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";

const Vehicles = () => {
  const { cat } = useParams();
  const [cars, setCars] = useState([]);

  useEffect(() => {
       const q = query(collection(db, "car"), where("cat", "==", cat));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const list = [];
        querySnapshot.forEach((doc) => {

          list.push({id: doc.id,...doc.data()})
        });
        setCars(list)
      });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <section id="vehicles" className="min-h-screen ">
      <div className="CatContainer relative">
        <div className="absolute top-[50%] left-[5%]">
          <h1 className="text-[3rem] text-white font-bold font-EB text-center ">
            {cat}
          </h1>
        </div>
      </div>
      <h1 className="text-3xl  font-bold font-EB px-10 py-5">Select Vehicle</h1>
      <div className="flex flex-wrap justify-center gap-10 mt-5 mb-5 ">
        {cars.map((item) => (
          <Cards key={item.id} value={item} />
        ))}
      </div>
    </section>
  );
};

export default Vehicles;
