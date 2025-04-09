import React from 'react'

export const Child2 = () => {
    console.log('Child2 Render')
  return (
    <div>Child2 Componnent</div>
  )
}
export const MemoizedChild2 = React.memo(Child2) 