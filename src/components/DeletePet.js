import React, {useState, useEffect} from 'react';


const DeletePet = (props) => {
    const pet = props.pet

    const[chosenPet, setChosenPet] = useState([])

    useEffect(() => {
        function selectPet(){
            setChosenPet(pet)
        }
        selectPet()
      }, [])
    
    function onDelete(){
        props.handleDelete(chosenPet.id)
    }
    

    return (
        <div>
            <button onClick={onDelete}>Delete Pet</button>
        </div>
    )
}

export default DeletePet;