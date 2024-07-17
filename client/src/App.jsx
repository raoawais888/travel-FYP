import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from "./pages/About";
import Offers from './pages/Offers';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './Admin/Pages/Dashboard';
import AddAgency from './Admin/Pages/Agency/AddAgency';
import Agency from './Admin/Pages/Agency/Agency';
import Users from './Admin/Pages/User/Users';
import AddUser from './Admin/Pages/User/AddUser';
import AddPackage from './Admin/Pages/Package/AddPackage';
import Packages from './Admin/Pages/Package/Packages';
import AdminOffers from './Admin/Pages/Offer/Offers';
import AddOffer from './Admin/Pages/Offer/AddOffer';
import AddBlog from './Admin/Pages/blog/AddBlog';
import AdminBlogs from './Admin/Pages/blog/Blogs';
import EditPackage from "./Admin/Pages/Package/EditPackage";
import EditAgency from './Admin/Pages/Agency/EditAgency';
import PackageDetails from './pages/PackageDetails';
import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute component

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

        {/* Admin dashboard routes */}
        <Route
          path='/admin/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/add-agency'
          element={
            <ProtectedRoute>
              <AddAgency />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/agency'
          element={
            <ProtectedRoute>
              <Agency />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/agencies/edit/:agencyId"
          element={
            <ProtectedRoute>
              <EditAgency />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/users'
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/add-user'
          element={
            <ProtectedRoute>
              <AddUser />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/add-package'
          element={
            <ProtectedRoute>
              <AddPackage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/packages'
          element={
            <ProtectedRoute>
              <Packages />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/packages/edit/:packageId"
          element={
            <ProtectedRoute>
              <EditPackage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/add-offer'
          element={
            <ProtectedRoute>
              <AddOffer />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/offers'
          element={
            <ProtectedRoute>
              <AdminOffers />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/add-blog'
          element={
            <ProtectedRoute>
              <AddBlog />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/blogs'
          element={
            <ProtectedRoute>
              <AdminBlogs />
            </ProtectedRoute>
          }
        />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
