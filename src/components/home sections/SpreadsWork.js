
import mobile from "../../assets/Mobile4.png";
import qrScanner from "../../assets/qrScanner.png";
import Ellipse from "../../assets/Ellipse 167.svg";
import mobileFrame from "../../assets/mobileFrame.png";
import mobileFram from "../../assets/mobileFram.png";
import ellipse from "../../assets/Ellipse 2.svg";
import videoImage from "../../assets/videoImage.png";
import Container from "../../customComponents/Container.";
const SpreadsWork = () => {

    return (
      <>
        <section className="bg-gray-100 py-8 md:py-12 lg:py-10 lg:bg-white">
        <h2 className="flex justify-center base-font-heading text-3xl lg:text-[40px] lg:leading-[58.4px] ">
          How <span className="base-color mx-2">Spreadz</span> Works?
        </h2>

        <Container className='px-4 lg:px-10 xl1:px-20'>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-center gap-12 lg:gap-20 pt-16">

          <div className="flex flex-col items-center w-[316px]">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-base-color rounded-full w-12 h-12 flex items-center justify-center text-white ">
                1
              </div>
              <div className="flex flex-col justify-end items-center gap-[132px] width-[226px] px-12 pt-16 pb-12 bg-gray-100 rounded-sm">
                <img src={qrScanner} alt="QR Code Scanner" className="w-36 h-36" />
                <img src={Ellipse} alt="Ellipse" className="w-16 h-16" />
              </div>
              <p className="base-font leading-[31px] lg:text-lg text-md">
                Your customer scans the <span className="text-orange-500">QR code</span> to open your referral campaign.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center w-[316px]">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-base-color rounded-full w-12 h-12 flex items-center justify-center text-white ">
                2
              </div>
              <img src={mobileFram} alt="Form submission" className=" h-[446px] w-[226px]" />
              <p className="base-font leading-[31px] lg:text-lg text-md">
                Your customer reaches your <span className="text-orange-500">self-created referral campaign.</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center w-[316px]">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-base-color rounded-full w-12 h-12 flex items-center justify-center text-white ">
                3
              </div>
              <img src={mobileFrame} alt="Form submission" className="h-[446px] w-[226px]" />
              <p className="base-font leading-[31px] lg:text-lg text-md">
                Your customer enters their <span className="base-color">details</span> so that you know who has just recommended you.
              </p>
            </div>
          </div>
        </div>
        </Container>
      </section>


<section className="bg-gray-100 py-8 md:py-12 lg:py-10 lg:bg-white">
<div className="flex justify-center items-center px-4 lg:h-16 bg-gray-100">
  <h2 className="base-font-heading text-2xl lg:text-[40px] leading-[58.4px]">
    <span className="base-color mr-2">Spreadz</span> Explained in Videos
  </h2>
</div>

<Container className='px-4 lg:px-10 xl1:px-20'>
<div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 lg:gap-12 mt-8">
  
  <div className="flex flex-col items-start lg:w-[418px] ">
    <img
      src={videoImage} 
      alt="How Spreadz Works?"
      className="w-full lg:w-72 h-[267px] rounded-lg "
    />
    <p className="base-font-heading lg:text-lg text-base mt-2">How Spreadz Works?</p>
  </div>
  
  <div className="flex flex-col items-start lg:w-[418px]">
    <img
      src={videoImage}
      alt="How to create account on Spreadz?"
      className="w-full lg:w-72 h-[267px] "
      />
    <p className="base-font-heading lg:text-lg mt-2">How to create account on Spreadz?</p>
  </div>

  <div className="flex flex-col items-start lg:w-[418px]">
    <img
      src={videoImage} 
      alt="Creating campaign on Spreadz."
      className="w-full lg:w-72 h-[267px]"
      />
    <p className="base-font-heading lg:text-lg mt-2">Creating campaign on Spreadz.</p>
  </div>
</div>
 </Container>
</section>


<section className="bg-gray-100 py-8 md:py-12 lg:py-10 lg:bg-white">
<div className="flex justify-center lg:items-center px-4 lg:h-16 bg-gray-100">
  <h2 className="base-font-heading text-xl lg:text-[40px] leading-[58.4px]">
    How does <span className="base-color lg:mx-2">Spreadz</span> advance your business?
  </h2>
</div>

<Container className='px-4 lg:px-10 xl1:px-20'>
<div className="flex flex-col lg:flex-row justify-between lg:gap-[16] lg:pt-16 ">
        <div className="flex flex-col items-start gap-[32px] lg:w-[841px]">
          <h1 className="base-font-heading lg:text-3xl text-lg leading-10 base-color">
           More new customers
          </h1>
          <p className="base-font lg:text-xl text-lg leading-[31px] lg:w-10/12">
          In today's world, digital customer acquisition is booming. Unfortunately, however, the entire competition also romps around in it. It is particularly difficult for smaller companies to assert themselves against the 'big players'. With Spreadz, customers advertise for customers in a simple, uncomplicated and unobtrusive way. Since customers share the advertising digitally with friends and acquaintances, they quickly achieve a very large reach. The advertising looks familiar, as it comes from a well-known person, and has a positive influence on the purchase decision. Since the referrer is only rewarded when a purchase or business transaction occurs, the company only pays when it actually benefits from it. Thus, Spreadz is a win-win-win system: the referrer wins a premium, the company gains a new customer, and the new customer benefits from an offer.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end mt-6 lg:w-96 lg:shrink-0">
          <img
            src={mobile}
            alt="Phone showing testimonials"
            className="w-64 "
          />

        </div>
      </div>
      </Container>
      <div className="flex justify-center base-font-heading text-4xl cursor-pointer">
        <div className="bg-base-color h-2.4 w-4 rounded full"></div>
         <img src={ellipse} alt="Ellipse" className="mx-1"></img>
         <img src={ellipse} alt="Ellipse" className="mr-2"></img>
         <img src={ellipse} alt="Ellipse"></img>
        </div>
 
</section>
</>

    )
}

export default SpreadsWork