import React from 'react'

const Banner = ({title , image}) => {
  return (
    <div class="home">
		<div class="home_background parallax-window" style={{backgroundImage: image , height:'450px'}} >
        </div>
		<div class="home_content">
			<div class="home_title">{title}</div>
		</div>
        
	</div>
  )
}

export default Banner