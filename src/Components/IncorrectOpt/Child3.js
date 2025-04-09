import React from 'react'

export const Child3 = ({children,name}) => {
    console.log('Child3 Render')
  return (
    <div>
        {children} - {name}
    </div>
  )
}
export const MemoizedChild3 = React.memo(Child3) 