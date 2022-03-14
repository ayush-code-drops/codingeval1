import React from 'react'
import Button from './Button'

function WishList() {
    const [query, setQuery] = React.useState("")
    const[items,setItems]=React.useState([])
    const handleAdd = () => {
        if (items.length === 3) {
            return
        }
        let payload = {
            id:items.length+1,
            title: query,
        }  
        
        let updatedItems = [...items, payload];
        setItems(updatedItems)
    }

    
  return (
      <div>

          <h1>WishList</h1>
          {items.length>=3 && <div>You cannot add more than 3 items in Wishlist</div>}
         {items.length<3 && <input type="text"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
          placeholder="Add Something"/>}
         {items.length<3 && <Button title="Add" onClick={handleAdd} />}
          <br/>
          <hr />
          <ol>
              {
                  items?.map((item) => <li key={item.id}><em>{item.title}</em></li>)    
             } 
          </ol>
    </div>
  )
}

export default WishList