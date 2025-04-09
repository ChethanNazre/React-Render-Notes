import React,{useState} from 'react'


export const Parent1 = ({children}) => {
    const [count, setCount] = useState(0)
    console.log('Parent1 Rendered')
  return (
    <div>
        <button onClick={()=> setCount(c => c+1)}>Count - {count} </button>
    {children}
    </div>
  )
}
