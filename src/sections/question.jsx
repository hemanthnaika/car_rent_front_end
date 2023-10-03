import { questionImg } from "../assets/images"

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const Question = () => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className=" xl:px-28 px-5 py-9 -z-1">
      <h1 className="font-bold text-center text-xl">FAQ</h1>
      <h1 className="font-bold text-center text-2xl">Frequently Asked Question</h1>
      <div className="flex xl:flex-row flex-col items-center">
        <div className="flex-1">
          <img src={questionImg} alt="" width={900} />
        </div>
        <div className="font-EB flex-1">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)}>What documents do I need to rent a car?</AccordionHeader>
            <AccordionBody className="text-lg ">
            Typically, you will need a valid driver's license, a major credit card in your name, and proof of insurance. International renters may require additional documentation like an international driver's permit and a passport. Specific requirements may vary by rental agency, so it's essential to review their policies.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2)}>
             Can I pick up and return the rental car at different locations?
            </AccordionHeader>
            <AccordionBody className="text-lg ">
            Yes, many rental agencies offer one-way rentals, allowing you to pick up the car at one location and return it to another. However, this service often comes with an additional fee, so be sure to inquire about the cost and availability when booking.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(3)}>
            What happens if I need to cancel or modify my car rental reservation?
            </AccordionHeader>
            <AccordionBody className="text-lg">
            You can usually cancel or modify your reservation, but it's important to review the rental agency's cancellation policy. Most agencies offer a free cancellation period if you cancel within a specific timeframe, but there may be fees for late cancellations or changes. Make sure to read the terms and conditions when making your reservation.
            </AccordionBody>
          </Accordion>

        </div>

      </div>
    </section>
  )
}

export default Question
