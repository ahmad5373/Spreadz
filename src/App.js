import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Price from './components/Pricing';
import NotFound from './components/NotFound';
import OurStory from './components/OurStory';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blog';
import BlogDetails from './components/BlogDetails';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const App = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" exact element={<Layout />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/our-story" exact element={<OurStory />} />
          <Route path="/pricing" exact element={<Price />} />
          <Route path="/blogs" exact element={<Blogs />} />
          <Route path="/blogs/blog-details" exact element={<BlogDetails />} />
          <Route path="/contact-us" exact element={<ContactUs />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <Footer />
    </div>
  );
};

export default App;
