import { useContext, useEffect, useState } from "react";
import { avatar } from "../../assets/icons";
import { useForm } from "react-hook-form";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase";

import { AuthContext } from "../../context/AuthContext";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { UserDetails } from "../../utils";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const user = UserDetails();
  const values = user;
  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: user,
    values,
  });

  const [per, setPer] = useState(null);
  useEffect(() => {
    const uploadFile = () => {
      // eslint-disable-next-line no-unused-vars
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setPer(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("Successfully downloaded");
            setValue("img", downloadURL);
          });
        }
      );
    };
    file && uploadFile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  const onSubmit = async (data) => {
    try {
      await setDoc(doc(db, "user", currentUser.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      toast.success("Profile Is saved successfully");
      reset(data);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };

  return (
    <>
      {currentUser ? (
        <section className="w-full min-h-screen  flex justify-center items-center bg-slate-300 px-2 ">
          <div className="bg-[#ffff] px-5 py-4 w-[500px] shadow-2xl">
            <h1 className="font-bold font-Poppins text-center text-xl mb-2">
              My Account
            </h1>
            <hr className="bg-slate-200 h-1 rounded-full" />
            <form
              className="flex flex-col font-Poppins font-bold px-3 py-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex  flex-col items-center mb-3 w-full relative">
                <img
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : user?.img
                      ? user?.img
                      : avatar
                  }
                  className="inline-block h-44  w-44 rounded-full ring-2 ring-white "
                />
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  className="absolute top-[50%] left-24 opacity-0 cursor-pointer"
                />
              </div>
              <label className="text-slate-600">First Name</label>
              <input
                type="text"
                className="input"
                {...register("First_Name", { required: true })}
              />
              <label className="text-slate-600">Last Name</label>
              <input
                type="text"
                className="input"
                {...register("Last_Name", { required: true })}
              />

              <div className="flex gap-6 mb-3">
                <label className="text-slate-600">Gender :-</label>
                <label className="text-slate-600">Male</label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  {...register("Gender", { required: true })}
                />
                <label className="text-slate-600">Female</label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  {...register("Gender", { required: true })}
                />
              </div>
              <div className="flex w-full justify-center">
                <button
                  type="submit"
                  className="bg-green-700 px-5 py-2 rounded-md font-Josefin font-bold w-52 text-slate-200 "
                  disabled={per !== null && per < 100}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </section>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default Profile;
