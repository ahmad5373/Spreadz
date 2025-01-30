import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../../../assets/image 2.png";
import FB from "../../../assets/fa_facebook-square.svg";
import Insta from "../../../assets/skill-icons_instagram.svg";
import Twitter from "../../../assets/ant-design_x-outlined.svg";
import LinkedIn from "../../../assets/skill-icons_linkedin.svg";
import Container from "../../../customComponents/Container.";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 lg:bg-white w-full lg:border-t border-gray-200 py-10">
      <Container className='px-4 lg:px-10 xl1:px-20'>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

          <div className="w-full lg:w-72 flex flex-col gap-6">
            <img src={Logo} alt={t("Alt_Logo")} className="w-32" />
            <p className="text-base text-black base-font">
              {t("Footer_Description")}
            </p>
            <div className="flex items-center gap-5">
              <img src={FB} alt={t("Alt_Facebook")} className="w-6 h-6" />
              <img src={Insta} alt={t("Alt_Instagram")} className="w-6 h-6" />
              <img src={Twitter} alt={t("Alt_Twitter")} className="w-6 h-6" />
              <img src={LinkedIn} alt={t("Alt_LinkedIn")} className="w-6 h-6" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-wrap lg:flex-nowrap justify-between gap-12">
            <div className="flex flex-col w-56">
              <h3 className="text-base text-black base-font-heading mb-2">
                {t("Footer_QuickLinks")}
              </h3>
              <ul className="space-y-1 text-base text-black base-font">
                <li><Link to="/" className="text-base text-black base-font">{t("Home")}</Link></li>
                <li><Link to="/about-us" className="text-base text-black base-font">{t("About_Us")}</Link></li>
                <li><Link to="/contact-us" className="text-base text-black base-font">{t("Contact_Us")}</Link></li>
                <li><Link to="/blogs" className="text-base text-black base-font">{t("Blogs")}</Link></li>
                <li><Link to="/tutorials" className="text-base text-black base-font">{t("Tutorials")}</Link></li>
                <li><Link to="/resource-library" className="text-base text-black base-font">{t("Resource_Library")}</Link></li>
              </ul>
            </div>

            <div className="flex flex-col w-56">
              <h3 className="text-base text-black base-font-heading mb-4">
                {t("Footer_Legals")}
              </h3>
              <ul className="space-y-2 text-base text-black base-font">
                <li><Link to="terms&Condition" className="text-base text-black base-font">{t("Terms_Conditions")}</Link></li>
                <li><Link to="privacyPolicy" className="text-base text-black base-font">{t("Privacy_Policy")}</Link></li>
              </ul>
            </div>

            <div className="flex flex-col w-56">
              <h3 className="text-base text-black base-font-heading mb-4">
                {t("Footer_Address")}
              </h3>
              <p className="text-base text-black base-font">
                {t("Footer_AddressText")}
              </p>
              <p className="text-base text-black base-font mt-4">
                {t("Footer_Phone")}
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className="text-center text-gray-600 md:block hidden">
        <p>{t("Footer_Copyright", { year: 2024 })}</p>
      </div>
    </footer>
  );
};

export default Footer;