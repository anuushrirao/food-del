import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
              {console.log(category,item.category);}
              if(category==="All" || category===item.category){
                return <FoodItem  key={index} id={item._id} name = {item.name} description={item.description} price = {item.price} image={item.image}/>
              }
            })}
            {/*Conditional Rendering:

This is a technique in React where you conditionally render elements 
or components based on certain conditions. In your case, the condition 
is whether the category matches the item.category or if the category is "All".
The condition inside the if statement determines whether to render the FoodItem
component for each item in the food_list.

Array Mapping:
The map function is used to iterate over the food_list array. For each item in the
 array, it checks if the item should be rendered based on the current category. */} 
        </div>
    </div>
  )
}

export default FoodDisplay



