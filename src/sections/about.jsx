/* eslint-disable react/no-unescaped-entities */
import { aboutImg } from "../assets/images"
import ChooseCard from "../components/Choose"
import { Choose } from "../constants"


const About = () => {
  return (
    <section  className="xl:px-28 px-5 xl:py-10 py-5 flex flex-col items-center gap-10 ">
      <h1 className="font-bold font-Poppins text-3xl text-center mt-7">- About Us -<br />
        Know More <span className="text-blue-800">About Us</span>
      </h1>

      <div><img src={aboutImg} alt="" width={500} /></div>
      <div className="flex xl:flex-row flex-col text-justify gap-5 font-Geologica">
        <div className="flex-1">
          <p className="text-base">Welcome to <span className="font-bold text-blue-700">OpenRoad Rentals,</span> where your journey becomes our mission. We're not just a car rental company; we're your partners in exploration, your companions on the open road, and your gateway to unforgettable memories.</p>
          <h2 className="my-2 font-bold">Who We Are :-</h2>
          <p>
            <span className="font-bold text-blue-700">Founded 2002,</span> OpenRoad Rentals was born out of a deep love for travel and a desire to empower travelers with the means to create their own adventures. We understand that a car is more than just a mode of transportation – it's a vessel that carries dreams, aspirations, and the stories of your journey.
          </p>
        </div>
        <div className="flex-1 ml-10">
        <h5 className="font-bold mb-2">Why Choose Us :-</h5>
          {Choose.map((item) => (
            <ChooseCard key={item.icon} props={item} />
          ))}
        </div>
      </div>

    </section>
  )
}

export default About