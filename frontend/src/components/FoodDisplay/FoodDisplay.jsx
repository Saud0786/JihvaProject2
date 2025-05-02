import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'

function FoodDisplay({category,searchQuery,setSearchQuery}) {
  const {food_list}=useContext(StoreContext)
  const filteredFoodList = food_list.filter(item =>
    (category === "All" || category === item.category) &&
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className='food-display' id='food-display'>
        <div className='header-section-food'>
      <h2>Top dishes near you</h2>
      
      {/* Search Input */}
      <input 
        type="text" 
        placeholder="Search for food..." 
        className="food-search-input" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
     </div>
     <div className="food-display-list">
        {filteredFoodList.length > 0 ? (
          filteredFoodList.map((item, index) => (
            <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          ))
        ) : (
          <p>No matching food items found.</p>
        )}
      </div>
    </div>
  )
}

export default FoodDisplay
