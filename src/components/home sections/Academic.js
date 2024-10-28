import academy from "../../assets/Academic.svg";
import tutorial from "../../assets/Tutorial.svg";
import blogs from "../../assets/Blog.svg";
import Button from "../button/Button";
import Container from "../../customComponents/Container.";


const Academic = () => {


    const ReserveSeat = () => {
        console.log("Seat is reserving......");
    }
    return (
        <section className="bg-orange-150 ">
            <Container className='px-4 lg:px-10 xl1:px-20'>
                <div className="lg:py-8">
                    <div className="flex flex-col sm:gap-6 lg:flex-row lg:gap-8 justify-between gap-4 mb-8">
                        <div className="flex flex-col justify-between items-center gap-8 lg:w-72">
                            <div className="flex flex-col items-center ">
                                <img src={academy} alt="academic" className="h-24 w-20" />
                            </div>
                            <h2 className="base-font-heading text-3xl leading-[41.3px] text-white">Academy</h2>

                            <p className="flex flex-col base-font text-sm leading-7 text-center text-white">
                                In our academy you will get to know the functions of Spreadz and we will show you how to design promotions efficiently and how to integrate them optimally into your business.
                            </p>

                            <Button
                                className={`w-1/2 py-2 bg-white base-font-heading text-sm  rounded-lg text-orange-150`}
                                onClick={ReserveSeat}
                                label="Reserve Seat"
                            ></Button>

                            <hr className="h-0.5 w-full mt-4 lg:hidden"></hr>
                        </div>

                        <div className="flex flex-col justify-between items-center gap-8 lg:w-52">
                            <div className="flex flex-col items-center ">
                                <img src={tutorial} alt="tutorial" className="h-24 w-20" />
                            </div>
                            <h2 className="base-font-heading text-3xl leading-[41.3px] text-white">Tutorials</h2>

                            <p className="flex flex-col base-font text-sm leading-7 text-center text-white">
                                In numerous tutorials, you can quickly integrate Spreadz into your everyday work for free.
                            </p>

                            <Button
                                className={`w-10/12 py-2 bg-white base-font-heading text-sm  rounded-lg text-orange-150`}
                                onClick={ReserveSeat}
                                label="Go to Tutorials"
                            ></Button>

                            <hr className="h-0.5 w-full mt-4 lg:hidden"></hr>
                        </div>

                        <div className="flex flex-col justify-between items-center gap-8 lg:w-72">
                            <div className="flex flex-col items-center ">
                                <img src={blogs} alt="blogs" className="h-24 w-20" />
                            </div>
                            <h2 className="base-font-heading text-3xl leading-[41.3px] text-white">Blogs</h2>

                            <p className="flex flex-col base-font text-sm leading-7 text-center text-white">
                                Blogs are online platforms where individuals or groups post regular content on various topics, sharing insights and expertise. They often include multimedia elements and allow reader interaction through comments and social media.
                            </p>

                            <Button
                                className={`w-1/2 py-2 bg-white base-font-heading text-sm  rounded-lg text-orange-150`}
                                onClick={ReserveSeat}
                                label="Explore Blogs"
                            ></Button>

                            <hr className="h-0.5 w-full mt-4 lg:hidden"></hr>
                        </div>


                    </div>
                </div>
            </Container>
        </section>
    )
}
export default Academic