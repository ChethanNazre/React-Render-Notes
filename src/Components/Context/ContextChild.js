import React, {useContext} from "react";
import {countContext} from "./ContextParent"


export const ChildA = () => {
    console.log('ChildA Rendered')
    return (
        <div>Child A
        <ChildB/>
        </div>

    )
}
export const MemoziedChildA = React.memo(ChildA)

export const ChildB = () => {

    console.log('ChildB Rendered')
    return (
        <div>Child B
        <ChildC/>
        </div>

    )
}
export const ChildC = () => {
    const count = useContext(countContext)
    console.log('ChildC Rendered')
    return (
        <div>Child C Count {count}</div>

    )
}   