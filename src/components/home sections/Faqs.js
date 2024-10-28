import arrowDown from "../../assets/arrow-down.svg";
import Container from "../../customComponents/Container.";

const Faqs = () => {

    return (
        <div class="pt-12  bg-gray-100">
                <Container className='px-4 lg:px-10 xl1:px-20'>
                <div className="lg:hidden flex flex-col justify-center items-center text-center space-y-4">
                    <div className="base-font-heading text-base">Frequently Asked Questions</div>
                    <div className="base-font text-xs">Frequently Asked Questions - Everything you need to know about Spreadz at a glance</div>
                </div>
                <div className="mt-4 px-2 border-2 border-orange-200 shadow-md rounded-md bg-white">
                    <div className="grid divide-y divide-neutral-200">
                        <details className="group py-5">
                            <summary className="flex justify-between  font-medium cursor-pointer list-none">
                                <span className="base-font-heading text-xl ">What is Spreadz?</span>
                                <span className="transition-transform group-open:rotate-180">
                                    <img src={arrowDown} alt="arrow down"></img>
                                </span>
                            </summary>
                            <p className="base-font text-sm mt-3 group-open:animate-fadeIn">
                                SAAS platform is a cloud-based software service that allows users to access
                                and use a variety of tools and functionality.
                            </p>
                        </details>
                    </div>
                </div>

                <div className="mt-4 px-2 border-2 border-orange-200 shadow-md rounded-md bg-white">
                    <div className="grid divide-y divide-neutral-200">
                        <details className="group py-5">
                            <summary className="flex justify-between  font-medium cursor-pointer list-none">
                                <span className="base-font-heading text-xl ">How does Spreadz Work?</span>
                                <span className="transition-transform group-open:rotate-180">
                                    <img src={arrowDown} alt="arrow down"></img>
                                </span>
                            </summary>
                            <p className="base-font text-sm mt-3 group-open:animate-fadeIn">
                                SAAS platform is a cloud-based software service that allows users to access
                                and use a variety of tools and functionality.
                            </p>
                        </details>
                    </div>
                </div>

                <div className="mt-4 px-2 border-2 border-orange-200 shadow-md rounded-md bg-white">
                    <div className="grid divide-y divide-neutral-200">
                        <details className="group py-5">
                            <summary className="flex justify-between font-medium cursor-pointer list-none">
                                <span className="base-font-heading text-xl ">What subscriptions does Spreadz offer?</span>
                                <span className="transition-transform group-open:rotate-180">
                                    <img src={arrowDown} alt="arrow down"></img>
                                </span>
                            </summary>
                            <p className="base-font text-sm mt-3 group-open:animate-fadeIn">
                                SAAS platform is a cloud-based software service that allows users to access
                                and use a variety of tools and functionality.
                            </p>
                        </details>
                    </div>
                </div>

                <div className="mt-4 px-2 border-2 border-orange-200 shadow-md rounded-md bg-white">
                    <div className="grid divide-y divide-neutral-200">
                        <details className="group py-5">
                            <summary className="flex justify-between  font-medium cursor-pointer list-none">
                                <span className="base-font-heading text-xl ">How can I create a referral campaign?</span>
                                <span className="transition-transform group-open:rotate-180">
                                    <img src={arrowDown} alt="arrow down"></img>
                                </span>
                            </summary>
                            <p className="base-font text-sm mt-3 group-open:animate-fadeIn">
                                SAAS platform is a cloud-based software service that allows users to access
                                and use a variety of tools and functionality.
                            </p>
                        </details>
                    </div>
                </div>

                <div className="mt-4 px-2 border-2 border-orange-200 shadow-md rounded-md bg-white">
                    <div className="grid divide-y divide-neutral-200">
                        <details className="group py-5">
                            <summary className="flex justify-between font-medium cursor-pointer list-none">
                                <span className="base-font-heading text-xl ">Is it possible to embed videos in my referral campaigns?</span>
                                <span className="transition-transform group-open:rotate-180">
                                    <img src={arrowDown} alt="arrow down"></img>
                                </span>
                            </summary>
                            <p className="base-font text-sm mt-3 group-open:animate-fadeIn">
                                SAAS platform is a cloud-based software service that allows users to access
                                and use a variety of tools and functionality.
                            </p>
                        </details>
                    </div>
                </div>


                <div className="mt-4 px-2 border-2 border-orange-200 shadow-md rounded-md bg-white">
                    <div className="grid divide-y divide-neutral-200">
                        <details className="group py-5">
                            <summary className="flex justify-between  font-medium cursor-pointer list-none">
                                <span className="base-font-heading text-xl ">Can I cancel my subscription at any time?</span>
                                <span className="transition-transform group-open:rotate-180">
                                    <img src={arrowDown} alt="arrow down"></img>
                                </span>
                            </summary>
                            <p className="base-font text-sm base-font mt-3 group-open:animate-fadeIn">
                                SAAS platform is a cloud-based software service that allows users to access
                                and use a variety of tools and functionality.
                            </p>
                        </details>
                    </div>
                </div>


                <div className="mt-4 px-2 border-2 border-orange-200 shadow-md rounded-md bg-white">
                    <div className="grid divide-y divide-neutral-200">
                        <details className="group py-5">
                            <summary className="flex justify-between  font-medium cursor-pointer list-none">
                                <span className="base-font-heading text-xl ">What is the advantage of Spreadz?</span>
                                <span className="transition-transform group-open:rotate-180">
                                    <img src={arrowDown} alt="arrow down"></img>
                                </span>
                            </summary>
                            <p className="base-font text-sm mt-3 group-open:animate-fadeIn">
                                SAAS platform is a cloud-based software service that allows users to access
                                and use a variety of tools and functionality.
                            </p>
                        </details>
                    </div>
                </div>


                <div className="mt-4 px-2 border-2 border-orange-200 shadow-md rounded-md bg-white">
                    <div className="grid divide-y divide-neutral-200">
                        <details className="group py-5">
                            <summary className="flex justify-between  font-medium cursor-pointer list-none">
                                <span className="base-font-heading text-xl ">What does Spreadz cost?</span>
                                <span className="transition-transform group-open:rotate-180">
                                    <img src={arrowDown} alt="arrow down"></img>
                                </span>
                            </summary>
                            <p className="base-font text-sm mt-3 group-open:animate-fadeIn">
                                SAAS platform is a cloud-based software service that allows users to access
                                and use a variety of tools and functionality.
                            </p>
                        </details>
                    </div>
                </div>

                <div className="mt-4 px-2 border-2 border-orange-200 shadow-md rounded-md bg-white">
                    <div className="grid divide-y divide-neutral-200">
                        <details className="group py-5">
                            <summary className="flex justify-between  font-medium cursor-pointer list-none">
                                <span className="base-font-heading text-xl ">How do I set up my account?</span>
                                <span className="transition-transform group-open:rotate-180">
                                    <img src={arrowDown} alt="arrow down"></img>
                                </span>
                            </summary>
                            <p className="base-font text-sm mt-3 group-open:animate-fadeIn">
                                SAAS platform is a cloud-based software service that allows users to access
                                and use a variety of tools and functionality.
                            </p>
                        </details>
                    </div>
                </div>

                <div className="my-4 px-2 border-2 border-orange-200 shadow-md rounded-md bg-white">
                    <div className="grid divide-y divide-neutral-200">
                        <details className="group py-5">
                            <summary className="flex justify-between font-medium cursor-pointer list-none">
                                <span className="base-font-heading text-xl ">How can I reach Spreadz support?</span>
                                <span className="transition-transform group-open:rotate-180">
                                    <img src={arrowDown} alt="arrow down"></img>
                                </span>
                            </summary>
                            <p className="base-font text-sm  mt-3 group-open:animate-fadeIn">
                                SAAS platform is a cloud-based software service that allows users to access
                                and use a variety of tools and functionality.
                            </p>
                        </details>
                    </div>
                </div>

        </Container>
            </div>
    )
}

export default Faqs