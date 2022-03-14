import React from 'react'
import Button from './Button'
import VegetableItem from './VegetableItem'

function Vegetables() {
    let vegetables = [
        {
            name: "Tomato",
            quantiy: 12,
            color:'red'
        },
        {
            name: "Ladyfinger",
            quantiy: 6,
            color:'green'
        },
        {
            name: "Brinjal",
            quantiy: 3,
            color:"purple"
        },
        {
            name: "Pumpkin",
            quantiy: 8,
            color:'orange'
        },
        {
            name: "Onion",
            quantiy: 5,
            color:'pink'
            
        },
        {
            name: "Carrot",
            quantiy: 7,
            color:'red'

        }
    ]

    
   
  return (
      <div>
          <h1>Vegetables</h1>
          {
              vegetables?.map((item) => <VegetableItem name={item.name} qt={item.quantiy} color={ item.color}/>)
          }
               </div>
        
  )
}

export default Vegetables