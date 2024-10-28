import searchIcon from "../assets/search-normal.png";
import candle from "../assets/candle.svg";
import share from "../assets/Group 237605.svg";
import ellipse62 from "../assets/Ellipse 162.svg";
import arrowRight from "../assets/arrowRight.svg";
import Button from "./button/Button";
import { Link } from "react-router-dom";
import Container from "../customComponents/Container.";

const Blogs = () => {

    const postData = [
        {
            id: 1,
            postHeading: "Aenean eleifend ante maecenas",
            postOwner: "Joanna Wellick",
            postDate: "June 28, 2018",
            postShare: "1K shares",
            postContent: "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
        },
        {
            id: 2,
            postHeading: "Aenean eleifend ante maecenas",
            postOwner: "Joanna Wellick",
            postDate: "June 28, 2018",
            postShare: "1K shares",
            postContent: "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
        },
        {
            id: 3,
            postHeading: "Aenean eleifend ante maecenas",
            postOwner: "Joanna Wellick",
            postDate: "June 28, 2018",
            postShare: "1K shares",
            postContent: "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
        },
        {
            id: 1,
            postHeading: "Aenean eleifend ante maecenas",
            postOwner: "Joanna Wellick",
            postDate: "June 28, 2018",
            postShare: "1K shares",
            postContent: "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
        },
        {
            id: 2,
            postHeading: "Aenean eleifend ante maecenas",
            postOwner: "Joanna Wellick",
            postDate: "June 28, 2018",
            postShare: "1K shares",
            postContent: "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
        },
        {
            id: 3,
            postHeading: "Aenean eleifend ante maecenas",
            postOwner: "Joanna Wellick",
            postDate: "June 28, 2018",
            postShare: "1K shares",
            postContent: "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
        }
    ]

    const Filter = () => {
        console.log("Here is  Filtering the Post --->");
    }

    const AllPost = () => {
        console.log("See all other posts");
    }

    const PostCard = ({ post }) => (
        <div className="flex justify-between">
            <div className="lg:w-[404px] flex flex-col">
                <div className="bg-post h-[303.457px] rounded-xl"></div>
                <div><p className="base-font-heading md:text-2xl text-base my-4">{post.postHeading}</p></div>
                <div>
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                            <img src={ellipse62} alt="profile circle" className="w-8 h-8" />
                            <h4 className="font-base-heading md:text-base text-sm ">{post.postOwner}</h4>
                        </div>
                        <div className="flex items-center">
                            <div className="h-[0.723px] w-[26px] bg-black mr-2"></div>
                            <p className="base-font text-xs text-gray-150">{post.postDate}</p>
                        </div>
                        <ul>
                            <li className="flex items-center custom-bullet space-x-2">
                                <img src={share} alt="share icon" className="w-4 h-4" />
                                <p className="text-xs text-gray-150">{post.postShare}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div><p className="base-font text-base leading-7 text-gray-350 mb-4">{post.postContent} </p></div>
                <Link to="/blogs/blog-details " className="base-font-heading text-base text-orange-150">
                    View Post
                </Link>
                <div className="w-[78.032px] h-[0.723px] bg-orange-150"></div>
            </div>
        </div>
    );

    return (
        <div className="bg-gray-100  pt-12 w-full">
            <Container className='px-4 md:px-8 lg:px-10 xl1:px-20'>
                <div className="flex flex-col">
                    <div className="h-12 bg-gray-100"></div>

                    <div className="flex   flex-row justify-between items-center space-x-4 md:space-y-0">
                        <div className="flex items-center w-full lg:w-[595px] md:w-[500px] h-[65px] bg-white rounded-lg text-base">
                            <img src={searchIcon} alt="search icon" className="w-6 h-6 mx-4" />
                            <input
                                className="flex-grow h-[56px] focus:outline-none"
                                placeholder="Search for blogs"
                            />
                        </div>

                        <Button
                            className="py-4 px-6 flex items-center justify-center text-white bg-orange-150 rounded-lg"
                            onClick={Filter}
                            icon={candle}
                            imgStyle="w-4 h-4"
                            iconPosition="left"
                            alt="Candle Icon"
                            label="Filter"
                        />
                    </div>

                    <div className="flex flex-col space-y-8 mt-8">
                        <h1 className="base-font-heading text-3xl leading-10">Top Posts</h1>

                        <div className="flex flex-col lg:flex-row gap-4 bg-white p-4 rounded-lg">
                            <div className="relative flex flex-col justify-end p-4 w-full lg:w-[756px] h-[300px] lg:h-[498px] bg-left rounded-lg text-white">
                                <h1 className="base-font-heading md:text-3xl text-xl">Heading</h1>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center space-x-2">
                                        <img src={ellipse62} alt="profile circle" className="w-8 h-8" />
                                        <h4 className="font-base-heading text-base">Joanna Wellick</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="h-[0.723px] w-[26px] bg-white mr-2"></div>
                                        <p className="base-font text-xs text-gray-75">June 28, 2018</p>
                                    </div>
                                    <ul>
                                        <li className="flex items-center custom-bullet space-x-2">
                                            <img src={share} alt="share icon" className="w-4 h-4" />
                                            <p className="text-xs text-gray-75">1K shares</p>
                                        </li>
                                    </ul>
                                </div>
                                <p className="mt-4 base-font md:text-lg text-sm">
                                    Thundercats tile vinegar you try-hard next twee hoodie tofu. Hexagon bushwick iceland venmo lumbersexual gochujang bespoke truffaut leggings. Brunch tousled humblebrag fit knausgaard hot....
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 w-full lg:w-1/2">
                                <div className="relative p-4 h-[240px] bg-upper rounded-lg text-white flex flex-col justify-end">
                                    <h2 className="text-base font-bold">Heading</h2>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center space-x-2">
                                            <img src={ellipse62} alt="profile circle" className="w-6 h-6" />
                                            <h4 className="base-font-heading text-sm">Joanna Wellick</h4>
                                            <div className="h-[0.723px] w-[26px] bg-white ml-2"></div>
                                        </div>
                                        <p className="base-font text-xs text-gray-75 ">June 28, 2018</p>
                                        <ul>
                                            <li className="flex items-center custom-bullet space-x-2">
                                                <img src={share} alt="share icon" className="w-4 h-4" />
                                                <p className="text-xs text-gray-75">1K shares</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="mt-2 base-font text-sm">
                                        Thundercats tile vinegar you try-hard next twee hoodie tofu. Hexagon bushwick iceland venmo lumbersexual gochujang....

                                    </p>
                                </div>

                                <div className="relative p-4 h-[240px] bg-lower rounded-lg text-white flex flex-col justify-end">
                                    <h2 className="text-base base-font-heading">Heading</h2>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center space-x-2">
                                            <img src={ellipse62} alt="profile circle" className="w-6 h-6" />
                                            <h4 className="text-sm base-font-heading">Joanna Wellick</h4>
                                            <div className="h-[0.723px] w-[26px] bg-white ml-2"></div>
                                        </div>
                                        <p className="text-xs base-font text-gray-75">June 28, 2018</p>
                                        <ul>
                                            <li className="flex items-center custom-bullet space-x-2">
                                                <img src={share} alt="share icon" className="w-4 h-4" />
                                                <p className="text-xs text-gray-75">1K shares</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="mt-2 text-sm base-font">
                                        Thundercats tile vinegar you try-hard next twee hoodie tofu. Hexagon bushwick iceland venmo lumbersexual gochujang....
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col mt-8 mb-8">
                        <h1 className="base-font-heading text-3xl leading-10">New Posts</h1>

                        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                            {postData.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>

                        <div className="flex justify-center items-center">
                            <Button
                                className="py-2 px-6 mt-10 base-font-heading text-base flex items-center justify-center bg-white text-orange-150 rounded-lg border border-orange-300"
                                onClick={AllPost}
                                icon={arrowRight}
                                imgStyle="w-5 h-5"
                                iconPosition="right"
                                alt="Arrow Right"
                                label="See All"
                            >
                            </Button>
                        </div>
                    </div>



                    <div className="flex flex-col mt-4 mb-8">
                        <h1 className="base-font-heading text-3xl leading-10">Trending Posts</h1>

                        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                            {postData.slice(0, 3).map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>

                        <div className="flex justify-center items-center">
                            <Button
                                className="py-2 px-6 mt-10 base-font-heading text-base flex items-center justify-center bg-white text-orange-150 rounded-lg border border-orange-300"
                                onClick={AllPost}
                                icon={arrowRight}
                                imgStyle="w-5 h-5"
                                iconPosition="right"
                                alt="Arrow Right"
                                label="See All"
                            >
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col  mb-8">
                        <h1 className="base-font-heading text-3xl leading-10">Other Posts</h1>

                        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                            {postData.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>

                        <div className="flex justify-center items-center">

                            <Button
                                className="py-2 px-6 mt-10 base-font-heading text-base flex items-center justify-center bg-white text-orange-150 rounded-lg border border-orange-300"
                                onClick={AllPost}
                                icon={arrowRight}
                                imgStyle="w-5 h-5"
                                iconPosition="right"
                                alt="Arrow Right"
                                label="See All"
                            >
                            </Button>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Blogs;
