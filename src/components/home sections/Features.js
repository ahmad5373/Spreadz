
import Message from "../../assets/message.svg";
import broadMessage from "../../assets/broadMessage.svg";
import TimeTrack from "../../assets/usermanagement.svg";
import Dashboard from "../../assets/dashboard.svg";
import userProfile from "../../assets/profile.svg";
import Google from "../../assets/Frame.svg";
import Container from "../../customComponents/Container.";
const Features = () =>{


    return(
        <section className="bg-gray-100 py-8 md:py-12 lg:py-10 lg:bg-white">
        <div className="flex justify-center base-font-heading text-[40px] leading-[58.4px]">Features</div>
      <Container className='px-4 lg:px-10 xl1:px-20'>
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 lg:bg-white">
          <div className="bg-white  rounded-lg lg:bg-gray-200">
            <div className="flex flex-col items-start  custom-w-16 lg:w-[278px] pt-6 pb-5  pl-6 space-y-6">
              <img src={TimeTrack} alt="Real Time Tracking" className="w-18 h-18" />
              <div className="base-font-heading text-2xl mt-2">Real Time Tracking</div>
              <ul className="list-disc base-font text-gray-600 text-lg leading-[29px] ml-5 mt-2 space-y-3">
                <li>Time period freely selectable</li>
                <li>Scans & share performance</li>
                <li>Lead management (verify & from whom)</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg lg:bg-gray-200">
            <div className="flex flex-col items-start custom-w-16  lg:w-[278px] pt-6 pb-5 pl-6 space-y-6">
              <img src={Message} alt="Messages" className="w-18 h-18"></img>
              <div className="base-font-heading text-2xl"> Desktop, Mobile und Tablet</div>
              <ul className="list-disc base-font text-gray-600 text-lg leading-[29px] ml-5 mt-2 space-y-3">
                <li>Spreadz can be managed, edited and generally used via any device.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg lg:bg-gray-200">
            <div className="flex flex-col items-start custom-w-16 lg:w-[278px] pt-6 pb-5 pl-6 space-y-6">
              <img src={broadMessage} alt="broadMessage" className="w-18 h-18"></img>
              <div className="base-font-heading text-2xl"> Messaging and User Engagement</div>
              <ul className="list-disc base-font text-gray-600 text-lg leading-[29px] ml-5 mt-2 space-y-3">
                <li>Online Support</li>
                <li>Google-meet-call Video-support inkl. screensharing</li>
                <li>Telephone Support</li>
              </ul>
            </div>
          </div>

          <div className="bg-white  rounded-lg lg:bg-gray-200">
            <div className="flex flex-col items-start custom-w-16  lg:w-[278px]	pt-6 pb-5 pl-6 space-y-6">
              <img src={Dashboard} alt="Dashboard" className="w-18 h-18"></img>
              <div className="base-font-heading text-2xl"> Dashboard</div>
              <ul className="list-disc base-font text-gray-600 text-lg leading-[29px] ml-5 mt-2 space-y-3">
                <li>You can use the dashboard to measure every referral campaign and generate Excel reports of your qualified leads.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg lg:bg-gray-200">
            <div className="flex flex-col items-start custom-w-16  lg:w-[278px]	pt-6 pb-5 pl-6 space-y-6">
              <img src={Google} alt="Google" className="w-18 h-18"></img>
              <div className="base-font-heading text-2xl"> Google company account</div>
              <ul className="list-disc base-font text-gray-600 text-lg leading-[29px] ml-5 mt-2 space-y-3">
                <li>Simple linking for direct reviews</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg lg:bg-gray-200">
            <div className="flex flex-col items-start custom-w-16   lg:w-[278px]	pt-6 pb-5 pl-6 space-y-6">
              <img src={userProfile} alt="User Profile" className="w-18 h-18 "></img>
              <div className="base-font-heading text-2xl">Users & Accounts</div>
              <ul className="list-disc base-font text-gray-600 text-lg leading-[29px] ml-5 mt-2 space-y-3">
                <li>All users can customize their referral campaigns in real time and go live - it's child's play.</li>
              </ul>
            </div>
          </div>

        </div>
        </Container>
        <div className="flex justify-center base-font-heading text-4xl ">
          <button className="base-font-heading bg-base-color text-xl text-white mt-6 px-11 py-2.5 rounded-lg transition duration-300 md:w-auto">
            Get Started Now
          </button></div>
      </section>

      
    )
}

export default Features