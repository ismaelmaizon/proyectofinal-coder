import React from 'react';
import css from '../Navbar/Navbar.css';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { BiDrink } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';
import styles from '../Navbar/app.module.css';
import { useState } from 'react';

const Navbar = () => {

  const [input, setInput] = useState("")

  return (
    <div className='container'>
      {/* logo */}
      <div className='title'>
        <Link className='title-1' to="/">
          <h1><BiDrink/> AberturasBodereau</h1>
        </Link>
        
      </div>
      
      <div className='right'>
        <ul className='menu-list'>
            <NavLink to='/Productos' className={({ isActive }) =>
              isActive ? styles.activeClassName : styles.noActiveClassName} >
              <li>Productos
                <li  className='menu-productos'>
                  <ul className='menu-nestig' >
                    <Link to="/Productos/sillas" className='links'>
                      <li className='menu_dentro'>sillas</li>
                    </Link>
                    <Link to="/Productos/puff" className='links'>
                      <li className='menu_dentro'>puff</li>
                    </Link>
                    <Link to="/Productos/alfombras" className='links'>
                      <li className='menu_dentro'>alfombras</li>
                    </Link>
                  </ul>
                </li>
                
              </li>
            </NavLink>
            <NavLink to='/Nosotros' className={({ isActive }) =>
              isActive ? styles.activeClassName : styles.noActiveClassName}  >
              <li>Nosotros</li>
            </NavLink>
            <NavLink to='/Contactos' className={({ isActive }) =>
              isActive ? styles.activeClassName : styles.noActiveClassName}  >
              <li>Contactos</li>
            </NavLink>
        </ul>
        <input type="text" placeholder='buscar' className='find' 
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setInput("")}
        value={input} />
        <button className='btn-shared' >buscar</button>
        <div className='carrito'>
          <BsFillCartPlusFill/>
        </div>
        <h2> {input} </h2>
      </div>
      
    </div>
  )
}

export default Navbar;
