import Mobile from "../assets/mobile1st.png";
import quotes1 from "../assets/blackQuote1.svg";
import quotes2 from "../assets/blackQuote2.svg";
import Mobile2 from "../assets/mobile2.png";
import Mobile3 from "../assets/Mobile3.png";
import Mobile4 from "../assets/Mobile4.png";
import PeopleList from "../assets/PeopleList.png";
import Union from "../assets/Union.svg";
import Container from "../customComponents/Container.";


const AboutUs = () => {


  return (
    <div className="flex flex-col pt-12 w-full">
      <div className="h-16 bg-gray-100"></div>
      <div className="bg-base-color ">
        <Container className='px-4 lg:px-10 xl1:px-20'>

          <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
            <div className="flex flex-col justify-center">
              <img src={quotes1} alt="quotes" className="h-12 w-12"></img>
              <h2 className="base-font-heading text-3xl md:text-5xl lg:leading-[70px] digital-form-custom lg:w-[684px] text-black">The digital form of word-of-mouth propaganda</h2>
              <img src={quotes2} alt="quotes 2" className="h-12  ml-[200px]"></img>
            </div>
            <div className="relative mt-24 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="325px" height="310.941px" viewBox="0 0 325 312" fill="none" >
                <path d="M323.578 140.388C329.507 172.352 316.094 204.971 298.147 232.039C282.325 255.902 255.281 267.161 230.298 281.076C206.297 294.444 183.228 309.666 155.817 311.313C125.188 313.152 94.4815 306.967 68.367 290.8C38.8002 272.497 4.45367 249.627 0.301988 215.04C-3.83746 180.555 35.7287 157.923 48.5441 125.661C61.85 92.164 49.5413 48.0018 76.2448 23.8567C103.685 -0.95439 146.407 -2.89383 182.642 4.41074C216.774 11.2915 241.56 38.033 266.65 62.2404C290.414 85.1685 317.549 107.882 323.578 140.388Z" fill="white" />
              </svg>

              <img src={Mobile} alt="Mobile" className="absolute inset-6 w-[211px]  h-[418px] bottom-28 m-auto" />
            </div>
          </div>
        </Container>
      </div>


      <div className="flex pt-20 bg-gray-100 flex-col space-y-8 ">
        <Container className='px-4 lg:px-10 xl1:px-20'>

          <div className="flex flex-col lg:flex-row justify-between items-center space-x-4">
            <div className="relative mt-24">
              <svg xmlns="http://www.w3.org/2000/svg" width="309" height="333" viewBox="0 0 326 312" fill="none">
                <path d="M324.49 140.388C330.431 172.352 316.991 204.971 299.009 232.039C283.156 255.902 256.06 267.161 231.027 281.076C206.979 294.444 183.865 309.666 156.4 311.313C125.71 313.152 94.9441 306.967 68.7784 290.8C39.1535 272.497 4.7396 249.627 0.57977 215.04C-3.56779 180.555 36.0761 157.923 48.9166 125.661C62.2486 92.164 49.9157 48.0018 76.6716 23.8567C104.165 -0.954395 146.971 -2.89383 183.277 4.41074C217.476 11.2915 242.311 38.033 267.45 62.2404C291.261 85.1685 318.449 107.882 324.49 140.388Z" fill="#F49217" />
              </svg>
              <img src={Mobile2} alt="Mobile" className="absolute inset-6 w-[196px]  h-[407px] bottom-36 m-auto" />
            </div>
            <div className="xl1:w-[878px] base-font text-2xl leading-[39px]"><p>In sales and marketing, new ways are always being sought to expand one's own radius and to acquire more and more new customers. To achieve this, most companies invest large sums of money in various marketing campaigns. </p>
              <p>In recent years, these campaigns have become increasingly digital and mostly online. On the one hand, this makes you much more flexible, and on the other hand, you can use online methods to specifically address your own target group and have much less wastage. The costs are also considerably lower than expensive poster campaigns, print advertising or TV spots.</p></div>
          </div>

          <div className="base-font text-2xl leading-[39px] mt-4 pb-8">
            <p>The very best method is still word of mouth, the personal recommendation of a trusted person. This usually means that a purchase decision has already been made before a sales discussion can take place. This creates a completely different service provider-customer relationship than with other methods, where the interest of a potential customer is aroused.</p>
            <p>It was with this in mind that we developed Spreadz. A tool with which your customers can recommend you or your company to their friends and acquaintances.A personal recommendation that can be shared digitally as often as desired to all possible interested parties within seconds. They, in turn, find their way to the recommended service provider or product via the personalized link or personalized voucher code. Quick and uncomplicated.</p>
          </div>

          <hr className="h-0.5 w-full"></hr>

          <div className="flex custom-col flex-row space-x-6 justify-center items-center py-8">

            <div className="flex flex-col  space-y-6">
              <h1 className="base-font text-3xl leading-[41.3px] base-color">Online marketing without IT knowledge: </h1>
              <p className="lg:w-[878px] base-font text-2xl leading-[39px]">Spreadz was developed as a tool for everyone and is therefore easy to use for everyone. The account can be set up and designed individually on a smartphone or PC. All texts and messages to potential customers can be written by the user in their own words.</p>
              <p className="lg:w-[878px] base-font text-2xl leading-[39px]">The user can create their own recommendation campaigns. The tool automatically generates a QR code for each campaign, which the recommenders can use to go directly to the campaign. The recommendations and the statistics of the campaign are displayed in the respective campaign.It is child's play and no IT knowledge is required to use Spreadz.</p>
            </div>

            <div className="relative mt-28">
              <svg xmlns="http://www.w3.org/2000/svg" width="309" height="334" viewBox="0 0 309 334" fill="none">
                <path d="M123.343 333.265C90.9311 330.73 62.9017 309.306 41.4103 284.931C22.4634 263.442 18.6015 234.354 11.6394 206.573C4.95109 179.884 -3.77045 153.618 1.74784 126.663C7.91418 96.5434 21.8515 68.4263 44.2392 47.3362C69.5865 23.4581 100.585 -3.86387 135.069 1.06973C169.452 5.98879 181.053 50.1394 208.892 70.8925C237.797 92.4399 283.647 91.9573 300.044 124.051C316.894 157.029 307.688 198.878 291.236 232.057C275.738 263.31 243.48 280.377 213.591 298.394C185.282 315.46 156.305 335.842 123.343 333.265Z" fill="#F49217" />
              </svg>

              <img src={Mobile3} alt="Mobile" className="absolute inset-0 w-[196px]  h-[407px] bottom-36 m-auto" />
            </div>

          </div>

          <h1 className="base-font text-3xl leading-[41.3px] base-color">Google star collector as a Spreadz side effect</h1>
          <p className="base-font text-2xl leading-[39px]  mt-8">During the recommendation process, future recommenders are asked to leave a review on Google. Spreadz links to the user's company's Google profile. Experience has shown that companies that had fewer Google reviews suddenly received more reviews on Google. It was also noticeable that the Google reviews that came about through Spreadz were generally good. This is because the customer makes the review on the spot and only if they were satisfied with the service. </p>

          <hr className="h-0.5 w-full mt-8"></hr>

          <div className="flex custom-col flex-row justify-between items-center space-x-7 pt-8">

            <div className="relative mt-24">
              <svg xmlns="http://www.w3.org/2000/svg" width="309" height="334" viewBox="0 0 309 334" fill="none">
                <path d="M123.343 333.094C90.931 330.559 62.9017 309.135 41.4103 284.76C22.4633 263.271 18.6014 234.183 11.6394 206.402C4.95103 179.713 -3.77052 153.447 1.74778 126.492C7.91412 96.3724 21.8515 68.2552 44.2392 47.1652C69.5865 23.2871 100.585 -4.03489 135.069 0.898709C169.452 5.81777 181.053 49.9684 208.892 70.7215C237.797 92.2689 283.647 91.7862 300.044 123.88C316.894 156.858 307.688 198.707 291.236 231.886C275.738 263.139 243.48 280.206 213.591 298.223C185.282 315.289 156.305 335.671 123.343 333.094Z" fill="#F49217" />
              </svg>

              <img src={Mobile4} alt="Mobile" className="absolute inset-0 w-[196px]  h-[407px] bottom-36 m-auto" />
            </div>

            <div className="flex flex-col  space-y-6 ">
              <h1 className="base-font text-3xl leading-[41.3px] base-color">Guaranteed success with Spreadz</h1>
              <p className="lg:w-[850px] base-font text-2xl leading-[39px]">Even if it is ultimately the user who determines the success of an advertising tool, it is almost impossible for Spreadz to fail to be successful. This can only really happen if you withhold the QR coder or the link from the customer. Because once the customer immerses themselves in the world of Spreadz and shares it with their WhatsApp contacts, the response is guaranteed. If you use the tool consistently, it is pure logic that the customer base will grow. For example, one customer becomes three, three become nine, and so on. This is infinitely scalable.</p>
            </div>

          </div>

          <h1 className="base-font text-3xl leading-[41.3px] base-color  mt-12">Your customers become advertising media</h1>
          <p className="base-font text-2xl leading-[39px]  mt-12">With Spreadz you turn your customers into advertising media. Completely automatically. They will recommend you again and again and you will always be confronted with new inquiries. The leads can be viewed live at any time and are waiting to be processed. This means that the appointment or closing rate is extremely high and you can work efficiently and without wastage.</p>
          <br />
          <p className="base-font text-2xl leading-[39px] pb-8">Grow with Spreadz and let us become a part of your success story!</p>
        </Container>
      </div>

      <div className="bg-gray-150">
        <div className="flex flex-col justify-between  space-y-8">
          <div className="flex flex-col justify-center items-center mt-4 ">
            <h1 className="base-font-heading text-5xl">Our Team</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="284" height="40" viewBox="0 0 284 40" fill="none">
              <path d="M180.852 0.697709C160.655 1.32266 140.471 2.37085 120.321 3.84229C102.035 4.16634 83.7466 4.49039 65.4611 4.81443C45.3966 5.17155 25.3321 5.52535 5.27097 5.88247C3.33 5.91553 0.324291 7.34068 0.0266969 9.49328C-0.300657 11.8674 2.63561 12.2642 4.28891 12.2378C17.3269 12.0063 30.3648 11.7748 43.4027 11.5434C37.9766 12.2345 32.5571 12.952 27.1376 13.7026C25.2594 13.9638 22.6373 14.8434 22.0388 16.8968C21.5031 18.7286 23.1762 20.0281 24.9519 20.0612C55.0618 20.577 85.1751 21.0962 115.285 21.612C121.693 21.7211 128.101 21.8335 134.51 21.9426C125.291 22.9512 116.085 24.1118 106.906 25.4245C92.5124 27.4878 78.1783 29.9347 63.907 32.7222C62.3661 33.0231 60.1805 34.3722 59.9457 36.1015C59.7175 37.7548 61.5395 38.8361 63.001 38.8493C97.2442 39.1469 131.487 39.4478 165.731 39.7454C175.386 39.8281 185.038 39.914 194.693 39.9967C196.905 40.0165 199.742 39.385 200.857 37.2126C201.852 35.2683 199.987 33.6513 198.086 33.6348C165.122 33.3471 132.159 33.0595 99.1951 32.7718C100.114 32.6329 101.03 32.4907 101.949 32.3551C114.405 30.5101 126.904 28.946 139.43 27.6664C164.494 25.1071 189.67 23.6819 214.863 23.4009C215.978 23.3876 217.105 23.381 218.23 23.3744C231 23.5926 243.767 23.8142 256.537 24.0324C258.745 24.0688 261.592 23.4075 262.7 21.2483C263.719 19.2643 261.814 17.7466 259.929 17.6705C246.898 17.1481 233.853 16.9232 220.812 16.9993C203.74 16.705 186.668 16.414 169.596 16.1197C139.486 15.6039 109.373 15.0847 79.2629 14.5689C76.8358 14.5259 74.4055 14.4863 71.9784 14.4433C87.7443 12.7668 103.537 11.3483 119.349 10.1943C152.312 9.60901 185.279 9.02705 218.243 8.44178C238.307 8.08467 258.372 7.73086 278.433 7.37374C280.275 7.34068 282.98 6.07756 283.532 4.17956C284.074 2.32456 282.388 1.08127 280.619 1.01514C247.377 -0.221528 214.096 -0.330646 180.852 0.697709Z" fill="#FF6B35" />
            </svg>
            <p className="base-font text-lg leading-7 text-center lg:w-[589px]">Hipster ipsum tattooed brunch I'm baby. Farm-to-table baby taiyaki selfies semiotics kitsch. Retro forage stumptown chia edison axe park. Neutra beer trade probably vinegar direct.</p>

          </div>

          <div className="">
            <img src={Union} alt="poeple list" className="mt-auto mx-auto" />
            <img src={PeopleList} alt="poeple list" className="" />
          </div>
        </div>
      </div>

      <div className="lg:h-16 bg-gray-100 "></div>
    </div>
  );
};

export default AboutUs;
