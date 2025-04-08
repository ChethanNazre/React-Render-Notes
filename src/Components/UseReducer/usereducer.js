import React,{useReducer} from 'react'

    const initialState = {count: 0}
    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return {count: state.count + 1}
            case 'decrement':
                return {count: state.count - 1}
            case 'reset':
                return initialState
            default:
                return state
        }
    } 

 export const UseReducer = () => { 
    const [ state , dispatch] = useReducer(reducer, initialState)
    console.log('useReducer Render')
  return (
    <div>
        <>
        <div>{state.count}</div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
        </>
    </div>
    
  )
}
