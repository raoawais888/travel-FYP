import React from 'react'

const Intro = () => {
  return (
    <div className="intro">
		<div className="container">
			<div className="row">
				<div className="col-lg-7">
					<div className="intro_image"><img src="images/intro.png" alt="" /></div>
				</div>
				<div className="col-lg-5">
					<div className="intro_content">
						<div className="intro_title">we have the best tours</div>
						<p className="intro_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer elementum orci eu vehicula pretium. Donec bibendum tristique condimentum. Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui nunc, non fermentum quam placerat non. Etiam venenatis nibh augue, sed eleifend justo tristique eu</p>
						<div className="button intro_button"><div className="button_bcg"></div><a href="#">explore now<span></span><span></span><span></span></a></div>
					</div>
				</div>
			</div>
		</div>
	</div>

  )
}

export default Intro