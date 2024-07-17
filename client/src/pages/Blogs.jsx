import React from "react"
import MasterLyout from "../MasterLyout"
import Banner from "../components/Shared/Banner"
import Sidebar from "../components/Blog/Sidebar"
import { useState , useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);
        const navigate = useNavigate();
	useEffect(() => {
	  const fetchBlogs = async () => {
		try {
		  const response = await axios.get('http://localhost:8000/admin/blogs');
		  if (response.data.success) {
			setBlogs(response.data.blogs);
			  console.log("date ::::::::::::" , response.data.blogs) 
		  } else {
			toast.error(response.data.error);
		  }
		} catch (error) {
		  console.error('Error fetching blogs:', error);
		  toast.error('Failed to fetch blogs');
		}
	  };
  
	  fetchBlogs();
	}, []);
  
  return (
    <MasterLyout>
       
       <Banner title="The Blog" image="url(images/blog_background.jpg)" />


       {/* blog content ................ */}

       <div class="blog">
		<div class="container">
			<div class="row">

				{/* <!-- Blog Content --> */}

				<div class="col-lg-8">
					
					<div class="blog_post_container">

						{/* <!-- Blog Post --> */}
						

						{blogs.map((agency, index) => (
                    
                   
						<div class="blog_post" key={agency._id}>
							<div class="blog_post_image">
								<img src={`http://localhost:8000/${agency.featureImage}`} alt="https://unsplash.com/@anniespratt" />
								<div class="blog_post_date d-flex flex-column align-items-center justify-content-center">
									<div class="blog_post_day">01</div>
									<div class="blog_post_month">Dec, 2017</div>
								</div>
							</div>
							<div class="blog_post_meta">
								<ul>
									<li class="blog_post_meta_item"><a href="">by Lore Papp</a></li>
									<li class="blog_post_meta_item"><a href="">Uncategorized</a></li>
									<li class="blog_post_meta_item"><a href="">3 Comments</a></li>
								</ul>
							</div>
							<div class="blog_post_title"><a href="#">{agency.title}</a></div>
							<div class="blog_post_text">
								<p>Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui nunc, non fermentum qua.</p>
							</div>
							<div class="blog_post_link"><a href="#">read more</a></div>
						</div>

                        ))}

						{/* <!-- Blog Post --> */}
						
						<div class="blog_post">
							<div class="blog_post_image">
								<img src="images/blog_2.jpg" alt="https://unsplash.com/@tschax" />
								<div class="blog_post_date d-flex flex-column align-items-center justify-content-center">
									<div class="blog_post_day">01</div>
									<div class="blog_post_month">Dec, 2017</div>
								</div>
							</div>
							<div class="blog_post_meta">
								<ul>
									<li class="blog_post_meta_item"><a href="">by Lore Papp</a></li>
									<li class="blog_post_meta_item"><a href="">Uncategorized</a></li>
									<li class="blog_post_meta_item"><a href="">3 Comments</a></li>
								</ul>
							</div>
							<div class="blog_post_title"><a href="#">Try these new dream destinations</a></div>
							<div class="blog_post_text">
								<p>Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui nunc, non fermentum qua.</p>
							</div>
							<div class="blog_post_link"><a href="#">read more</a></div>
						</div>

						{/* <!-- Blog Post --> */}
						
						<div class="blog_post">
							<div class="blog_post_image">
								<img src="images/blog_3.jpg" alt="https://unsplash.com/@stilclassics" />
								<div class="blog_post_date d-flex flex-column align-items-center justify-content-center">
									<div class="blog_post_day">01</div>
									<div class="blog_post_month">Dec, 2017</div>
								</div>
							</div>
							<div class="blog_post_meta">
								<ul>
									<li class="blog_post_meta_item"><a href="">by Lore Papp</a></li>
									<li class="blog_post_meta_item"><a href="">Uncategorized</a></li>
									<li class="blog_post_meta_item"><a href="">3 Comments</a></li>
								</ul>
							</div>
							<div class="blog_post_title"><a href="#">Try these new dream destinations</a></div>
							<div class="blog_post_text">
								<p>Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui nunc, non fermentum qua.</p>
							</div>
							<div class="blog_post_link"><a href="#">read more</a></div>
						</div>

					</div>
						
					<div class="blog_navigation">
						<ul>
							<li class="blog_dot active"><div></div>01.</li>
							<li class="blog_dot"><div></div>02.</li>
							<li class="blog_dot"><div></div>03.</li>
						</ul>
					</div>
				</div>


                      
                      {/* sidebar section ............................. */}

                      <Sidebar />
                      {/* sidebar section ............................. */}
				
         

			</div>
		</div>
	</div>
       {/* blog content ................ */}

    </MasterLyout>
    
  )
}

export default Blogs