import { Hero, Testimonial, } from "../sections"
import Categories from "../sections/Categories"
import Question from "../sections/question"


const Home = () => {
  return (
    <section>
     <Hero/>
     <Categories/>
    <Testimonial/>
    <Question/>
    </section>
  )
}

export default Home
