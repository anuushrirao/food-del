import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets';
import {Link} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home"); {/*setMenu is a function that allows you to update the value of menu.*/}

    const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='navbar'>
      <img src={assets.logo} className='logo'></img>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu ==="home"?"active":""}>home</Link> {/* onclick on these buttons the active will change*/}
        <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu ==="menu"?"active":""}>menu</a>
        {/*<a href="app-download" onClick={()=>setMenu("mobile app")} className={menu ==="mobile app"?"active":""}>mobile-app</a> */}
        <a href="footer" onClick={()=>setMenu("contact us")} className={menu ==="contact us"?"active":""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt=""></img>
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon}></img></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}>
                
            </div>
        </div>
        <button onClick={()=>setShowLogin(true)}> Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
