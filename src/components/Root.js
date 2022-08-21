import React, { useState, useEffect } from 'react';
import PetList from './PetList';
import axios from 'axios';


// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from '../petdata';

const Root = () => {
  const [pets, setPets] = useState([])
  const [loading, setLoading] = useState(true)

  function handleDelete(id) {

    const newPets = pets.filter((pet) => pet.id !== id)
 
    setPets(newPets)
  }



  useEffect(() => {
    async function fetchPets(){
      try{
        const { data } = await axios.get("/api/pets")
        setPets(data)
        setLoading(false)
      }
      catch(ex) {
        console.error(ex)
      }
    }
    fetchPets()
  }, [])


  return (
    <>
      <h1>Adoption Center</h1>
      
      {loading ? 'Loading Pets!' :<PetList pets={pets} handleDelete={handleDelete}/>}
    </>
  )
}

export default Root;
