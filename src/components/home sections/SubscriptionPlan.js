import { useState } from "react";
import Button from "../button/Button";
import group from "../../assets/Group.svg";
import PlusIcon from "../../assets/tabler_plus.svg";
import TickIcon from "../../assets/TickIcon.svg";
import Container from "../../customComponents/Container.";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { ClipLoader } from 'react-spinners';
const stripePromise = loadStripe("pk_test_51QP5XOAMrpg8m0TRpXQwt1jClRiin4Jyt7bHTQGz1qvMMjGNiOUSfAl6vJBc509ilciTrwbEGCX5H9eXeTYFNGsO008sjMXVrp");

const SubscriptionPlans = () => {
    const [loading, setLoading] = useState(null);
    const [billingCycles, setBillingCycles] = useState(new Array(3).fill("monthly"));

    const SelectPlan = async (planTitle, billingCycle, index) => {
        setLoading(index);
        try {
            const response = await axios.post("http://localhost:8080/subscriptions/create-checkout-session", {
                planTitle,
                billingCycle,
            });
            const { url } = response.data;
            console.log("url =>", url);
            if (url) {
                window.location.href = url; // Redirect to the Stripe Checkout page
            }
        } catch (error) {
            console.error("Error creating checkout session:", error);
            alert("Something went wrong please try again.")
        } finally {
            setLoading(null);
        }
    };

    const toggleBilling = (index) => {
        setBillingCycles((prev) =>
            prev.map((cycle, i) => (i === index ? (cycle === "monthly" ? "yearly" : "monthly") : cycle))
        );
    };

    const plans = [
        {
            title: "Basic",
            monthlyPrice: "CHF 69.0",
            yearlyPrice: "CHF 690",
            description: "Ideal for individuals who need quick access to basic features.",
            features: [
                "Can be cancelled at any time on a monthly basis",
                "1 live action",
                "Live tracking",
                "Collect up to 5000 leads per year",
                "1 Link Google Business Account",
                "Telephone support",
                "With Spreadz branding",
                "Create teams to collaborate on designs",
            ],
            buttonColor: "bg-orange-150 text-white hover:bg-orange-400",
            textColor: "text-gray-800",
            backgroundColor: "bg-gray-100",
        },
        {
            title: "Pro",
            monthlyPrice: "CHF 99.0",
            yearlyPrice: "CHF 990",
            recommended: true,
            description: "Ideal for individuals who need quick access to basic features.",

            features: [
                "Can be cancelled at any time on a monthly basis",
                "+3 live promotions",
                "+3 live trackings",
                "+Collect up to 10,000 leads per year",
                "1 Link Google Business Account",
                "Video Upload Feature",
                "Telephone support  + Video Call Support + Without Spreadz branding +  Color Scheme Customization",
            ],
            buttonColor: "bg-white text-orange-500 hover:bg-white",
            textColor: "text-white",
            backgroundColor: "bg-orange-150",
        },
        {
            title: "Excellence",
            monthlyPrice: "CHF 169.0",
            yearlyPrice: "CHF 1690",
            description: "Ideal for individuals who need quick access to basic features.",
            features: [
                "Can be cancelled at any time on a monthly basis",
                "+10 live promotions",
                "+10 live trackings",
                "+Collect unlimited leads",
                "1 Link Google Business Account",
                "Video Upload Feature",
                "Telephone support  +Video Call Support + Without Spreadz branding +  Color Scheme Customization",
            ],
            buttonColor: "bg-orange-150 text-white over:bg-orange-400",
            textColor: "text-gray-800",
            backgroundColor: "bg-gray-100",
        },
    ];

    const proFeatures = [
        "+3 live promotions",
        "+3 live trackings",
        "+Collect up to 10,000 leads per year"
    ];

    const excellenceFeatures = [
        "+10 live promotions",
        "+10 live trackings",
        "+Collect unlimited leads"
    ];


    return (
        <div className="bg-gray-100 lg:bg-white mt-4">
            <div className="text-center my-8">
                <h1 className="base-font-heading text-2xl lg:text-[40px] leading-[58.4px]">Subscriptions and Prices</h1>
                <p className="base-font text-md lg:text-2xl mt-2">Choose a plan that's right for you</p>
            </div>

            <Container className="px-4 lg:px-10 xl1:px-20">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 xl1:gap-20 lg:gap-8 py-6">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`lg:relative  lg:w-[362.67px] px-4 py-8 
                        rounded-lg shadow-lg hover:shadow-xl transition-shadow
                        ${plan.backgroundColor} ${plan.textColor} 
                        ${plan.title === "Pro" ? "lg:h-auto" : "lg:h-auto"}`}
                        >
                            {plan.title === "Pro" && (
                                <div className="hidden lg:block absolute custom-bottom-lg custom-bottom-xl1 right-[-44px]">
                                    <img
                                        src={group}
                                        alt="Pro Icon"
                                        className="w-16 h-16"
                                    />
                                </div>
                            )}
                            <div className="flex justify-between">
                                <h2 className="base-font-heading xl1:text-3xl lg:text-xl leading-[41.3px] mb-4">
                                    {plan.title}
                                </h2>
                                <div className="flex justify-center items-center space-x-4 mb-4">
                                    <span className="base-font-heading text-sm">Yearly</span>
                                    <div
                                        className={`w-8 h-4 rounded-full cursor-pointer relative transition-colors duration-300 
                           ${plan.title === "Pro" ? "bg-white" : "bg-gray-200"}`}
                                        onClick={() => toggleBilling(index)}
                                    >
                                        <div
                                            className={`absolute top-0.7 left-0.4 w-4 h-4 bg-gray-300 rounded-full shadow-md transition-all duration-300 
                          ${billingCycles[index] === "yearly" ? "translate-x-5" : "translate-x-0.6"}`}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            <h2
                                className={`base-font xl1:text-base lg:text-sm leading-7 mb-4 
                         ${plan.title === "Pro" ? "text-white" : "text-gray-150"}`}
                            >
                                {plan.description}
                            </h2>

                            <div className="flex items-center gap-2 mb-4">
                                <div className="base-font-heading xl1:text-[40px] lg:text-4xl text-3xl">
                                    {billingCycles[index] === "yearly" ? plan.yearlyPrice : plan.monthlyPrice}
                                </div>
                                <span className={`base-font text-base ${plan.title === "Pro" ? "text-white" : "text-gray-150"}`}>
                                    /{billingCycles[index]}
                                </span>
                            </div>

                            {plan.recommended && (
                                <div className="base-font text-xl underline px-2 py-1 rounded">
                                    Recommended
                                </div>
                            )}

                            <ul className="space-y-2 base-font text-base leading-7 mb-6">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center space-x-4">
                                        <div
                                            className={`p-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 
                  ${plan.title === "Pro" ? "bg-white" : "bg-orange-250"}`}
                                        >
                                            {(proFeatures.includes(feature) || excellenceFeatures.includes(feature)) ? (
                                                <img src={PlusIcon} alt="Plus Icon" className="h-4 w-4" />
                                            ) : (
                                                <img src={TickIcon} alt="Tick Icon" className="h-4 w-4" />
                                            )}
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                className={`w-full py-2 base-font-heading text-base rounded-lg ${plan.buttonColor}`}
                                onClick={() => !loading && SelectPlan(plan.title, billingCycles[index], index)}
                                disabled={loading}
                                aria-live="polite"
                                label={
                                    loading === index ? (
                                        <ClipLoader
                                            loading={loading === index}
                                            size={30}
                                            aria-label="Loading Spinner"
                                            color={index === 1 ? "orange" : "white"}
                                        />
                                    ) : (
                                        "Select"
                                    )
                                }
                            />
                        </div>
                    ))}
                </div>
            </Container>

        </div>
    );
};

export default SubscriptionPlans;
