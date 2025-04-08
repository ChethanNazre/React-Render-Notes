import React,{useState} from 'react'

const iniState ={
    fname: 'John',
    lname: 'Doe'
}

export const ObjectUseState = () => {

    const [person, setPerson] = useState(iniState)
    const changeName = () => {
        // person.fname = 'Jane'
        // person.lname = 'Smith'
        // setPerson(person)

        const newPerson = {...person}
            newPerson.fname= 'Jane'
            newPerson.lname= 'Smith'
            setPerson(newPerson)
        
        }
    


    console.log('Object UseState Render')
  return (
    <div>   
            <button onClick={changeName}>{person.fname}{person.lname}</button>
    </div>
  )
}
