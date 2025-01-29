import mobile from "../../assets/mobile.png";
import kathy from "../../assets/Kathy.svg";
import samson from "../../assets/Simson.svg";
import Button from "../button/Button";
import doubleArrow from "../../assets/doubleArrow.png";
import Container from "../../customComponents/Container.";
import { useTranslation } from "react-i18next";


const Hero = () => {
    const {t} = useTranslation();
    const StartTrail = () => {
        console.log("free trail started....");
    }
    return (
        <>
            <section className="py-8 md:py-12 lg:py-16 bg-gray-100 ">
                <Container className='px-4 lg:px-10 xl1:px-20'>
                    <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:gap-16 pt-16 ">

                        <div className="lg:m-0 mt-8 lg:text-left lg:w-[694px]">
                            <h1 className="base-font-heading md:text-[40px] md:leading-[58.4px] text-2xl leading-none  text-gray-900 ">
                                {t('Recommended')} <span className="text-orange-500">{t('Leads')}</span>
                            </h1>
                            <div className="hidden lg:block w-24 h-24"></div>
                            <p className="text-gray-450 text-base base-font  leading-[33px] lg:text-2xl">
                               {t('SpreadzAllow')}
                                <p>{t('CollectRefferal')}</p>
                            </p>
                            <Button
                                className="base-font-heading bg-orange-150 text-xl text-white mt-6 px-11 py-2.5 rounded-lg transition duration-300 md:w-auto"
                                onClick={StartTrail}
                                label={t('Trial')}
                            >
                            </Button>
                        </div>

                        <div className="relative flex  justify-center lg:justify-start lg-flex-center items-center lg:w-96 lg:shrink-0">
                            <img
                                src={mobile}
                                alt="Phone showing testimonials"
                                className="md:w-64  w-48"
                            />

                            <div className="absolute bg-orange-150 top-[5.3rem] right-44  max-[375px]:right-24 text-white lg:px-3 px-2 py-2 text-xs md:w-[17rem] w-48 md:top-[7.4rem] md:right-96 md:text-sm shadow-md lg:text-base hero-card-top  lg:top-[7.5rem] lg:right-64" style={{ borderRadius: '25px 25px 0 25px' }}>
                                <div className="flex items-center space-x-3 mb-2">
                                    <img src={samson} alt="Samson" className=" md:w-8 w-6"></img>
                                    <span className="base-font-heading md:text-sm text-[9.968px]" >{t('Thomas')}</span>
                                </div>
                                <p className="base-font md:text-xs text-[8.544px] md:leading-[17px] leading-3">
                                    {t('Quote')}
                                </p>
                            </div>

                            <div className="absolute  right-0 bg-orange-150 text-white lg:px-3 px-2 py-2 md:right-32  text-xs md:text-sm shadow-md   md:w-[17rem] w-48  lg:text-base hero-card-bottom md:bottom-[6.6rem] bottom-[4.8rem] lg:right-0" style={{ borderRadius: '25px 25px 25px 0' }}>

                                <div className="flex items-center space-x-3 mb-2">
                                    <img src={kathy} alt="Kathy" className="md:w-8 w-6"></img>
                                    <span className="base-font-heading md:text-sm text-[9.968px]  ">{t('Kathy')}</span>
                                </div>
                                <p className="base-font md:text-xs text-[8.544px] md:leading-[17px] leading-3">
                                {t('Quote')}
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="pb-6 bg-gray-100">
                <Container className='px-4 lg:px-10 xl1:px-20'>
                    <div className="xl1:text-left">
                        <h2 className="flex justify-center base-font-heading text-[40px] leading-[58.4px] mb-4">
                        {t('WhatIs')} <span className="text-orange-150 ml-2">Spreadz?</span>
                        </h2>
                        <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center">
                            <p className="mt-8 text-gray-450 w-full lg:w-[700px] lg:mx-0 text-base base-font  leading-[33px] lg:text-2xl">
                            {t('MarketingSolution')}
                            </p>
                            <div><img src={doubleArrow} alt="Double arrow" className="w-80 h-64"></img></div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Hero