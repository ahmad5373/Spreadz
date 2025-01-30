import academy from "../../assets/Academic.svg";
import tutorial from "../../assets/Tutorial.svg";
import blogs from "../../assets/Blog.svg";
import Button from "../button/Button";
import Container from "../../customComponents/Container.";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Academic = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const ReserveSeat = () => {
        console.log("Seat is reserving......");
    }

    const exploreBlog = () => {
        navigate('/blogs')
    }

    return (
        <section className="bg-orange-150 ">
            <Container className="px-4 lg:px-10 xl1:px-20">
                <div className="lg:py-8">
                    <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
                        {/* Academy Card */}
                        <div className="flex flex-col items-center text-center gap-6 lg:w-72">
                            <img src={academy} alt={t('Alt_Academic')} className="h-24 w-20" />
                            <h2 className="base-font-heading text-3xl leading-[41.3px] text-white">
                                {t('Academic_Title')}
                            </h2>
                            <p className="base-font text-sm leading-7 text-white mb-7">
                                {t('Academic_Description')}
                            </p>
                            <Button
                                className="w-1/2 py-2 bg-white base-font-heading text-sm rounded-lg text-orange-150"
                                onClick={ReserveSeat}
                                label={t('Academic_Button')}
                            />
                        </div>

                        {/* Tutorials Card */}
                        <div className="flex flex-col items-center text-center gap-6 lg:w-60">
                            <img src={tutorial} alt={t('Alt_Tutorial')} className="h-24 w-20" />
                            <h2 className="base-font-heading text-3xl leading-[41.3px] text-white">
                                {t('Tutorial_Title')}
                            </h2>
                            <p className="base-font text-sm leading-7 text-white mb-10 mt-4">
                                {t('Tutorial_Description')}
                            </p>
                            <Button
                                className="w-1/2 lg:w-8/12 py-2 bg-white base-font-heading text-sm rounded-lg text-orange-150"
                                onClick={ReserveSeat}
                                label={t('Tutorial_Button')}
                            />
                        </div>

                        {/* Blogs Card */}
                        <div className="flex flex-col items-center text-center gap-6 lg:w-80">
                            <img src={blogs} alt={t('Alt_Blogs')} className="h-24 w-20" />
                            <h2 className="base-font-heading text-3xl leading-[41.3px] text-white">
                                {t('Blog_Title')}
                            </h2>
                            <p className="base-font text-sm leading-7 text-white">
                                {t('Blog_Description')}
                            </p>
                            <Button
                                className="w-1/2 py-2 bg-white base-font-heading text-sm rounded-lg text-orange-150"
                                onClick={exploreBlog}
                                label={t('Blog_Button')}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default Academic