import fb from "../assets/fb.svg";
import instagram from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";
import arrowRight from "../assets/arrow-right.svg";
import Button from "./button/Button";
import Container from "../customComponents/Container.";
import { toast } from "react-toastify";
import { createContact, SubscribeNewsletter } from "../apiUtils/ContactUsApi";
import { useState } from "react";

const ContactUs = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    const LeaveMessage = async (e) => {
        e.preventDefault();
        console.log("Leave Message clicked for contact");
        setLoading(true)
        const userData = { name: name, email: email, phone: phone, message: message };
        try {
            const contact = await createContact(userData);
            toast.success(contact?.data?.message || 'Request a message successfully!');
            resetForm();
        } catch (err) {
            console.log("err =>", err);
            toast.error(err?.message || 'Something went wrong.');
        } finally {
            setLoading(false);
        }
    }

    const Subscribe = async (e) => {
        e.preventDefault();
        console.log("Subscribe Newsletter clicked");
        setLoading(true)
        const userData = { email: email };
        try {
            const newsletter = await SubscribeNewsletter(userData);
            toast.success(newsletter?.data?.message || 'Request a message successfully!');
            resetForm();
        } catch (err) {
            toast.error(err?.message || 'Something went wrong.');
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className="flex flex-col pt-12 w-full bg-gray-100">
            <div className="h-16 bg-gray-100"></div>
            <Container className='px-4 lg:px-20 xl1:px-44'>
                <div className="lg:h-36 flex justify-between mt-4 lg:mt-0">
                    <div><h1 className="base-font-heading lg:text-5xl md:text-3xl text-xl lg:w-[823.771px] lg:mr-4  mr-12">Get in touch with us. We're here to assist you.</h1></div>
                    <div className="space-y-4">
                        <img src={fb} alt="Facebook logo"></img>
                        <img src={instagram} alt="Instagram logo"></img>
                        <img src={twitter} alt="Twitter logo"></img>
                    </div>
                </div>
                <div className="pb-20 flex flex-col space-y-8 mt-2">
                    <div className="flex flex-col text-black md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-start">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="p-2 bg-gray-100  border-b-2 border-gray-200 base-font lg:text-lg text-md placeholder-black w-full md:w-1/3"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-2 bg-gray-100   border-b-2 border-gray-200 base-font lg:text-lg text-md placeholder-black w-full md:w-1/3"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number (optional)"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="p-2 bg-gray-100 text-black border-b-2 border-gray-200 base-font lg:text-lg text-md placeholder-black w-full md:w-1/3"
                        />
                    </div>

                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="p-2 bg-gray-100 border-b-2 border-gray-200 base-font lg:text-lg text-md placeholder-black w-full"
                        />
                    </div>
                    {loading && <Button
                        className={`md:w-64 py-4 flex items-center justify-center text-white bg-orange-150 base-font-heading text-base rounded-lg`}
                        label="Message Sending"
                    >
                    </Button>}
                    {!loading && <Button
                        className={`md:w-64 py-4 flex items-center justify-center text-white bg-orange-150 base-font-heading text-base rounded-lg`}
                        onClick={LeaveMessage}
                        label="Leave us a Message"
                        icon={arrowRight}
                        imgStyle="w-4 h-4"
                        alt="Arrow Icon"
                    >
                    </Button>}
                </div>
            </Container>
            <div className="bg-orange-150 lg:py-6">
                <Container className='px-4 lg:px-10 xl1:px-20'>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="flex flex-col justify-center items-start space-y-6 lg:pb-36 p-6">
                            <h6 className="base-font lg:text-2xl text-xl  text-white">Contact Info</h6>
                            <h1 className="base-font-heading lg:text-5xl text-2xl text-white ">We are always happy to assist you</h1>
                        </div>

                        <div className="flex custom-col flex-row justify-between lg:w-[575px]">
                            <div className="flex flex-col space-y-6 p-6 ">
                                <h6 className="base-font-heading lg:text-xl leading-10 text-lg text-white">Email Address</h6>
                                <div className="h-1 w-6 bg-white"></div>
                                <h6 className="base-font lg:text-2xl text-base underline text-white ">info@spreadz.ch</h6>
                                <h6 className="base-font lg:text-lg leading-[29px] text-base text-white lg:w-56"><p>Assistance hours:</p>
                                    Monday - Friday 6 am to 8 pm EST</h6>
                            </div>

                            <div className="flex flex-col space-y-6 p-6 ">
                                <h6 className="base-font-heading text-xl leading-10 text-white">Number</h6>
                                <div className="h-1 w-6 bg-white"></div>
                                <h6 className="base-font lg:text-2xl text-base text-white">(808) 998-34256</h6>
                                <h6 className="base-font lg:text-lg leading-[29px] text-base text-white lg:w-56"><p>Assistance hours:</p>
                                    Monday - Friday 6 am to 8 pm EST</h6>
                            </div>

                        </div>
                    </div>
                </Container>
            </div>

            <Container className='px-4 lg:px-20 xl1:px-[300px]'>
                <div className="my-12">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col lg:w-[680px] ">
                            <h1 className="mb-4 base-font-heading text-[40px] leading-[58.4px] text-center "> Subcribe to our Newsletter</h1>
                            <div className="mb-10 base-font text-xl leading-10	text-gray-150 text-center"> Subscribe for Updates: Stay informed about the latest investor updates, financial results, and announcements by subscribing to our newsletter.  </div>
                        </div>
                        <div className="flex w-full">
                            <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-grow py-[20px] px-6 bg-white rounded-l-2xl w-full placeholder-text-orange-150 text-text-orange-150 focus:outline-none"
                            />
                            <Button
                                className={`h-20  py-4  px-6 flex items-center justify-center text-white bg-orange-150 base-font-heading text-base rounded-r-2xl`}
                                onClick={Subscribe}
                                label="Subscribe"

                            >
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default ContactUs;
