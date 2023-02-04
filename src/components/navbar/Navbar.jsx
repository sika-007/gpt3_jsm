import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import "./navbar.css"
import logo from "../../assets/logo.svg"


const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState(true)

  const Menu = () => {
    return (
      <>
        <p onClick={() => setToggleMenu(prevVal => !prevVal)}><a href="#home">Home</a></p>
        <p onClick={() => setToggleMenu(prevVal => !prevVal)}><a href="#wgpt3">What is GPT3?</a></p>
        <p onClick={() => setToggleMenu(prevVal => !prevVal)}><a href="#possibility">Open AI</a></p>
        <p onClick={() => setToggleMenu(prevVal => !prevVal)}><a href="#features">Case Studies</a></p>
        <p onClick={() => setToggleMenu(prevVal => !prevVal)}><a href="#blog">Library</a></p>
      </>
    )
  }

  return (
    <div className="gpt3__navbar">
      <div className='gpt3__navbar-links'>
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(prevVal => !prevVal)}/> : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(prevVal => !prevVal)}/>
          }
          
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <Menu />
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type="button">Sign up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavBar
