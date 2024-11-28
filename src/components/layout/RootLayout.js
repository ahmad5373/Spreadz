import { Outlet } from 'react-router-dom';
import NavBar from './partials/NavBar';
import Footer from './partials/Footer';


const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet /> {/* Renders the nested route content */}
      <Footer />
    </>
  );
};

export default Layout;