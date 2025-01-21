import academy from "../../assets/Academic.svg";
import tutorial from "../../assets/Tutorial.svg";
import blogs from "../../assets/Blog.svg";
import Button from "../button/Button";
import Container from "../../customComponents/Container.";
import { useNavigate } from "react-router-dom";


const Academic = () => {
    const navigate = useNavigate();

    const ReserveSeat = () => {
        console.log("Seat is reserving......");
    }
    const exploreBlog = () => {
        console.log("Seat is reserving......");
        navigate('/blogs')
    }

    return (
        <section className="bg-orange-150 ">
            <Container className="px-4 lg:px-10 xl1:px-20">
                <div className="lg:py-8">
                    <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
                        <div className="flex flex-col items-center text-center gap-6 lg:w-72">
                            <img src={academy} alt="academic" className="h-24 w-20" />
                            <h2 className="base-font-heading text-3xl leading-[41.3px] text-white">Academy</h2>
                            <p className="base-font text-sm leading-7 text-white mb-7">
                                In our academy, you will get to know the functions of Spreadz and we will show you how to design promotions efficiently and integrate them into your business.
                            </p>
                            <Button
                                className="w-1/2 py-2 bg-white base-font-heading text-sm rounded-lg text-orange-150"
                                onClick={ReserveSeat}
                                label="Reserve Seat"
                            />
                        </div>

                        <div className="flex flex-col items-center text-center gap-6 lg:w-60">
                            <img src={tutorial} alt="tutorial" className="h-24 w-20" />
                            <h2 className="base-font-heading text-3xl leading-[41.3px] text-white">Tutorials</h2>
                            <p className="base-font text-sm leading-7 text-white  mb-10 mt-4">
                                In numerous tutorials, you can quickly integrate Spreadz into your everyday work for free.
                            </p>
                            <Button
                                className="w-1/2 lg:w-8/12 py-2 bg-white base-font-heading text-sm rounded-lg text-orange-150"
                                onClick={ReserveSeat}
                                label="Go to Tutorials"
                            />
                        </div>

                        <div className="flex flex-col items-center text-center gap-6 lg:w-80">
                            <img src={blogs} alt="blogs" className="h-24 w-20" />
                            <h2 className="base-font-heading text-3xl leading-[41.3px] text-white">Blogs</h2>
                            <p className="base-font text-sm leading-7 text-white">
                                Blogs are online platforms where individuals or groups post regular content on various topics, sharing insights and expertise. They often include multimedia elements and allow reader interaction through comments and social media.
                            </p>
                            <Button
                                className="w-1/2 py-2 bg-white base-font-heading text-sm rounded-lg text-orange-150"
                                onClick={exploreBlog}
                                label="Explore Blogs"
                            />
                        </div>
                    </div>
                </div>
            </Container>

        </section>
    )
}
export default Academic