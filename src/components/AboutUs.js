import { useTranslation } from "react-i18next";
import Mobile from "../assets/mobile1st.png";
import quotes1 from "../assets/blackQuote1.svg";
import quotes2 from "../assets/blackQuote2.svg";
import Mobile2 from "../assets/mobile2.png";
import Mobile3 from "../assets/Mobile3.png";
import Mobile4 from "../assets/Mobile4.png";
import Container from "../customComponents/Container.";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col pt-12 w-full">
      <div className="h-16 bg-gray-100"></div>
      <div className="bg-orange-150">
        <Container className='px-4 lg:px-10 xl1:px-20'>

          <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
            <div className="flex flex-col justify-center">
              <img src={quotes1} alt={t("Alt_Quotes")} className="h-12 w-12" />
              <h2 className="base-font-heading text-3xl md:text-5xl lg:leading-[70px] digital-form-custom lg:w-[684px] text-black">
                {t("AboutUs_MainTitle")}
              </h2>
              <img src={quotes2} alt={t("Alt_Quotes")} className="h-12  ml-[200px]" />
            </div>
            <div className="relative mt-24 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="325px" height="310.941px" viewBox="0 0 325 312" fill="none" >
                <path d="M323.578 140.388C329.507 172.352 316.094 204.971 298.147 232.039C282.325 255.902 255.281 267.161 230.298 281.076C206.297 294.444 183.228 309.666 155.817 311.313C125.188 313.152 94.4815 306.967 68.367 290.8C38.8002 272.497 4.45367 249.627 0.301988 215.04C-3.83746 180.555 35.7287 157.923 48.5441 125.661C61.85 92.164 49.5413 48.0018 76.2448 23.8567C103.685 -0.95439 146.407 -2.89383 182.642 4.41074C216.774 11.2915 241.56 38.033 266.65 62.2404C290.414 85.1685 317.549 107.882 323.578 140.388Z" fill="white" />
              </svg>
              <img src={Mobile} alt={t("Alt_MobileScreen")} className="absolute inset-6 w-[211px]  h-[418px] bottom-28 m-auto" />
            </div>
          </div>
        </Container>
      </div>
      <div className="flex pt-20 bg-gray-100 flex-col space-y-8 ">
        <Container className='px-4 lg:px-10 xl1:px-20'>

          <div className="flex flex-col lg:flex-row justify-between items-center space-x-4">
            <div className="relative mt-24">
              <svg xmlns="http://www.w3.org/2000/svg" width="309" height="333" viewBox="0 0 326 312" fill="none">
                <path d="M324.49 140.388C330.431 172.352 316.991 204.971 299.009 232.039C283.156 255.902 256.06 267.161 231.027 281.076C206.979 294.444 183.865 309.666 156.4 311.313C125.71 313.152 94.9441 306.967 68.7784 290.8C39.1535 272.497 4.7396 249.627 0.57977 215.04C-3.56779 180.555 36.0761 157.923 48.9166 125.661C62.2486 92.164 49.9157 48.0018 76.6716 23.8567C104.165 -0.954395 146.971 -2.89383 183.277 4.41074C217.476 11.2915 242.311 38.033 267.45 62.2404C291.261 85.1685 318.449 107.882 324.49 140.388Z" fill="#F49217" />
              </svg>
              <img src={Mobile2} alt={t("Alt_MobileScreen")} className="absolute inset-6 w-[196px]  h-[407px] bottom-36 m-auto" />
            </div>
            <div className="xl1:w-[878px] base-font text-2xl leading-[39px]">
              <p>{t("AboutUs_Para1")}</p>
              <p>{t("AboutUs_Para2")}</p>
            </div>
          </div>

          <div className="base-font text-2xl leading-[39px] mt-4 pb-8">
            <p>{t("AboutUs_Para3")}</p>
            <p>{t("AboutUs_Para4")}</p>
          </div>

          <hr className="h-0.5 w-full" />

          <div className="flex custom-col flex-row space-x-6 justify-center items-center py-8">
            <div className="flex flex-col  space-y-6">
              <h1 className="base-font text-3xl leading-[41.3px] text-orange-150">
                {t("AboutUs_Subtitle1")}
              </h1>
              <p className="lg:w-[878px] base-font text-2xl leading-[39px]">
                {t("AboutUs_Para5")}
              </p>
              <p className="lg:w-[878px] base-font text-2xl leading-[39px]">
                {t("AboutUs_Para6")}
              </p>
            </div>
            <div className="relative mt-28">
              <svg xmlns="http://www.w3.org/2000/svg" width="309" height="334" viewBox="0 0 309 334" fill="none">
                <path d="M123.343 333.265C90.9311 330.73 62.9017 309.306 41.4103 284.931C22.4634 263.442 18.6015 234.354 11.6394 206.573C4.95109 179.884 -3.77045 153.618 1.74784 126.663C7.91418 96.5434 21.8515 68.4263 44.2392 47.3362C69.5865 23.4581 100.585 -3.86387 135.069 1.06973C169.452 5.98879 181.053 50.1394 208.892 70.8925C237.797 92.4399 283.647 91.9573 300.044 124.051C316.894 157.029 307.688 198.878 291.236 232.057C275.738 263.31 243.48 280.377 213.591 298.394C185.282 315.46 156.305 335.842 123.343 333.265Z" fill="#F49217" />
              </svg>
              <img src={Mobile3} alt={t("Alt_MobileScreen")} className="absolute inset-0 w-[196px]  h-[407px] bottom-36 m-auto" />
            </div>
          </div>

          <h1 className="base-font text-3xl leading-[41.3px] text-orange-150">
            {t("AboutUs_Subtitle2")}
          </h1>
          <p className="base-font text-2xl leading-[39px]  mt-8">
            {t("AboutUs_Para7")}
          </p>

          <hr className="h-0.5 w-full mt-8" />

          <div className="flex custom-col flex-row justify-between items-center space-x-7 pt-8">
            <div className="relative mt-24">
              <svg xmlns="http://www.w3.org/2000/svg" width="309" height="334" viewBox="0 0 309 334" fill="none">
                <path d="M123.343 333.094C90.931 330.559 62.9017 309.135 41.4103 284.76C22.4633 263.271 18.6014 234.183 11.6394 206.402C4.95103 179.713 -3.77052 153.447 1.74778 126.492C7.91412 96.3724 21.8515 68.2552 44.2392 47.1652C69.5865 23.2871 100.585 -4.03489 135.069 0.898709C169.452 5.81777 181.053 49.9684 208.892 70.7215C237.797 92.2689 283.647 91.7862 300.044 123.88C316.894 156.858 307.688 198.707 291.236 231.886C275.738 263.139 243.48 280.206 213.591 298.223C185.282 315.289 156.305 335.671 123.343 333.094Z" fill="#F49217" />
              </svg>
              <img src={Mobile4} alt={t("Alt_MobileScreen")} className="absolute inset-0 w-[196px]  h-[407px] bottom-36 m-auto" />
            </div>
            <div className="flex flex-col  space-y-6 ">
              <h1 className="base-font text-3xl leading-[41.3px] text-orange-150">
                {t("AboutUs_Subtitle3")}
              </h1>
              <p className="lg:w-[850px] base-font text-2xl leading-[39px]">
                {t("AboutUs_Para8")}
              </p>
            </div>
          </div>
          <h1 className="base-font text-3xl leading-[41.3px] text-orange-150  mt-12">
            {t("AboutUs_Subtitle4")}
          </h1>
          <p className="base-font text-2xl leading-[39px]  mt-12">
            {t("AboutUs_Para9")}
          </p>
          <br />
          <p className="base-font text-2xl leading-[39px] pb-8">
            {t("AboutUs_Para10")}
          </p>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;