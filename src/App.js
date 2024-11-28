import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Price from './components/Pricing';
import NotFound from './components/NotFound';
import OurStory from './components/OurStory';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blog';
import BlogDetails from './components/BlogDetails';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import SuccessPage from './components/SuccessPage';
import FailedPage from './components/FailedPage';
import Login from './components/auth/Login';
import Layout from './components/layout/RootLayout';
import Homepage from './components/HomePage';
import { AuthProvider } from './components/auth/AuthContext';
import Register from './components/auth/Register';


const App = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <AuthProvider>
        <Routes>
          <Route path="/" exact element={<Layout/>} >
          <Route index element={<Homepage/>} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/our-story" exact element={<OurStory />} />
          <Route path="/pricing" exact element={<Price />} />
          <Route path="/blogs" exact element={<Blogs />} />
          <Route path="/blogs/blog-details" exact element={<BlogDetails />} />
          <Route path="/contact-us" exact element={<ContactUs />} />
          <Route path="/success" exact element={<SuccessPage />} />
          <Route path="/cancel" exact element={<FailedPage />} />
          <Route path="*" element={<NotFound />} />

          </Route>
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
        </AuthProvider>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      </div>
    </div>
  );
};

export default App;
