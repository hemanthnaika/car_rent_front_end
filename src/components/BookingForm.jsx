import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { UserDetails } from "../utils";
import { NavLink, useNavigate } from "react-router-dom";

const BookingForm = ({ price, id, img, carName }) => {
  const { currentUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,

    // formState: { errors },
  } = useForm();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [cost, setCost] = useState("");
  const dailyRate = price;
  const [hide, setHide] = useState(false);
  useEffect(() => {
    if (startDate && endDate && startDate <= endDate) {
      let diffInDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
      diffInDays = diffInDays+1
      const  rent = diffInDays * dailyRate;
      
      setCost(rent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  const user = UserDetails();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    setHide(true);
    const SD = startDate.toISOString().split("T")[0];
    const ED = endDate.toISOString().split("T")[0];

    try {
      await addDoc(collection(db, "rentDetails"), {
        ...data,
        status: "Booked",
        img: img,
        userName: user.First_Name + user.Last_Name,
        userId: currentUser.uid,
        carName: carName,
        carID: id,
        totalRent: cost,
        pickupDate: SD,
        dropDate: ED,
        timestamp: serverTimestamp(),
      });
      toast.success("Car Booking Success");
      navigate("/booking");
    } catch (error) {
      console.log(error);
    }
    setHide(false);
  };

  return (
    <div className=" bg-slate-100 p-7 rounded-md shadow-lg ">
      <h1 className="text-2xl font-Poppins font-bold">Book Now</h1>
      <form className="mt-2 " onSubmit={handleSubmit(onSubmit)}>
        <div className="grid__container">
          <div>
            <label htmlFor="location" className="ml-3 inline-block mb-1 ">
              PickUp Location
            </label>

            <select
              name=""
              id=""
              className="input"
              {...register("pickLocation", { required: true })}
            >
              <option value="">Choose Location</option>
              <option value="Bangalore">Bangalore</option>
            </select>
          </div>

          <div>
            <label htmlFor="location" className="ml-3 inline-block mb-1 ">
              Drop Off Location
            </label>
            <select
              name=""
              id=""
              className="input"
              {...register("dropLocation", { required: true })}
            >
              <option value="">Choose Location</option>
              <option value="kanyadi">Kanyadi</option>
            </select>
          </div>

          <div>
            <label className="ml-3 inline-block mb-1">PickUp Date</label>
            <input
              type="date"
              className="input"
              onChange={(e) => setStartDate(new Date(e.target.value))}
            />
          </div>
          <div>
            <label className="ml-3 inline-block mb-1">Drop Off Date</label>
            <input
              type="date"
              className="input"
              onChange={(e) => setEndDate(new Date(e.target.value))}
              min={startDate ? startDate.toISOString().split("T")[0] : ""}
            />
          </div>
          <div>
            <label className="ml-3 inline-block mb-1">Pick Up Time</label>
            <input
              type="time"
              className="input"
              {...register("pickupTime", { required: true })}
            />
          </div>
          <div>
            <label className="ml-3 inline-block mb-1">Drop Off Time</label>
            <input
              type="time"
              className="input"
              {...register("dropUpTime", { required: true })}
            />
          </div>
        </div>
        <div>
          <label className="ml-3 inline-block mb-1">Contact Number</label>
          <input
            type="tel"
            className="input"
            placeholder="Contact Number"
            {...register("number", { required: true })}
          />
        </div>

        <div className="flex items-center justify-between mt-2">
          <div>
            <h1 className="ml-5 text-2xl font-bold">
              <span className="text-xl font-medium">Total Price :-</span> ₹{" "}
              {cost}
            </h1>
          </div>
          <div>
            {currentUser ? (
              <button
                type="submit"
                disabled={hide ? true : false}
                className="px-5 py-2 bg-blue-700 rounded-md text-slate-200"
              >
                Book
              </button>
            ) : (
              <p className="px-5 py-2 bg-blue-700 rounded-md text-slate-200">
                Please Login
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
