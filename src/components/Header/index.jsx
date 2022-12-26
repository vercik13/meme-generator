import React from 'react'
import logo from '../../assets/logo.png'
import './style.css'

const Header = () => {
  return (
   <header className='header'>
    <img className='header--img' src={logo} alt="Logo" />
    <h2 className='header--title'>Meme Generator</h2>
    <h3 className='header--project'>React Project 3</h3>
   </header>
  )
}

export default Header