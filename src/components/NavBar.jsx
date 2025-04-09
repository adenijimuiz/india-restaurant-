import React, { useState } from 'react';
import {Link} from 'react-router-dom' 
import logo from '../assets/logo.png';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/navbar.css'

export default function NavBar() {
  const [openLinks, setOpenLisks] = useState(false);

  const handleToggleChange = () => {
    setOpenLisks(!openLinks)
  }
  return (
    <div className='navbar'>
      <div className="leftSide" id={openLinks ? 'open' : 'close'}>
        <img src={logo} alt="logo" />
        <div className="hiddenLinks">
          <Link to = '/'>Home</Link>
          <Link to = '/menu'>Menu</Link>
          <Link to = '/about'>About</Link>
          <Link to = '/contact'>Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to = '/'>Home</Link>
        <Link to = '/menu'>Menu</Link>
        <Link to = '/about'>About</Link>
        <Link to = '/contact'>Contact</Link>
        <button onClick={handleToggleChange}><ReorderIcon /></button>
      </div>
    </div>
  )
}
