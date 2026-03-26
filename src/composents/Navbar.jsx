import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'


const Navbar = () => {
  return (
    <nav> 
        {/* gauche */}
        <img className='logo'  src={logo} alt="" srcset="" />

        {/* au milieu */}

        <div className="lien">
              <NavLink to="/">
                <p>Accueil</p>
              </NavLink>
              <NavLink to="/projets">
               <p>Projets</p>
              </NavLink>
              <NavLink to="/contact" >
               <p>Contact</p>
              </NavLink>
        </div>

        {/* droite */}
        <div className="about">About</div>

    </nav>
  )
}

export default Navbar
