import { useTranslation } from "react-i18next";
import chrisStory from "../assets/ChrisStory.png";
import quotes1 from "../assets/quotes1.svg";
import quotes2 from "../assets/quotes2.svg";
import signature from "../assets/Signature.png";
import Container from "../customComponents/Container.";

const OurStory = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col pt-12 w-full">
      <div className="h-16 bg-gray-100"></div>
      <div className="bg-orange-150 ">
        <Container className='px-4 lg:px-10 xl1:px-20'>
          <div className="flex flex-col-reverse lg:flex-row justify-between">
            <div className="flex flex-col justify-center">
              <img src={quotes1} alt={t("Alt_Quotes")} className="h-12 w-12" />
              <h2 className="base-font lg:text-3xl text-lg lg:leading-10 lg:w-[900px] custom-w-our-story text-white">
                {t("OurStory_MainQuote")}
              </h2>
              <img src={quotes2} alt={t("Alt_Quotes")} className="h-12 xl1:ml-[26rem] lg:ml-[22rem] custom-our-story-quote md:-ml-64 -ml-20" />
              <h4 className="base-font text-xl mb-6 lg:mb-2 mt-8 text-white">
                {t("OurStory_Source")}
              </h4>
            </div>
            <div className="flex justify-center items-center">
              <img src={chrisStory} alt={t("Alt_ChrisPhoto")} className="h-[424px]" />
            </div>
          </div>
        </Container>
      </div>

      <div className="flex flex-col items-start space-y-8 pb-4 bg-gray-100">
        <Container className='px-4 lg:px-10 xl1:px-20'>
          <div className="flex flex-col max-w-[1280px]">
            <div className="pt-16 pb-6 base-font-heading lg:text-3xl">
              {t("OurStory_Title")}
            </div>
            <div className="base-font lg:text-2xl text-lg leading-10">
              <p>{t("OurStory_ChrisSection1")}</p>
              <p>{t("OurStory_ChrisSection2")}</p>
              <br />
              <p>{t("OurStory_ChrisSection3")}</p>
              <br />
              <p>{t("OurStory_ChrisSection4")}</p>
              <br />
              <p>{t("OurStory_ChrisSection5")}</p>
              <p>{t("OurStory_ChrisSection6")}</p>
              <br />
              <p>{t("OurStory_ChrisSection7")}</p>
              <p>{t("OurStory_ChrisSection8")}</p>
              <p>{t("OurStory_ChrisSection9")}</p>
            </div>
          </div>

          <div className="pt-8">
            <img src={signature} alt={t("Alt_Signature")} className="h-[121px]" />
            <p className="base-font-heading lg:text-3xl text-lg leading-10">Chris</p>
            <p className="base-font lg:text-xl text-lg leading-[31px]">
              {t("Founder")}
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OurStory;