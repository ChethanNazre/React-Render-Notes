import React from 'react'
 // Assuming Person is an object imported from a file

export const Child5 = ({name}) => {
    console.log('Child5')
  return (
    <div>
        Hello {name} - Child5
    </div>
  )
}

export const MemoizedChild5 = React.memo(Child5) // This will memoize the Child5 component, preventing unnecessary re-renders when the parent re-renders with the same props.`