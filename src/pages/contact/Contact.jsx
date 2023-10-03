import { useForm } from "react-hook-form";
import { contactImag } from "../../assets/images";
import toast from "react-hot-toast";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "contactUs"), {
        ...data,
        timestamp: serverTimestamp(),
      });
      reset({email:"",name:"",message:""})
      toast.success("Message Send successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="xl:px-28 px-5 xl:py-10 py-5 ">
      <form
        className="mt-6 w-full h-full flex xl:flex-row flex-col-reverse items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex-1">
          <h1 className="mb-3 text-[2.5rem] font-bold font-Poppins">
            Contact Us
          </h1>
          <input
            type="text"
            className="input"
            placeholder="Enter Name"
            {...register("name", { required: true })}
          />
          <input
            type="email"
            className="input"
            placeholder="Enter Email"
            {...register("email", { required: true })}
          />
          <textarea
            rows="5"
            {...register("message", { required: true })}
            className="border w-full input"
            placeholder="Enter Message"
          ></textarea>
          <button className="bg-[#00b7d7] w-full py-3 text-lg text-slate-100 font-Poppins font-bold rounded-3xl mt-2">
            Send
          </button>
        </div>
        <div className="flex-1">
          <img src={contactImag} alt="" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
