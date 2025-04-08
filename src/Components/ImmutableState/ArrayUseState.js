import React,{useState} from 'react'

const initState = ['John', 'Doe']

export const ArrayUseState = () => {
    const [persons, setPersons] = useState(initState)
    const handleClick = () => {
        // persons.push('Jane')
        // persons.push('Smith')
        // setPersons(persons)
    
      const newPersons= [...persons]
      newPersons.push('Jane')
        newPersons.push('Smith')
        setPersons(newPersons)
    }


    console.log('Array UseState Render')
  return (
    <div>
        <button onClick={handleClick}>Click</button>
        {
            persons.map((person) => (
                 <div key={person}>{person}</div>
            )  )
        }
    </div>
  )
}
