import React, { useRef, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import './Navbar.css'
// import underline_menu from '../../assets/nav_underline.svg'
import AnchorLink  from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import PersonIcon from '@mui/icons-material/Person';
export const Navbar = () => {
const [menu,setmenu]=useState('home');
 const menuref=useRef();
 const openMenu= () =>{
  menuref.current.style.right="0";
 }
 const closeMenu= () =>{
  menuref.current.style.right="-350px";
 }
  return (
    <div className='navbar'>
        <AnchorLink className='anchor-link' href='#home' ><p onClick={() => { setmenu('home') }}><PersonIcon/></p></AnchorLink>
        <img src={menu_open } onClick={openMenu} alt="" className='nav-mob-open' />
        <ul ref={menuref} className="nav-menu">
          <img src={menu_close} alt="" className="nav-mob-close" onClick={closeMenu} />
  <li>
    <AnchorLink className='anchor-link' href='#home' ><p onClick={() => { setmenu('home') }}>Home</p></AnchorLink >
    
  </li>
  <li>
    <AnchorLink  className='anchor-link' offset={50} href='#about'><p onClick={() => { setmenu('about') }}>About me</p></AnchorLink >
   
  </li>
  <li>
    <AnchorLink  className='anchor-link' offset={50}  href='#services'><p onClick={() => { setmenu('services') }}>Services</p></AnchorLink >
   
  </li>
  <li>
   <AnchorLink  className='anchor-link' offset={50} href='#work' > <p onClick={() => { setmenu('work') }}>Portfolio</p></AnchorLink >
  </li>
  <li>
    <AnchorLink  className='anchor-link' offset={50} href='#contact'><p onClick={() => { setmenu('contact') }}>Contact</p></AnchorLink >
    {menu === 'contact' ? <img src={underline_menu} alt='' /> : null}
  </li>
</ul>

        <div className="nav-connect">
        <AnchorLink  className='anchor-link' offset={50} href='#contact'> Connect with me</AnchorLink ></div>
    </div>
  )
}
