import { Link } from "react-router-dom";
import Logo from "../../../assets/image 2.png";
import FB from "../../../assets/fa_facebook-square.svg";
import Insta from "../../../assets/skill-icons_instagram.svg";
import Twitter from "../../../assets/ant-design_x-outlined.svg";
import LinkedIn from "../../../assets/skill-icons_linkedin.svg";
import Container from "../../../customComponents/Container.";

const Footer = () => {
  return (
    <footer className="bg-gray-100 lg:bg-white w-full lg:border-t border-gray-200 py-10">
      <Container className='px-4 lg:px-10 xl1:px-20'>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

          <div className="w-full lg:w-72 flex flex-col gap-6">
            <img src={Logo} alt="Logo" className="w-32" />
            <p className="text-base text-black base-font">
              Craft cold-pressed austin lo-fi pour-over occupy. Hella cliche diy tilde cleanse tonx microdosing cardigan. Before bicycle fit sus gluten-free artisan. Booth pickled vinegar big chips cronut hell. Umami ethical bread williamsburg coloring tofu farm-to-table pop-up.
            </p>
            <div className="flex items-center gap-5">
              <img src={FB} alt="Facebook" className="w-6 h-6" />
              <img src={Insta} alt="Instagram" className="w-6 h-6" />
              <img src={Twitter} alt="Twitter" className="w-6 h-6" />
              <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-wrap lg:flex-nowrap justify-between gap-12">
            <div className="flex flex-col w-56">
              <h3 className="text-base text-black base-font-heading mb-2">Quick Links</h3>
              <ul className="space-y-1 text-base text-black base-font">
                <li><Link to="/" className="text-base text-black base-font ">Home</Link></li>
                <li><Link to="/about-us" className="text-base text-black base-font">About Us</Link></li>
                <li><Link to="/contact-us" className="text-base text-black base-font">Contact Us</Link></li>
                <li><Link to="/blogs" className="text-base text-black base-font">Blogs</Link></li>
                <li><Link to="/tutorials" className="text-base text-black base-font">Tutorials</Link></li>
                <li><Link to="/resource-library" className="text-base text-black base-font">Resource Library</Link></li>
              </ul>
            </div>

            <div className="flex flex-col w-56">
              <h3 className="text-base text-black base-font-heading mb-4">Legals</h3>
              <ul className="space-y-2 text-base text-black base-font">
                <li><Link to="terms&Condition" className="text-base text-black base-font">Terms & Conditions</Link></li>
                <li><Link to="privacyPolicy" className="text-base text-black base-font">Privacy Policy</Link></li>
              </ul>
            </div>

            <div className="flex flex-col w-56">
              <h3 className="text-base text-black base-font-heading mb-4">Address</h3>
              <p className="text-base text-black base-font">
                86066 Haag Unions, Darehaven 34735-7080
              </p>
              <p className="text-base text-black base-font mt-4">1-473-834-3176 x74614</p>
            </div>
          </div>
        </div>
      </Container>
      <div className="text-center text-gray-600 md:block   hidden">
        <p>All rights reserved © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
