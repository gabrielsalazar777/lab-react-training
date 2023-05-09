const IdCard = (props) => {
  return (
    <div>
    <p>First Name: {props.firstName}</p>
    <p>Last Name: {props.lastName}</p>
    <p>Gender: {[props.gender]}</p>
    <p>Height (ft): {props.height}</p>
    <p>BirthDate: {props.birth.toLocaleString()}</p>
    <img src={props.picture} alt="" />
    </div>
  )
}

export default IdCard
