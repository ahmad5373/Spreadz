
import SubscriptionPlans from "./home sections/SubscriptionPlan";
import Testimonial from "./home sections/Testimonials";
import Academic from "./home sections/Academic";
import Founder from "./home sections/Founder";
import Faqs from "./home sections/Faqs";
import Hero from "./home sections/Hero";
import Features from "./home sections/Features";
import SpreadsWork from "./home sections/SpreadsWork";


const Home = () => {


  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <div className="lg:h-12 bg-gray-100"></div>
      <SpreadsWork />
      <div className="lg:h-12 bg-gray-100"></div>
      <SubscriptionPlans />
      <div className="lg:h-12 bg-gray-100"></div>
      <Testimonial />
      <div className="lg:h-12 bg-gray-100"></div>
      <Academic />
      <div className="lg:h-12 bg-gray-100"></div>
      <Founder />
      <Faqs />
    </div>
  );
};

export default Home;
