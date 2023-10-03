import { bmw3, f12, mercedes, mini, van, volks } from "../assets/images"
import CategoriesCard from "../components/CategoriesCard"
const Categories = () => {
  return (
    <section className="xl:px-28 px-5">
      <h1 className="text-center text-4xl font-bold font-EB mb-5">Vehicle Categories</h1>
     <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 ">
     <CategoriesCard cat={"Economy"} desc={"Mini Cooper 3 or Similar"} price={100} img={mini}/>
      <CategoriesCard cat={"Premium"} desc={"Volkswagen Tiguan or Similar"} price={800} img={volks}/>
      <CategoriesCard  cat={"Standard"} desc={"BMW 3 Series or Similar"} price={280} img={bmw3}/>
      <CategoriesCard  cat={"Specialty"} desc={"Ferrari F12 or Similar"} price={589} img={f12}/>
      <CategoriesCard  cat={"Minivan"} desc={"Volkswagen California or Similar"} price={100} img={van}/>
      <CategoriesCard  cat={"Convertible"} desc={"MercedesS-Class or Similar"} price={900} img={mercedes}/>
     </div>
    </section>
  )
}

export default Categories
