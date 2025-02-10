import academy from "../../assets/Academic.svg";
import tutorial from "../../assets/Tutorial.svg";
import blogs from "../../assets/Blog.svg";
import Button from "../button/Button";
import Container from "../../customComponents/Container.";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import englishTutorialsPdfFile from '../../assets/EN_Spreadz_GuideK.pdf' 
import germanTutorialsPdfFile from '../../assets/DE_Spreadz_Guide_K.pdf' 
import i18next from "i18next";
import { toast } from "react-toastify";
import { addRequestGuide } from "../../apiUtils/UserApi";
import { useState } from "react";
const Academic = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const resetForm = () => { setEmail('')};

    const ReserveSeat = () => {
        console.log("Seat is reserving......");
    }
    
    const handleDownloadPdf = async () => {
        // e.preventDefault();
        if(!email) {
            return toast.error(t("Error_FormValidation"));
        }
        setLoading(true)
        const userData = {email: email};
        try {
            await addRequestGuide(userData);
            const link = document.createElement('a');
            link.href = i18next.language === 'de' ? germanTutorialsPdfFile : englishTutorialsPdfFile;
            link.download = 'SpreadzTutorials.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            resetForm();
            setShowModal(false);
            // toast.success(contact?.data?.message || t("Success_MessageSent"));
        } catch (err) {
            toast.error(err?.message || t("Error_General"));
        } finally {
            setLoading(false);
        }
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
                                onClick={() => setShowModal(true)}
                                label={loading ? 'Processing...' :t('Tutorial_Button')}
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
              {/* Email Input Modal */}
              {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center lg:w-1/4 md:1/2 w-full mx-12">
                        <h2 className="text-xl font-bold mb-4">{t("Enter Your Email")}</h2>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-2 border border-gray-300 rounded-md w-full mb-4 text-center"
                        />
                        <div className="flex justify-between gap-4">
                            <Button
                                className="w-1/2 py-2 bg-gray-300 text-black rounded-lg"
                                onClick={() => setShowModal(false)}
                                label={t("Cancel")}
                            />
                            <Button
                                className="w-1/2 py-2 bg-orange-150 text-white rounded-lg"
                                onClick={handleDownloadPdf}
                                label={loading ? t("Processing") : t("Download")}
                                disabled={loading}
                            />
                        </div>
                    </div>
                </div>
            )}

        </section>
    )
}
export default Academic