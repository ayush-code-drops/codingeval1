import React from 'react'
import Button from './Button'

function VegetableItem({qt,name,color}) {
    const [qty,setQty]=React.useState(qt)
  return (
      <div style={{
          border: '1px solid black',
          width: '200px',
          margin: 'auto',
         marginTop:'12px',
          boxShadow:'5px 5px 2px'
          
      }}>
          
          <h4 style={{color:color}}>{name} - {qty}kgs</h4>
          <Button title="+" onClick={()=>setQty(qty+1)}/>
                          <Button title="-" onClick={()=>qty===0?setQty(qty):setQty(qty-1)}/>
      </div>
  )
}

export default VegetableItem