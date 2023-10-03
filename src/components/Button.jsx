import { Link } from "react-router-dom"


const Button = ({
  label,link
}) => {
  return (
    <Link to={link} className="bg-blue-600 px-9 py-2 rounded-lg text-white">{label}</Link>
  )
}

export default Button