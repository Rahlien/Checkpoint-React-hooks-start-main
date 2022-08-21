import React from 'react';
import PetList from './PetList';
import axios from 'axios';
import DeletePet from './DeletePet';

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from '../petdata';

const Root = () => {
  const [pets, setPets] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchPets(){
      const { data } = await axios.get("/api/pets")
      setPets(data)
      setLoading(false)
    }
    fetchPets()
  }, [])

  function handleDelete(id){
    const newPets = pets.filter((pet) => pet.id !== id)
    console.log(id)
    setItems(newPets)
  }

  return (
    <>
      <h1>Adoption Center</h1>
      
      {loading ? 'Loading Pets!' :<PetList pets={pets} handleDelete={handleDelete}/>}
    </>
  )
}

export default Root;
