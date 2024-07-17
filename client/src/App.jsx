import {  Routes , Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import About from "./pages/About"
import Offers from './pages/Offers'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './Admin/Pages/Dashboard'
import AddAgency from './Admin/Pages/Agency/AddAgency'
import Agency from './Admin/Pages/Agency/Agency'
import Users from './Admin/Pages/User/Users'
import AddUser from './Admin/Pages/User/AddUser'
import AddPackage from './Admin/Pages/Package/AddPackage'
import Packages from './Admin/Pages/Package/Packages'
import AdminOffers from './Admin/Pages/Offer/Offers'
import AddOffer from './Admin/Pages/Offer/AddOffer'
import AddBlog from './Admin/Pages/blog/AddBlog'
import AdminBlogs from './Admin/Pages/blog/Blogs'
import EditPackage from "./Admin/Pages/Package/EditPackage"
import EditAgency from './Admin/Pages/Agency/EditAgency'
import PackageDetails from './pages/PackageDetails'


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 
  return (
    <>
             
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/offers' element={<Offers />} />
                <Route path='/package-details/:packageId' element={<PackageDetails />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

              {/* admin dashboard rputes ....................... */}
                
                <Route path='/admin/dashboard' element={<Dashboard />} />
                <Route path='/admin/add-agency' element={<AddAgency />} />
                <Route path='/admin/agency' element={<Agency />} />
                <Route path="/admin/agencies/edit/:agencyId" element={<EditAgency />} />
                <Route path='/admin/users' element={<Users />} />
                <Route path='/admin/add-user' element={<AddUser />} />
                <Route path='/admin/add-package' element={<AddPackage />} />
                <Route path='/admin/packages' element={<Packages />} />
                <Route path="/admin/packages/edit/:packageId" element={<EditPackage />} />
                <Route path='/admin/add-offer' element={<AddOffer />} />
                <Route path='/admin/offers' element={<AdminOffers />} />
                <Route path='/admin/add-blog' element={<AddBlog />} />
                <Route path='/admin/blogs' element={<AdminBlogs />} />


              </Routes>
             
              <ToastContainer />
    </>
  )
}

export default App
