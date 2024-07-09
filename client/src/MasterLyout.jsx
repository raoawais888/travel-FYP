import React from 'react'
import Header from './components/Shared/Header'
import Footer from './components/Shared/Footer'
import CopyRights from './components/Shared/CopyRights'
import "./App.css"
const MasterLyout = ({children}) => {
  return (
    <>
     <div class="super_container">
      <Header />  

      {children}     

      <Footer/>
      <CopyRights />

     </div>
    </>
  )
}

export default MasterLyout