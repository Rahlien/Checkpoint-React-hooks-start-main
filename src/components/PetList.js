import React, { useEffect } from 'react';
import SinglePet from './SinglePet';


const cody = {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
};

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList(props, {handleDelete}) {
  const pets = props.pets
  
  const cats = pets.filter(pet => {
    return pet.species === "cat"
  })

  const dogs = pets.filter(pet => {
    return pet.species === "dog"
  })
  
  const [species, setSpecies] = React.useState(pets)

  const change = (event) => {
 
    if(event.target.value === "all") {
      return setSpecies(pets)
    }
    if(event.target.value === "dog") {
      return setSpecies(dogs)
    }
    if(event.target.value === "cat") {
      return setSpecies(cats)
    }
  }
  console.log(species)

  function selector(){
      // const change = document.querySelector('#species').value

      return (
        <div>
        <p>Filter by: </p> 
          <select id="species" onChange= {change}>
            <option value="all">All Pets</option>
            <option value="dog">Dogs</option>
            <option value="cat">Cats</option>
          </select>
          
        </div>
        
      )
    }
  function onDelete(id){
    console.log(id)
    return id
  }
  

  return (
    <>
      {selector()}
      <div className="pet-list"> 
      {
        species.map(pet => <SinglePet pets={pets} pet={pet} key={pet.id} handleDelete={handleDelete}/>)
      }      
      </div>
    </>
  )
}

export default PetList;
