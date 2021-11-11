const ParkInfo = (props) => {
  return (
    <>
      <p>Current dinosaur species: {props.currentSpecies}</p>
      <p>Number of dinosaurs: {props.numberOfDinos}</p>
    </>
  )
}

export default ParkInfo