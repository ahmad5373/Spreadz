import firstMan from "../../assets/firstMan.svg";
import secondMan from "../../assets/secondMan.svg";
import girl from "../../assets/girlProfile.svg";
import star from "../../assets/Star.svg";
import Container from "../../customComponents/Container.";
import { useTranslation } from "react-i18next";


const Testimonial = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-gray-100 lg:bg-white">
            <Container className='px-4 lg:px-10 xl1:px-20'>

                <div className="pt-12 ">
                    <h2 className="text-center base-font-heading text-2xl lg:text-[40px] leading-[58.4px] text-gray-900 lg:pb-16">
                        {t('WhatClientSay')}
                    </h2>
                    <div className="mt-8 flex custom-col flex-row  lg:gap-6 justify-between  gap- mb-8">
                        <div className="rounded-lg ">
                            <div className="flex flex-col items-center">
                                <div className="flex flex-col text-center text-gray-700 lg:w-[352px]">
                                    <p className="lg:mb-6 mb-0 text-base base-font  leading-[33px] lg:text-2xl">
                                        {t('Testimonial1_Text1')}
                                    </p>
                                    <p className="mb-6 text-base base-font  leading-[33px] lg:text-2xl">
                                        {t('Testimonial1_Text2')}
                                    </p>
                                </div>
                                <div className="py-6 flex flex-col items-center">
                                    <img
                                        alt="Second "
                                        src={secondMan}
                                        className="w-14 h-14 rounded-full object-cover pb-2"
                                    />
                                    <h6 className="base-font-heading text-sm">{t('Testimonial1_Name')}</h6>
                                    <p className="base-font">{t('Testimonial1_Role')}</p>
                                </div>
                                <div className="flex justify-center gap-0.5 text-orange-500 space-x-2">
                                    {[...Array(5)].map((_, i) => (
                                        <img key={i} src={star} alt="Star" className="w-5 h-5" />
                                    ))}
                                </div>

                            </div>
                            <hr className="h-0.5 w-full mt-16"></hr>
                        </div>

                        <div className="rounded-lg">
                            <div className="flex flex-col items-center">
                                <div className="flex flex-col text-center text-gray-700 lg:w-[352px]">
                                    <p className="lg:mb-6 mb-0 text-base base-font  leading-[33px] lg:text-2xl">
                                        {t('Testimonial2_Text1')}
                                    </p>
                                    <p className="mb-6 text-base base-font  leading-[33px] lg:text-2xl">
                                        {t('Testimonial2_Text2')}
                                    </p>
                                </div>
                                <div className="py-6 flex flex-col items-center">
                                    <img
                                        alt="girl"
                                        src={girl}
                                        className="w-14 h-14 rounded-full object-cover pb-2"
                                    />
                                    <h6 className="base-font-heading text-sm">{t('Testimonial2_Name')}</h6>
                                    <p className="base-font">{t('Testimonial2_Role')}</p>
                                </div>

                                <div className="flex justify-center gap-0.5 text-orane-500 space-x-2">
                                    {[...Array(5)].map((_, i) => (
                                        <img key={i} src={star} alt={t('Alt_Star')} className="w-5 h-5" />
                                    ))}
                                </div>
                            </div>
                            <hr className="h-0.5 w-full mt-16"></hr>
                        </div>


                        <div className="rounded-lg">
                            <div className="flex flex-col items-center">
                                <div className="flex flex-col text-center text-gray-700 lg:w-[372px]">
                                    <p className="lg:mb-6 mb-0 text-base base-font leading-[33px] lg:text-2xl">
                                    {t('Testimonial3_Text1')}
                                    </p>
                                    <p className="mb-6 text-base base-font  leading-[33px] lg:text-2xl" >
                                    {t('Testimonial3_Text2')}
                                    </p>
                                </div>

                                <div className="py-6 flex flex-col items-center">
                                    <img
                                        alt="first man"
                                        src={firstMan}
                                        className="w-14 h-14 rounded-full object-cover pb-2"
                                    />
                                    <h6 className="base-font-heading text-sm">{t('Testimonial3_Name')}</h6>
                                    <p className="base-font">{t('Testimonial3_Role')}</p>
                                </div>

                                <div className="flex justify-center gap-0.5 text-orane-500 space-x-2">
                                    {[...Array(5)].map((_,i) =>(
                                        <img src={star} alt="Star" className="w-5 h-5" />
                                    ))}
                                </div>
                            </div>
                            <hr className="h-0.5 w-full mt-16"></hr>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default Testimonial