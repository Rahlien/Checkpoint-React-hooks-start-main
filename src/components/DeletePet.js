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
    
    function handleDelete(){
        console.log(chosenPet.id)
        return chosenPet.id
    }

    return (
        <div>
            <button onClick={handleDelete}>Delete Pet</button>
        </div>
    )
}

export default DeletePet;