import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { useForm } from "react-hook-form";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

export default function Modal({ label }) {
  let [isOpen, setIsOpen] = useState(false);
  const [method, setMethod] = useState("Sign In");
  const [error, seterror] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const auth = getAuth();

  const onSubmit = async (data) => {
    if (method === "Sign Up") {
      if (data.password !== data.conformPassword) {
        seterror(true);
        return;
      }

      try {
        await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        reset({ email: "", password: "", conformPassword: "" });
        seterror(false);
        setMethod("Sign In");
        
      } catch (error) {
        alert(error.message);
        seterror(false);
      }
    } else if (method === "Sign In") {
      setIsOpen(false);
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          const data = {
            uid: user.uid,
            email: user.email,
            providerData: user.providerData,
          };
          setTimeout(() => {
            navigate('/profile');
          }, 1000);
          dispatch({ type: "LOGIN", payload: data });
        })
       
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-blue-700 bg-opacity-20 px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
          w-full"
        >
          {label}
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {method}
                  </Dialog.Title>

                  <form
                    className="flex flex-col px-2 py-3 gap-2"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <input
                      type="email"
                      className="input"
                      placeholder="Enter your Email"
                      {...register("email", { required: true })}
                    />
                    <input
                      type="password"
                      name=""
                      id="password"
                      className="input"
                      placeholder="Enter your password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                      })}
                    />
                    {errors.password &&
                      errors.password.type === "minLength" && (
                        <div className="text-red-700 text-center">
                          Password should be at least 6 characters
                        </div>
                      )}

                    {method === "Sign Up" && (
                      <input
                        type="password"
                        name=""
                        id=""
                        className="input"
                        placeholder="Conform password"
                        {...register("conformPassword", { required: true })}
                      />
                    )}
                    {error && (
                      <div className="text-red-700 text-center">
                        Passwords do not match.
                      </div>
                    )}
                    <button
                      type="submit"
                      className="bg-blue-600 px-9 py-2 rounded-lg text-white "
                    >
                      {method === "Sign In" ? "Sign In" : "Sign Up"}
                    </button>

                    {method === "Sign In" ? (
                      <div className="w-full text-center mt-3">
                        <p>
                          Forgot{" "}
                          <span className="text-blue-900 font-bold cursor-pointer">
                            Password?
                          </span>{" "}
                        </p>
                        <p>
                          Don&apos;t Have an account?{" "}
                          <span
                            className="text-blue-900 font-bold cursor-pointer"
                            onClick={() => setMethod("Sign Up")}
                          >
                            Sign Up
                          </span>
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="w-full text-center mt-3">
                          <p>
                            Already have an account?{" "}
                            <span
                              className="text-blue-900 font-bold cursor-pointer"
                              onClick={() => setMethod("Sign In")}
                            >
                              Sign In
                            </span>
                          </p>
                        </div>
                      </>
                    )}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
