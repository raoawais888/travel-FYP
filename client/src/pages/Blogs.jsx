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


	const stripHtmlTags = (htmlString) => {
		const tempDiv = document.createElement('div');
		tempDiv.innerHTML = htmlString;
		return tempDiv.textContent || tempDiv.innerText || '';
	  };
	

  
  return (
    <MasterLyout>
       
       <Banner title="The Blog" image="url(images/blog_background.jpg)" />


       {/* blog content ................ */}

       <div class="blog">
		<div class="container">
			<div class="row">

				{/* <!-- Blog Content --> */}

				<div class="col-lg-12">
					
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
						
							<div class="blog_post_title"><a href="#">{agency.title}</a></div>
							<div class="blog_post_text">
								<p>{stripHtmlTags(agency.description)}</p>
							</div>
							
						</div>

                        ))}

						

					</div>
						
					
				</div>


                      
                 
         

			</div>
		</div>
	</div>
       {/* blog content ................ */}

    </MasterLyout>
    
  )
}

export default Blogs