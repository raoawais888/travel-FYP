import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Topbar = () => {
        
    const navigate = useNavigate();
    const userCheck = localStorage.getItem("user")

    const logout= ()=>{

      localStorage.removeItem("user")
      localStorage.removeItem("token")
      navigate("/login")
    }

  return (
    <>
    
    <div class="top_bar">
    <div class="container">
        <div class="row">
            <div class="col d-flex flex-row">
                <div class="phone">+45 345 3324 56789</div>
                <div class="social">
                    <ul class="social_list">
                        <li class="social_list_item"><a href="#"><i class="fab fa-pinterest" aria-hidden="true"></i></a></li>
                        <li class="social_list_item"><a href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
                        <li class="social_list_item"><a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                        <li class="social_list_item"><a href="#"><i class="fab fa-dribbble" aria-hidden="true"></i></a></li>
                        <li class="social_list_item"><a href="#"><i class="fab fa-behance" aria-hidden="true"></i></a></li>
                        <li class="social_list_item"><a href="#"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                <div class="user_box ml-auto">
                    {userCheck ?  <div class="user_box_register user_box_link"><NavLink onClick={()=>{logout()}} >logout</NavLink></div>:       <div class="user_box_login user_box_link"><NavLink to="/login">login</NavLink></div>
                    }
               
                </div>
            </div>
        </div>
    </div>		
</div>
    </>
  )
}

export default Topbar