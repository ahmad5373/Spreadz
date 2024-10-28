import chrisStory from "../assets/ChrisStory.png";
import quotes1 from "../assets/quotes1.svg";
import quotes2 from "../assets/quotes2.svg";
import signature from "../assets/Signature.png";
import Container from "../customComponents/Container.";

const OurStory = () => {


    return (
        <div className="flex flex-col pt-12 w-full">
            <div className="h-16 bg-gray-100"></div>
                <div className="bg-orange-150 ">
        <Container className='px-4 lg:px-10 xl1:px-20'>

                    <div className="flex flex-col-reverse lg:flex-row justify-between">
                        <div className="flex flex-col justify-center">
                            <img src={quotes1} alt="quotes" className="h-12 w-12"></img>
                            <h2 className="base-font lg:text-3xl text-lg lg:leading-10	lg:w-[900px]  custom-w-our-story text-white">But what does the web app have to do with "spreading" anyway? The logo also gives it away. The "S" has an arrow at the top and bottom. "It stands for multiplying, sharing and distributing, and that's exactly what I want to achieve with this app." Sonderegger also wants to offer companies the opportunity to establish themselves and draw attention to themselves.</h2>
                            <img src={quotes2} alt="quotes 2" className="h-12 xl1:ml-[26rem] lg:ml-[22rem]  custom-our-story-quote md:-ml-64 -ml-20 "></img>
                            <h4 className="base-font  text-xl  mt-8 text-white">Nidwaldner Zeitung, 05 October 2023 (Source: CH Media)</h4>
                        </div>
                        <div className=" flex justify-center items-center"><img src={chrisStory} alt="Chris" className=" h-[424px]"></img></div>
                    </div>
                    </Container>
                </div>

            <div className="flex flex-col items-start space-y-8 pb-4 bg-gray-100">
                <Container className='px-4 lg:px-10 xl1:px-20'>
                <div className="flex flex-col max-w-[1280px]">
                    <div className="pt-16 pb-6 base-font-heading lg:text-3xl">
                        Chris tells us.
                    </div>
                    <div className="base-font lg:text-2xl text-lg leading-10">
                        <p>During my 17-year career in sales, I was always looking for new ways to get new customers. Deviating from the usual methods such as telemarketing, online leads and billboard advertising, I dedicated myself to referral management early on. In the beginning, I was personally recommended by customers, then I used flyers with QR codes and finally
                        </p>
                        <p>Online forms that I had my clients fill out. However, I always felt limited with these solutions. I kept experimenting until I finally got closer to the idea of Spreadz.</p>
                        <br />
                        <p>
                            In the spring of 2023, I met Phil, who had already made great strides in lead generation on the internet. He was so enthusiastic about my idea that we decided to develop the tool together. The result is an online tool that enables any company to turn its customers into digital advertisers and reward them individually.</p>
                        <br />
                        <p>With Spreadz, customers advertise for customers, but online. As a result, there are hardly any limits to recommendations, and they are infinitely scalable. The Internet knows no national borders. Every Spreadz action can be shared worldwide in real-time. As a positive side effect, companies are automatically rated by customers on Google. The idea behind this is that companies also get more positive reviews through recommendations. After all, hardly anyone who recommends a company to others will rate it badly. With this promotion, even more customers will find their way to companies that use Spreadz.</p>
                        <br />
                        <p>
                            We decided to offer Spreadz as a web app so that everyone can access it without having to download a separate app. In the test phase, I was able to increase my recommendation rate fivefold, while the completion rate, as with recommendations,
                        </p>
                        <p>usual, remained enormously high. Spreadz has had a lasting impact on my everyday life in sales.</p>
                        <br />
                        <p>At Spreadz, we pride ourselves on providing innovative ways to manage referral
                            and support companies in transforming their customers into digital advertising media
                            . Our success story is reflected in the positive changes</p>
                        <p>that Spreadz brings to businesses and sales professionals. Join us</p>
                        <p>the next step towards more success.</p>

                    </div>
                </div>

                <div className="pt-8">
                    <img src={signature} alt="signature" className="h-[121px]" ></img>
                    <p className="base-font-heading lg:text-3xl text-lg leading-10">Chris</p>
                    <p className="base-font lg:text-xl text-lg leading-[31px]">
                        Founder
                    </p>
                </div>
            </Container>
            </div>
        </div>
    );
};

export default OurStory;
