import { heroImg } from "../assets/images"


const Hero = () => {
  return (
    <section className="min-h-[80vh]  max-container grid  sm:grid-cols-2 grid-cols-1 ">
      <div className="flex-1 flex flex-col justify-center items-start sm:pt-1 pt-28 gap-5 w-full px-5 font-EB">
        <p className="text-xl font-semibold">Unlock Your Adventure with Hassle-Free Car Rentals.</p>
        <h1 className="text-5xl font-bold leading-[60px]">Discover the <span className="text-blue-900">World</span> on Wheels  Car Rental Simplified</h1>
        <p className="sm:max-w-md leading-8 text-xl font-semibold tracking-wide text-justify"> Explore new horizons with our user-friendly car rental services. From compact cars to spacious SUVs, we offer a vehicle for every journey. Enjoy the freedom of the open road - book your perfect ride today!</p>
      </div>
      <div className="mt-20">
        <img src={heroImg} alt="" width={700} className="object-contain" />
      </div>
    </section>
  )
}

export default Hero
