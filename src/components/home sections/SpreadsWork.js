
import mobile from "../../assets/Mobile4.png";
import qrScanner from "../../assets/qrScanner.png";
import firstImage from "../../assets/firstImage.png";
import secondImage from "../../assets/secondImage.png";
import thirdImage from "../../assets/thirdImage.png";
import fourthImage from "../../assets/fourthImage.png";
import fifthImage from "../../assets/fifthImage.png";
import sixthImage from "../../assets/sixthImage.png";
import seventhImage from "../../assets/seventhImage.png";
import ellipse from "../../assets/Ellipse 2.svg";
import Container from "../../customComponents/Container.";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from "react";
import { getallVideo } from "../../apiUtils/YoutubeVideoApi";
const SpreadsWork = () => {
  const [video, setVideo] = useState([]);

  const fetchYoutubeVideo = async () => {
    try {
      const videoData = await getallVideo();
      setVideo(videoData?.data?.data);
    } catch (error) {
      console.log("error =>", error);

    }
  }

  useEffect(() => {
    fetchYoutubeVideo();
  }, []);

  return (
    <>
      <section className="bg-gray-100 py-8 md:py-12 lg:py-10 lg:bg-white">
        <h2 className="flex justify-center base-font-heading text-3xl lg:text-[40px] lg:leading-[58.4px]">
          How <span className="text-orange-150 mx-2">Spreadz</span> Works?
        </h2>

        <Container className="px-0 md:px-4 lg:px-10 xl1:px-20">

          <div className="mt-8">
            <Swiper
              className="space-x-4 flex justify-start"
              modules={[Autoplay]}
              spaceBetween={20}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={800}
              loop={true}
              loopFillGroupWithBlank={true}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 3, // Two slides for tablets
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3, // Three slides for desktops
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 3, // Adjust spacing for larger screens
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                <div className="flex flex-col items-center w-48 lg:w-[316px] space-y-3 lg:gap-4">
                  <div className="bg-orange-150 rounded-full w-6 h-6 lg:w-12 lg:h-12 flex items-center justify-center text-white">
                    1
                  </div>
                  <img src={firstImage} alt="Form submission" className="w-36 lg:w-[226px] h-72 lg:h-[446px]" />
                  <p className="base-font leading-5 lg:leading-[31px] text-sm lg:text-lg text-center md:w-full w-40">
                    Entry into the Referral Program
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-col items-center w-48 lg:w-[316px] space-y-3 lg:gap-4">
                  <div className="bg-orange-150 rounded-full w-6 h-6 lg:w-12 lg:h-12 flex items-center justify-center text-white">
                    2
                  </div>
                  <img src={secondImage} alt="Form submission" className="w-36 lg:w-[226px] h-72 lg:h-[446px]" />
                  <p className="base-font leading-5 lg:leading-[31px] text-sm lg:text-lg text-center md:w-full w-40">
                    Participants sign up to join the referral campaign.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-col items-center w-48 lg:w-[316px] space-y-3 lg:gap-4">
                  <div className="bg-orange-150 rounded-full w-6 h-6 lg:w-12 lg:h-12 flex items-center justify-center text-white">
                    3
                  </div>
                  <img src={thirdImage} alt="Form submission" className="w-36 lg:w-[226px] h-72 lg:h-[446px]" />
                  <p className="base-font leading-5 lg:leading-[31px] text-sm lg:text-lg text-center md:w-full w-40">
                    Referral Sharing Page - A unique link is shared via WhatsApp, Email, or Social Media.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-col items-center w-48 lg:w-[316px] space-y-3 lg:gap-4">
                  <div className="bg-orange-150 rounded-full w-6 h-6 lg:w-12 lg:h-12 flex items-center justify-center text-white">
                    4
                  </div>
                  <img src={fourthImage} alt="Form submission" className="w-36 lg:w-[226px] h-72 lg:h-[446px]" />
                  <p className="base-font leading-5 lg:leading-[31px] text-sm lg:text-lg text-center md:w-full w-40">
                    Google Review after referral
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-col items-center w-48 lg:w-[316px] space-y-3 lg:gap-4">
                  <div className="bg-orange-150 rounded-full w-6 h-6 lg:w-12 lg:h-12 flex items-center justify-center text-white">
                    5
                  </div>
                  <img src={fifthImage} alt="Form submission" className="w-36 lg:w-[226px] h-72 lg:h-[446px]" />
                  <p className="base-font leading-5 lg:leading-[31px] text-sm lg:text-lg text-center md:w-full w-40">
                    Referral Recipient View Page
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-col items-center w-48 lg:w-[316px] space-y-3 lg:gap-4">
                  <div className="bg-orange-150 rounded-full w-6 h-6 lg:w-12 lg:h-12 flex items-center justify-center text-white">
                    6
                  </div>
                  <img src={sixthImage} alt="Form submission" className="w-36 lg:w-[226px] h-72 lg:h-[446px]" />
                  <p className="base-font leading-5 lg:leading-[31px] text-sm lg:text-lg text-center md:w-full w-40">
                    Conversion of
                    New Customer
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-col items-center w-48 lg:w-[316px] space-y-3 lg:gap-4">
                  <div className="bg-orange-150 rounded-full w-6 h-6 lg:w-12 lg:h-12 flex items-center justify-center text-white">
                    7
                  </div>
                  <img src={seventhImage} alt="Form submission" className="w-36 lg:w-[226px] h-72 lg:h-[446px]" />
                  <p className="base-font leading-5 lg:leading-[31px] text-sm lg:text-lg text-center  md:w-full w-40">
                    Lead overview dashboard Track your leads end-to-end encrypted and 100% yours.
                  </p>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>

        </Container>
      </section>


      <section className="bg-gray-100 py-8 md:py-12 lg:py-10 lg:bg-white">
        <div className="flex justify-center items-center px-4  bg-gray-100 ">
          <h2 className="base-font-heading  text-2xl lg:text-[40px] md:leading-[58.4px] lg:pt-20 pt-4 pb-8 ">
            <span className="text-orange-150 mr-2">Spreadz</span> Explained in Videos
          </h2>
        </div>

        <Container className='px-4 lg:px-10 xl1:px-20'>
          <div className="grid lg:grid-cols-3 max-[425px]:grid-cols-1 grid-cols-2   gap-6 mt-2 lg:mt-10">

            {video.map((data, id) => {
              const videoId = new URL(data?.url).searchParams.get("v")
              const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
              return (
                <div key={id} className="flex flex-col ">
                  <iframe className="h-[267px] rounded-lg" src={embedUrl}>
                  </iframe>
                  <p className="base-font-heading lg:text-lg text-base mt-2">{data.title}</p>
                </div>

              );
            })}
          </div>
        </Container>
      </section>


      <section className="bg-gray-100  lg:bg-white">
        <div className="flex justify-center lg:items-center px-4  bg-gray-100">
          <h2 className="base-font-heading text-xl lg:text-[40px] leading-[58.4px] lg:pt-20 pt-4 pb-8">
            How does <span className="text-orange-150 lg:mx-2">Spreadz</span> advance your business?
          </h2>
        </div>

        <Container className='px-4 lg:px-10 xl1:px-20'>
          <div className="flex flex-col lg:flex-row justify-between py-6 ">
            <div className="flex flex-col items-start gap-[32px] lg:w-[841px]">
              <h1 className="base-font-heading lg:text-3xl text-lg leading-10 text-orange-150">
                More new customers
              </h1>
              <p className="base-font lg:text-xl text-lg leading-[31px] lg:w-10/12">
                In today's world, digital customer acquisition is booming. Unfortunately, however, the entire competition also romps around in it. It is particularly difficult for smaller companies to assert themselves against the 'big players'. With Spreadz, customers advertise for customers in a simple, uncomplicated and unobtrusive way. Since customers share the advertising digitally with friends and acquaintances, they quickly achieve a very large reach. The advertising looks familiar, as it comes from a well-known person, and has a positive influence on the purchase decision. Since the referrer is only rewarded when a purchase or business transaction occurs, the company only pays when it actually benefits from it. Thus, Spreadz is a win-win-win system: the referrer wins a premium, the company gains a new customer, and the new customer benefits from an offer.
              </p>
            </div>

            <div className="flex justify-center lg:w-96 lg:shrink-0 mt-6 lg:mt-0">
              <img
                src={mobile}
                alt="Phone showing testimonials"
                className=" "
              />

            </div>
          </div>
        </Container>
        <div className="flex justify-center base-font-heading text-4xl cursor-pointer mb-5">
          <div className="bg-orange-150 h-2.4 w-4 rounded full"></div>
          <img src={ellipse} alt="Ellipse" className="mx-1"></img>
          <img src={ellipse} alt="Ellipse" className="mr-2"></img>
          <img src={ellipse} alt="Ellipse"></img>
        </div>

      </section>
    </>

  )
}

export default SpreadsWork