import React, { useState } from 'react'
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {

  const [category,setCategory] = useState("All"); 


  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/> {/*props passed Props (short for properties) are a way to
       pass data from a parent component to a child component in React. In your code, Home is the parent component 
       and ExploreMenu is the child component. The Home component passes the category state and 
       the setCategory function as props to the ExploreMenu component.*/}
       <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
