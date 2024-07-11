
import React from 'react'

const headingText = {
  color:'Blue',
  fontSize:'24px',
  textAlign: 'center',
  fontWeight: '700',
}
export const HeaderTodo = () => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'yellow',
        height:'70px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <h1 style={headingText} > TO DO LIST</h1>
    </div>
  )
}
