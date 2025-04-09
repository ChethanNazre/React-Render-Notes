import React,{useState} from 'react'
import { MemoizedChild3 } from './Child3'
import { MemoizedChild4 } from './Child4'


export const Parent3 = ({children}) => {
    const [count, setCount] = useState(0)
    const[name,SetName] = useState('Nazre')

    console.log('Parent3 Rendered')
  return (
    <div>
        <button onClick={()=> setCount(c => c+1)}>Count - {count} </button>
        <button onClick={()=> SetName('CPT BuzzKill')}>Change Name</button>

        <MemoizedChild4 name ={name}/>

{/* <MemoizedChild3 name ={name}><strong>MemoizedChild3</strong></MemoizedChild3> */}
    </div>
  )
}
