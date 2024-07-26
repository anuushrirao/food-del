import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinery expertise.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
              <img className={category===item.menu_name?"active":""}src={item.menu_image} alt=""></img>
              {/* Mapping Over an Array:
              Mapping in React usually refers to using the .map() function to iterate over 
              an array and render a list of elements based on that array. 
              The menuItems array contains the menu item names.
              In the JSX, {menuItems.map((item, index) => ( ... ))}
              maps over each item in the menuItems array and returns a <li> element for each one.
              The key attribute is used to give each element a unique identifier, 
              which helps React efficiently update the UI.*/}
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
