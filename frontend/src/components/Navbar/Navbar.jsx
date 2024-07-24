import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets';

const Navbar = () => {

    const [menu,setMenu] = useState("home"); {/*setMenu is a function that allows you to update the value of menu.*/}

  return (
    <div className='navbar'>
      <img src={assets.logo} className='logo'></img>
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu ==="home"?"active":""}>home</li> {/* onclick on these buttons the active will change*/}
        <li onClick={()=>setMenu("menu")} className={menu ==="menu"?"active":""}>menu</li>
        {/*<li onClick={()=>setMenu("mobile app")} className={menu ==="mobile app"?"active":""}>mobile-app</li> */}
        <li onClick={()=>setMenu("contact us")} className={menu ==="contact us"?"active":""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt=""></img>
        <div className="navbar-search-icon">
            <img src={assets.basket_icon}></img>
            <div className="dot">
                
            </div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
