import React from 'react'
let styles = {
    backgroundColor: 'black',
    color: 'white',
   fontSize:'12px',
    border: 'none',
    margin: '3px',
    borderRadius: '3px',
    padding:'5px'
    
    
}
function Button({title,onClick}) {
  return (
      <button style={styles} onClick={onClick}>{title}</button>
  )
}

export default Button