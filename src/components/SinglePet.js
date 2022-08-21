import React from 'react';

function SinglePet(props) {
  // const { id, name, description, species } = props
  const id = props.pet.id
  const name = props.pet.name
  const description = props.pet.description
  const species = props.pet.species


  const [adopt, setAdopt] = React.useState(false)

  function adoptChecker() {
    setAdopt(!adopt)
  }


  return (
    <div className={adopt ? "single-pet adopted" : "single-pet"}>
        <a>
          <h2>{name}</h2>
          <p>{description}</p>
          <p><b>{species}</b></p>
          <h3>{adopt ? "Adopted":"Available"}</h3>
          <button onClick={adoptChecker}>Toggle Status</button>
        </a>
    </div>
  );
}

export default SinglePet;
