import { Link } from "react-router-dom";

const CategoriesCard = ({cat,desc,price,img}) => {
  return (
      <Link to={`/categories/${cat}`}>
      <div className="max-w-sm p-3 shadow-xl hover:bg-slate-100 bg-[#F7F7F7] rounded-md border">
        <div className="flex justify-between gap-2 items-center mb-3">
        <div>
        <h1 className="font-bold font-Poppins text-xl">{cat}</h1>
        <p className="font-bold">{desc}</p>
        </div>
        <div className="font-bold bg-blue-200  px-2 py-1 rounded-md ">
        <p>From <br /> <span className="text-md">{price}</span>/Day</p>
        </div>
        </div>
       <div className="flex  w-full justify-center">
        <img src={img} alt="" className="h-52 w-full object-contain"/>
       </div>
      </div>
      </Link>
   
  );
};

export default CategoriesCard;
