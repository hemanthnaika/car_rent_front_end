
const Choose = (item) => {
 const {icon,title,desc}=item.props
 

  return (
      <div className="flex items-center  gap-5">
        <img src={icon} alt="" width={50} />
        <div>
          <h4 className="font-bold my-2">{title}</h4>
          <p className="font-Geologica">{desc}</p>
        </div>
      </div>
     
  )
}

export default Choose