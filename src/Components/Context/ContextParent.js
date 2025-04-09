import React from "react";

import { MemoziedChildA } from "./ContextChild"

export const countContext = React.createContext()
 const CountProvider = countContext.Provider


export const ContextParent = ({children}) => {
    const [count, setCount] = React.useState(0)

    console.log('ContextParent Rendered')
    return (
        <div>
        <button onClick={() => setCount(c => c + 1)}>Count {count}</button>
        <CountProvider value={count}>
       {children}
        </CountProvider>
        </div>
        )
    }