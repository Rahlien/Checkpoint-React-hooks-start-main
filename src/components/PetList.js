import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SinglePet from './SinglePet';



const cody = {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
};

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList(props) {

  const cats = props.pets.filter(pet => {
    return pet.species === "cat"
  })

  const dogs = props.pets.filter(pet => {
    return pet.species === "dog"
  })
  
  const [pets, setPets] = useState([])

  const change = (event) => {
 
    if(event.target.value === "all") {
      return setPets(props.pets)
    }
    if(event.target.value === "dog") {
      return setPets(dogs)
    }
    if(event.target.value === "cat") {
      return setPets(cats)
    }
  }

  useEffect(()=> {
    function newRender(){
      setPets(props.pets)
    }
    newRender()
  },[props.pets])
  
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
  
  return (
    <>
      {selector()}
      <div className="pet-list"> 
      {
        pets.map(pet => <SinglePet pet={pet} key={pet.id} handleDelete={props.handleDelete}/>)
      }      
      </div>
    </>
  )
}

export default PetList;
