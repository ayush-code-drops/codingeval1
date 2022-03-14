import React from 'react'
import Button from './Button'

function VegetableItem({qt,name,color}) {
    const [qty,setQty]=React.useState(qt)
  return (
      <div>
          
          <h4 style={{color:color}}>{name} - {qty}kgs</h4>
          <Button title="+" onClick={()=>setQty(qty+1)}/>
                          <Button title="-" onClick={()=>qty===0?setQty(qty):setQty(qty-1)}/>
      </div>
  )
}

export default VegetableItem