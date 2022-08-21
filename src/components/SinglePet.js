import React from 'react';
import DeletePet from './DeletePet';

function SinglePet(props, {handleDelete}) {

  const id = props.pet.id
  const name = props.pet.name
  const description = props.pet.description
  const species = props.pet.species


  const [adopt, setAdopt] = React.useState(false)

  function adoptChecker() {
    setAdopt(!adopt)
  }

  // function handleDelete(id){
  //   console.log(id)
  //   return id
  // }

  return (
    <div className={adopt ? "single-pet adopted" : "single-pet"}>
        <a>
          <h2>{name}</h2>
          <p>{description}</p>
          <p><b>{species}</b></p>
          <h3>{adopt ? "Adopted":"Available"}</h3>
          <button onClick={adoptChecker}>Toggle Status</button>
          <DeletePet pets={props.pet}  handleDelete={handleDelete} />
        </a>
    </div>
  );
}

export default SinglePet;
