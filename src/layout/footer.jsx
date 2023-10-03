import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-slate-100 flex w-full flex-row flex-wrap items-center px-28 justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between ">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 OpenRoad Rentals
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            <Link to={"/about"}> About Us </Link>{" "}
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            <Link to={"/contact"}>Contact</Link>{" "}
          </Typography>
        </li>
      </ul>

      
    </footer>
  );
};

export default Footer;
