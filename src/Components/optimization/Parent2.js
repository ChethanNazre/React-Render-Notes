import React,{useState} from 'react'
import { MemoizedChild2 } from './Child2'


export const Parent2 = ({children}) => {
    const [count, setCount] = useState(0)
    const[name,SetName] = useState('Nazre')

    console.log('Parent2 Rendered')
  return (
    <div>
        <button onClick={()=> setCount(c => c+1)}>Count - {count} </button>
        <button onClick={()=> SetName('CPT BuzzKill')}>Change Name</button>

<MemoizedChild2 name ={name}/>
    </div>
  )
}
