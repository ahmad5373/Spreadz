
import Message from "../../assets/message.svg";
import broadMessage from "../../assets/broadMessage.svg";
import TimeTrack from "../../assets/usermanagement.svg";
import Dashboard from "../../assets/dashboard.svg";
import userProfile from "../../assets/profile.svg";
import Google from "../../assets/GoogleImage.png";
import Container from "../../customComponents/Container.";
import { useTranslation } from 'react-i18next';
const Features = () =>{
  const {t} = useTranslation()

    return(
        <section className="bg-gray-100 py-8 md:py-12 lg:py-10 lg:bg-white">
        <div className="flex justify-center base-font-heading text-[40px] leading-[58.4px]">{t('Features')}</div>
      <Container className='px-4 lg:px-10 xl1:px-20'>
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-x-24 gap-y-9 lg:bg-white">
          <div className="bg-white  rounded-lg lg:bg-gray-200">
            <div className="flex flex-col items-start  custom-w-16 lg:w-[278px] pt-6 pb-5  pl-6 space-y-6">
              <img src={TimeTrack} alt="Real Time Tracking" className="w-18 h-18" />
              <div className="base-font-heading text-2xl mt-2">{t('TimeTracking')}</div>
              <ul className="list-disc base-font text-gray-600 text-lg leading-[29px] ml-5 mt-2 space-y-3">
                <li>{t('TimePeriod')}</li>
                <li>{t('ScanPerformance')}</li>
                <li>{t('LeadManagement')}</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg lg:bg-gray-200">
            <div className="flex flex-col items-start custom-w-16  lg:w-[278px] pt-6 pb-5 pl-6 space-y-6">
              <img src={Message} alt="Messages" className="w-18 h-18"></img>
              <div className="base-font-heading text-2xl">{t('DesktopTablet')}</div>
              <ul className="list-disc base-font text-gray-600 text-lg leading-[29px] ml-5 mt-2 space-y-3">
                <li>{t('SpreadzCanManage')}</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg lg:bg-gray-200">
            <div className="flex flex-col items-start custom-w-16 lg:w-[278px] pt-6 pb-5 pl-6 space-y-6">
              <img src={broadMessage} alt="broadMessage" className="w-18 h-18"></img>
              <div className="base-font-heading text-2xl"> {t('UserManagement')}</div>
              <ul className="list-disc base-font text-gray-600 text-lg leading-[29px] ml-5 mt-2 space-y-3">
                <li>{t('OnlineSupport')}</li>
                <li>{t('Google-meet-call Video-support inkl. screensharing')}</li>
                <li>{t('TelephoneSupport')}</li>
              </ul>
            </div>
          </div>

          <div className="bg-white  rounded-lg lg:bg-gray-200">
            <div className="flex flex-col items-start custom-w-16  lg:w-[278px]	pt-6 pb-5 pl-6 space-y-6">
              <img src={Dashboard} alt="Dashboard" className="w-18 h-18"></img>
              <div className="base-font-heading text-2xl"> {t('Dashboard')}</div>
              <ul className="list-disc base-font text-gray-600 text-lg leading-[29px] ml-5 mt-2 space-y-3">
                <li>{t('DashboardMeasure')}</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg lg:bg-gray-200">
            <div className="flex flex-col items-start custom-w-16  lg:w-[278px]	pt-6 pb-5 pl-6 space-y-6">
              <img src={Google} alt="Google" className="w-18 h-18"></img>
              <div className="base-font-heading text-2xl"> {t('GoogleCompany')}</div>
              <ul className="list-disc base-font text-gray-600 text-lg leading-[29px] ml-5 mt-2 space-y-3">
                <li>{t('DirectReview')}</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg lg:bg-gray-200">
            <div className="flex flex-col items-start custom-w-16   lg:w-[278px]	pt-6 pb-5 pl-6 space-y-6">
              <img src={userProfile} alt="User Profile" className="w-18 h-18 "></img>
              <div className="base-font-heading text-2xl">{t('Users&Accounts')}</div>
              <ul className="list-disc base-font text-gray-600 text-lg leading-[29px] ml-5 mt-2 space-y-3">
                <li>{t('CustomizeRefferal')}</li>
              </ul>
            </div>
          </div>

        </div>
        </Container>
        <div className="flex justify-center base-font-heading text-4xl ">
          <button className="base-font-heading bg-orange-150 text-xl text-white mt-6 px-11 py-2.5 rounded-lg transition duration-300 md:w-auto">
            {t('GetStartedNow')}
          </button></div>
      </section>      
    )
}

export default Features