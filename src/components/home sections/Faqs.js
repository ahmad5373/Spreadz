import { useEffect, useState } from "react";
import arrowDown from "../../assets/arrow-down.svg";
import Container from "../../customComponents/Container.";
import { getallFaqs } from "../../apiUtils/FaqsApi";
import { useTranslation } from "react-i18next"; // Add this import

const Faqs = () => {
    const { t } = useTranslation();
    const [faqs, setFaqs] = useState([]);

    const fetchFaqs = async () => {
        try {
            const faqsData = await getallFaqs();
            console.log(" faqsData?.data?.data ..>>", faqsData?.data?.data)
            const translatedFaqs = faqsData?.data?.data.map(faq => ({
                question: t(faq.question, faq.question), // Translate or fallback to original
                answer: t(faq.answer, faq.answer) // Translate or fallback to original
            }));
            setFaqs(translatedFaqs);
        } catch (error) {
            console.log("error =>", error);
        }
    };

    useEffect(() => {
        fetchFaqs();
    }, [t]); // Refetch FAQs when language changes

    return (
        <div className="pt-12 bg-gray-100">
            <Container className='px-4 lg:px-10 xl1:px-20'>
                <div className="lg:hidden flex flex-col justify-center items-center text-center space-y-4">
                    <div className="base-font-heading text-base">
                        {t("FrequentlyAskedQuestionsTitle")}
                    </div>
                    <div className="base-font text-xs">
                        {t("FrequentlyAskedQuestion")} 
                    </div>
                </div>
                {faqs.map((faq, id) => (
                    <div key={id} className="my-4 px-2 border-2 border-orange-200 shadow-md rounded-md bg-white ">
                        <div className="grid divide-y divide-neutral-200">
                            <details className="group py-5">
                                <summary className="flex justify-between font-medium cursor-pointer list-none">
                                    <span className="base-font-heading text-xl ">
                                        {faq.question} 
                                    </span>
                                    <span className="transition-transform group-open:rotate-180">
                                        <img src={arrowDown} alt="arrow down"></img>
                                    </span>
                                </summary>
                                <p className="base-font text-sm mt-3 group-open:animate-fadeIn">
                                    {faq.answer}
                                </p>
                            </details>
                        </div>
                    </div>
                ))}
            </Container>
        </div>
    )
}

export default Faqs