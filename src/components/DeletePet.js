import React from 'react';


const DeletePet = (props, {handleDelete}) => {
    const pet = props.pets


    const[chosenPet, setChosenPet] = React.useState([])

    React.useEffect(() => {
        function selectPet(){
            setChosenPet(pet)
        }
        selectPet()
      }, [])
    
    React.useEffect(() => {
        function handleDelete(){
            console.log(chosenPet)
        }
        
        handleDelete(chosenPet.id)
    }, [])

    return (
        <div>
            <button onClick={handleDelete}>Delete Pet</button>
        </div>
    )
}

export default DeletePet;