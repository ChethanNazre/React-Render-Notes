import React,{useState, useMemo, useCallback} from 'react'
import { MemoizedChild3 } from './Child3'
import { MemoizedChild4 } from './Child4'
import { MemoizedChild5 } from './Child5'


export const Parent4 = ({children}) => {
    const [count, setCount] = useState(0)
    const[name,SetName] = useState('Nazre')

    const Person ={
        name: 'bruce',
        age: 30,
    }

    const MemoizedPerson = useMemo(() => Person, [])

    const handleClick = () => {
        console.log('Clicked')
    }

    const MemoizedHandleClick = useCallback(handleClick, [])
    // useMemo and useCallback are used to memoize the value of Person and the function handleClick respectively.


    //every time the parent re-renders, the child will re-render too, even if the props are the same.

    console.log('Parent4 Rendered')
  return (
    <div>
        <button onClick={()=> setCount(c => c+1)}>Count - {count} </button>
        <button onClick={()=> SetName('CPT BuzzKill')}>Change Name</button>

        <MemoizedChild5 name ={name} Person={MemoizedPerson}/>
        <MemoizedChild5 name ={name} handleClick={MemoizedHandleClick}/>

{/* <MemoizedChild3 name ={name}><strong>MemoizedChild3</strong></MemoizedChild3> */}
    </div>
  )
}
