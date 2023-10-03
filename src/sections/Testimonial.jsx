/* eslint-disable react/no-unescaped-entities */
import { quote } from "../assets/icons";

const Testimonial = () => {
  return (
    <section className="flex flex-col items-center justify-center  sm:mx-28 mx- my-5">
      <div className="mt-3">
        <h1 className="font-Poppins  font-bold text-4xl text-center">
          <span className="font-Poppins  font-bold text-xl">
            Reviewed by People
          </span>
          <br />
          Client's Testimonials
        </h1>
      </div>
      <div className="container flex lg:flex-row flex-col items-center justify-around gap-5  mt-8 ">
        <div>
          <div>
            <h3 className="sm:max-w-lg max-w-xs font-EB text-lg font-bold text-center">
              "I recently rented a car through this website for a family road
              trip. The booking was a breeze, and we got a clean and comfortable
              SUV that fit our needs perfectly. The only reason I'm not giving
              them five stars is because the pickup location was a bit far from
              the airport, but overall, it was a great experience."
            </h3>
          </div>
          <div>
            <div className="mt-5 flex items-center  justify-around mx-5 sm:w-96 w-full">
              <div className="flex items-center gap-5">
                <img
                  className="inline-block w-20 rounded-full ring-2 ring-white bg-contain"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <h3 className="font-bold">
                  Sarah L. <br />
                  <span>- ★★★★☆</span>
                </h3>
              </div>
              <img src={quote} alt="" width={50} />
            </div>
          </div>
        </div>

        <div>
          <div>
            <h3 className="sm:max-w-lg max-w-xs font-EB text-lg font-bold text-center">
              "I travel frequently for work and always turn to this website for
              my rental needs. They consistently offer competitive rates, and
              the reservation process is quick and easy. I appreciate the option
              to choose from various rental companies all in one place. It saves
              me time and money!"
            </h3>
          </div>
          <div>
            <div className="mt-5 flex items-center  justify-around mx-5 sm:w-96 w-full">
              <div className="flex items-center gap-5">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  className="inline-block w-20 rounded-full ring-2 ring-white bg-contain"
                  alt=""
                />
                <h3 className="font-bold">
                  David W. <br />
                  <span>- ★★★★★</span>
                </h3>
              </div>
              <img src={quote} alt="" width={50} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
