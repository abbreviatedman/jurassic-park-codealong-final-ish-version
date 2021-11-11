const DinoCard = (props) => {
  const {name, image} = props.dino;
  return (
    <div className="dino-card">
      <p>Dinosaur: {name}</p>
      <img src={image} alt={name} />
    </div>
  )
}

export default DinoCard;