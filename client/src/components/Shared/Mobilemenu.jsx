import React from 'react'

const Mobilemenu = () => {
  return (
    <>
    
    <div className="menu trans_500">
		<div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
			<div className="menu_close_container"><div className="menu_close"></div></div>
			<div className="logo menu_logo"><a href="#"><img src="images/logo.png" alt="" /></a></div>
			<ul>
				<li className="menu_item"><a href="#">home</a></li>
				<li className="menu_item"><a href="about.html">about us</a></li>
				<li className="menu_item"><a href="offers.html">offers</a></li>
				<li className="menu_item"><a href="blog.html">news</a></li>
				<li className="menu_item"><a href="contact.html">contact</a></li>
			</ul>
		</div>
	</div>
    </>
  )
}

export default Mobilemenu