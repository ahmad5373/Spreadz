import SubscriptionPlans from "./home sections/SubscriptionPlan";

const Price = () => {

  return (
    <div className="flex flex-col pt-12 ">
      <div className="lg:h-16 bg-gray-100"></div>
      <SubscriptionPlans />
      <div className="lg:h-36 bg-gray-100 mt-4"></div>
    </div>
  );
};

export default Price;
