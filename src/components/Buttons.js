const Buttons = (props) => {
  return (
    <>
      <button onClick={props.randomSpeciesHandler}>Research New Species</button>
      <button onClick={props.addDinoHandler}>Add New Dinosaur</button>
      <button onClick={props.destroyParkHandler}>Destroy Park</button>
    </>
  )
}

export default Buttons