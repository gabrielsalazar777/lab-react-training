const Random = ({min, max}) => {
  const randomNum = min + Math.floor(Math.random() * (max-min));
  return (
    <div>
    <p>Random value between {min} and {max} : {randomNum}</p>
    </div>
  )
}

export default Random
