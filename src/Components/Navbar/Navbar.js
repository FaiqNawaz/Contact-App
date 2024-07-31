import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <nav className = {`${styles.navbar} container`}>

        <div className='Logo'>

        <img src="/Images/ContactLogo.png" alt=" project logo" />
        
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>

        </ul>



    </nav>
     
  )
}

export default Navbar
