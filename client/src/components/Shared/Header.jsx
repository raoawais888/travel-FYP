import React from 'react'
import Topbar from "./Topbar"
import Navmenu from './Navmenu'
import Mobilemenu from './Mobilemenu'

const Header = () => {
  return (
       <>
       <header class="header">

      <Topbar />
      <Navmenu />


      </header>
      <Mobilemenu />
       </>
  )
}

export default Header