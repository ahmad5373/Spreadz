import animalFrogh from "../assets/animalFrogh.png";
import car from "../assets/car.png";
import girldance from "../assets/girldance.png";
import food from "../assets/food.png";
import girlSport from "../assets/girlSport.png";
import share from "../assets/Group 237605.svg";
import ellipse62 from "../assets/Ellipse 162.svg";
import arrowRight from "../assets/arrowRight.svg";
import manImage from "../assets/man.png";
import waterBoat from "../assets/water.png";
import boats from "../assets/boats.png";
import girlSmall from "../assets/girlSmall.png";
import girlcurly from "../assets/girlcurly.png";
import manchair from "../assets/manchair.png";
import girlt from "../assets/girlt.png";
import PlusIcon from "../assets/tabler_plus.svg";

import Button from "./button/Button";
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faCalendar, faPaperPlane, faBookmark, faFaceAngry, faFaceMeh, faFaceGrinWide, faFaceGrinHearts, faFaceGrinStars } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import Container from "../customComponents/Container.";
import { useEffect, useState } from "react";
import { getallBlog } from "../apiUtils/BlogApi";
import { toast } from "react-toastify";
import PostCard from "./PostCard";



const BlogDetails = () => {
    const { state } = useLocation();
    const post = state;
    console.log("post =>", post);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);


    const Follow = () => {
        console.log("Here is  Filtering the Post --->");
    }
    const AllPost = () => {
        console.log("See all other posts");
    }

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const response = await getallBlog();
            setBlogs(response?.data?.data?.length ? response?.data.data : []);
            setLoading(false);
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Something Went Wrong. Try Again');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);


    return (
        <div className="bg-gray-100  pt-12 w-full">
            <Container className='px-4 md:px-8 lg:px-10 xl1:px-20'>
                <div className="h-12 bg-gray-100"></div>
                <div className="flex flex-col">

                    <div className="flex flex-wrap flex-row justify-between lg:space-x-16 bg-gray-100">
                        <div className="flex flex-col space-y-2 xl1:w-[900px] lg:w-[850px] md:w-[700px]">
                            <div><p className="base-font-heading text-3xl leading-10">{post?.title}</p></div>
                            <div className="">
                                <img src={post?.imageUrl || waterBoat} alt="Boat in Water" className="h-[504.805px] rounded-lg" />
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faCalendar} size="sm" style={{ color: "#b2b2b3", paddingLeft: "4px" }} />
                                <p className="base-font text-base text-gray-250 ml-2 mr-16 ">{post.createdAt}</p>
                                <FontAwesomeIcon icon={faCommentDots} size="sm" style={{ color: "#bfbfc0" }} />
                                <p className="base-font text-base text-gray-250 ml-2">{post?.comment || '35'}</p>
                            </div>

                            <div className="py-8">
                                <h1 className="base-font-heading text-xl pb-8">{post?.title}</h1>
                                <p className="text-base leading-7 ">{post?.description}</p>
                            </div>

                            <img src={post?.imageUrl} alt="Boats" className="h-[410.26px] rounded-lg " />

                            <div className="pb-8">
                                <h1 className="base-font-heading text-xl py-8 capitalize">Not how long, but how well you have lived is the main thing.</h1>
                                <p className="text-base leading-7 ">When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats. Snorkeling equipment is available as well, so you can experience the ever-changing undersea environment.
                                    Not only do visitors to a bed and breakfast get a unique perspective on the place they are visiting, they have options for special packages not available in other hotel settings. Bed and breakfasts can partner easily with local businesses for a smoothly organized and highly personalized vacation experience. The Fife and Drum Inn offers options such as the Historic Triangle Package that includes three nights at the Inn, breakfasts, and admissions to historic Williamsburg, Jamestown, and Yorktown. Bed and breakfasts also lend themselves to romance.</p>
                                <p className="text-base leading-7">Part of the charm of a bed and breakfast is the uniqueness; art, décor, and food are integrated to create a complete experience. For example, the Fife and Drum retains the colonial feel of the area in all its guest rooms. Special features include antique furnishings, elegant four poster beds in some guest rooms, as well folk art and artifacts from the restoration period of the historic area available for guests to enjoy.</p>
                            </div>

                            <div className="flex justify-start items-center space-x-2 pb-5">
                                <div className="h-2 w-1 bg-red-150" ></div>
                                <h2 className="base-font-heading text-base">Comments</h2>
                            </div>

                            <div className="flex justify-between  space-x-2 ">
                                <div className="flex space-x-3">
                                    <img src={girlSmall} alt="A Girl With small hair" className="rounded-xl" />
                                    <div className="flex flex-col justify-center">
                                        <h1 className="base-font-heading text-sm">Jon Kantner</h1>
                                        <div className="flex  justify-between items-center">
                                            <FontAwesomeIcon icon={faCalendar} size="sm" style={{ color: "#b2b2b3", }} />
                                            <p className="base-font text-base text-gray-250 ml-2 mr-16 ">2022 04 July</p>
                                        </div>
                                    </div>
                                </div>

                                <button className="flex justify-end items-center py-2 pr-4 pl-4 space-x-2 bg-gray-200 rounded-xl">
                                    <FontAwesomeIcon icon={faShare} size="sm" style={{ color: "#b5b5b5", }} />
                                    <p className="base-font-heading text-base text-gray-250 ">Reply</p>
                                </button>
                            </div>

                            <div className="px-4 pt-3">
                                <p className="base-font text-sm leading-6 capitalize">When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats.</p>
                            </div>


                            <div className="flex lg:mx-20 pr-5 pl-3 md:px-8 lg:px-20 py-3 lg:w-[736.104px]">
                                <div className="flex flex-col bg-white px-4 pt-3 pb-4 mb-3  space-y-7 rounded-lg">

                                    <div className="flex space-x-3">
                                        <img src={girlcurly} alt="A Girl With girlcurly hair" className="rounded-xl" />
                                        <div className="flex flex-col justify-center">
                                            <h1 className="base-font-heading text-sm">Cassie Evans</h1>
                                            <div className="flex  justify-between items-center">
                                                <FontAwesomeIcon icon={faCalendar} size="sm" style={{ color: "#b2b2b3", }} />
                                                <p className="base-font text-base text-gray-250 ml-2 mr-16 ">2022 04 July</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="base-font text-base leading-6 capitalize">a river or a lake island may be called an eyot or ait, and a small island off the coast may be called a holm. Sedimentary islands in the Ganges delta are called chars. A grouping of geographically or geologically related islands, such as the Philippines, is referred to as an archipelago. </h3>

                                    <div className="flex space-x-3">
                                        <img src={manchair} alt="A Man in chair" className="rounded-xl" />
                                        <div className="flex flex-col justify-center">
                                            <h1 className="base-font-heading text-sm">behzad pashaei</h1>
                                            <div className="flex  justify-between items-center">
                                                <FontAwesomeIcon icon={faCalendar} size="sm" style={{ color: "#b2b2b3", }} />
                                                <p className="base-font text-base text-gray-250 ml-2 mr-16 ">2022 04 July</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="base-font text-base leading-6 capitalize">Oceanic islands are often considered to be islands that do not sit on continental shelves. Other definitions limit the term to only refer to islands with no past geological connections to a continental landmass.The vast majority are volcanic in origin, such as Saint Helena in the South Atlantic Ocean. </h3>

                                </div>

                            </div>

                            <div className="flex justify-between  space-x-2 ">
                                <div className="flex space-x-3">
                                    <img src={girlt} alt="A Girl With small hair" className="rounded-xl" />
                                    <div className="flex flex-col justify-center">
                                        <h1 className="base-font-heading text-sm">Patricia</h1>
                                        <div className="flex  justify-between items-center">
                                            <FontAwesomeIcon icon={faCalendar} size="sm" style={{ color: "#b2b2b3", }} />
                                            <p className="base-font text-base text-gray-250 ml-2 mr-16 ">2022 04 July</p>
                                        </div>
                                    </div>
                                </div>

                                <button className="flex justify-end items-center py-2 pr-5 pl-4 space-x-2 bg-gray-200 rounded-xl">
                                    <FontAwesomeIcon icon={faShare} size="sm" style={{ color: "#b5b5b5", }} />
                                    <p className="base-font-heading text-base text-gray-250 ">Reply</p>
                                </button>
                            </div>

                            <div className="px-4 pt-3">
                                <p className="base-font text-sm leading-6 capitalize">An island (or isle) is an isolated piece of habitat that is surrounded by a dramatically different habitat, such as water. Very small islands such as emergent land features on atolls can be called islets, skerries, cays or keys.</p>
                            </div>

                            <div className="flex flex-col justify-between space-y-5 p-5">
                                <div className="flex justify-start items-center space-x-2 pb-5">
                                    <div className="h-2 w-1 bg-red-150"></div>
                                    <h2 className="base-font-heading text-base">Add A Comment</h2>
                                </div>

                                <form className="flex flex-col lg:flex-row justify-between lg:space-x-5">
                                    <div className="flex flex-col space-y-4 lg:w-[440px] ">
                                        <label className="base-font-heading text-sm" htmlFor="name">Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            className="bg-white h-10 rounded-lg px-2 focus:outline-orange-300"
                                        />

                                        <label className="base-font-heading text-sm" htmlFor="website">Website</label>
                                        <input
                                            id="website"
                                            type="text"
                                            className="bg-white h-10 rounded-lg px-2 focus:outline-orange-300"
                                        />

                                        <label className="base-font-heading text-sm" htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="bg-white h-10 rounded-lg px-2 focus:outline-orange-300"
                                        />
                                    </div>

                                    <div className="flex flex-col space-y-4 w-full lg:w-[440px] ">
                                        <h1 className="base-font-heading text-base">Comments</h1>
                                        <textarea
                                            placeholder="Write your comment"
                                            className="bg-white w-full  h-56 rounded-lg p-4 text-xs focus:outline-orange-300"
                                        ></textarea>
                                    </div>
                                </form>

                                <div className="flex justify-center items-center flex-col lg:flex-row space-y-4 lg:space-y-0  lg:space-x-4">
                                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0  lg:space-x-4 lg:w-[650px]">
                                        <div>
                                            <h2 className="base-font-heading text-base">Rate the usefulness of the article</h2>
                                        </div>
                                        <div className="flex justify-between items-center space-x-6">
                                            <FontAwesomeIcon icon={faFaceAngry} style={{ color: "#fc5c65" }} />
                                            <FontAwesomeIcon icon={faFaceMeh} style={{ color: "#FA8231" }} />
                                            <FontAwesomeIcon icon={faFaceGrinWide} style={{ color: "#F7B731" }} />
                                            <FontAwesomeIcon icon={faFaceGrinHearts} style={{ color: "#45AAF2" }} />
                                            <button className="flex justify-center items-center py-2 px-4 space-x-2 bg-green-150 rounded-xl w-[125px]">
                                                <FontAwesomeIcon icon={faFaceGrinStars} style={{ color: "#FFF" }} />
                                                <p className="text-white text-base">Good</p>
                                            </button>
                                        </div>
                                    </div>

                                    <button className="flex justify-center items-center py-2 px-4 space-x-2 rounded-xl bg-orange-150 lg:w-48 w-1/2 max-[375px]:w-full">
                                        <FontAwesomeIcon icon={faCommentDots} size="xs" style={{ color: "#fff" }} />
                                        <p className="text-white text-base ">Send Comments</p>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-5 mt-4 lg:m-0 lg:w-[300px]">
                            <div className="flex flex-col justify-start space-y-5">
                                <div className="flex justify-start items-center space-x-2">
                                    <div className="h-2 w-1 our-team-circle-bg" ></div>
                                    <h2 className="base-font-heading text-base">Top Post</h2>
                                </div>
                                {blogs.slice(0, 5).map((post) => (
                                    <div className="flex items-center space-x-2">
                                        <img src={post?.imageUrl || waterBoat} alt="Boat in Water" className="h-16 w-20 rounded-lg" />
                                        <h3 className="base-font-heading text-base w-[188px]">{post.description
                                            ? post.description.length > 50
                                                ? `${post.description.slice(0, 50)}...`
                                                : post.description
                                            : "How to Spend the Perfect Day on Croatia’s Most Magical Island"}</h3>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center  bg-blog-advertise1 h-[151.948px] w-[300px] rounded-lg">
                                <div className="flex flex-col justify-center items-center text-white">
                                    <h3 className="base-font-heading text-base">Advertising</h3>
                                    <p className="base-font-heading text-xs">360 px * 180px</p>
                                </div>
                            </div>
                            <div className="flex justify-center  bg-blog-advertise2 h-[151.948px] w-[300px] rounded-lg">
                                <div className="flex flex-col justify-center items-center text-white">
                                    <h3 className="base-font-heading text-base">Advertising</h3>
                                    <p className="base-font-heading text-xs">360 px * 180px</p>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="flex flex-col pb-20 mt-8 bg-gray-100">
                        <h1 className="base-font-heading text-3xl leading-10">Related Posts</h1>

                        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                            {blogs.slice(2, 5).map((post) => (
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
{/* 
                        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                            <div className="flex justify-between">
                                <div className="lg:w-[404px] flex flex-col">
                                    <div className="bg-post h-[303.457px] rounded-xl"></div>
                                    <div><p className="base-font-heading text-2xl my-4">Aenean eleifend ante maecenas</p></div>
                                    <div>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex items-center space-x-2">
                                                <img src={ellipse62} alt="profile circle" className="w-8 h-8" />
                                                <h4 className="font-base-heading text-base">Joanna Wellick</h4>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="h-[0.723px] w-[26px] bg-black mr-2"></div>
                                                <p className="base-font text-xs text-gray-150">June 28, 2018</p>
                                            </div>
                                            <ul>
                                                <li className="flex items-center custom-bullet space-x-2">
                                                    <img src={share} alt="share icon" className="w-4 h-4" />
                                                    <p className="text-xs text-gray-150">1K shares</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div><p className="base-font text-base leading-7 text-gray-350 mb-4">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. </p></div>
                                    <Link to="blog-details " className="base-font-heading text-base text-orange-150">
                                        View Post
                                    </Link>
                                    <div className="w-[78.032px] h-[0.723px] bg-orange-150"></div>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div className="lg:w-[404px] flex flex-col">
                                    <div className="bg-post h-[303.457px] rounded-xl"></div>
                                    <div><p className="base-font-heading text-2xl my-4">Aenean eleifend ante maecenas</p></div>
                                    <div>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex items-center space-x-2">
                                                <img src={ellipse62} alt="profile circle" className="w-8 h-8" />
                                                <h4 className="font-base-heading text-base">Joanna Wellick</h4>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="h-[0.723px] w-[26px] bg-black mr-2"></div>
                                                <p className="base-font text-xs text-gray-150">June 28, 2018</p>
                                            </div>
                                            <ul>
                                                <li className="flex items-center custom-bullet space-x-2">
                                                    <img src={share} alt="share icon" className="w-4 h-4" />
                                                    <p className="text-xs text-gray-150">1K shares</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div><p className="base-font text-base leading-7 text-gray-350 mb-4">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. </p></div>
                                    <Link to="blog-details " className="base-font-heading text-base text-orange-150">
                                        View Post
                                    </Link>
                                    <div className="w-[78.032px] h-[0.723px] bg-orange-150"></div>
                                </div>
                            </div>

                            <div className="flex justify-between">

                                <div className="lg:w-[404px] flex flex-col">
                                    <div className="bg-post h-[303.457px] rounded-xl"></div>
                                    <div><p className="base-font-heading text-2xl my-4">Aenean eleifend ante maecenas</p></div>
                                    <div>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex items-center space-x-2">
                                                <img src={ellipse62} alt="profile circle" className="w-8 h-8" />
                                                <h4 className="font-base-heading text-base">Joanna Wellick</h4>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="h-[0.723px] w-[26px] bg-black mr-2"></div>
                                                <p className="base-font text-xs text-gray-150">June 28, 2018</p>
                                            </div>
                                            <ul>
                                                <li className="flex items-center custom-bullet space-x-2">
                                                    <img src={share} alt="share icon" className="w-4 h-4" />
                                                    <p className="text-xs text-gray-150">1K shares</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div><p className="base-font text-base leading-7 text-gray-350 mb-4">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. </p></div>
                                    <Link to="blog-details " className="base-font-heading text-base text-orange-150">
                                        View Post
                                    </Link>
                                    <div className="w-[78.032px] h-[0.723px] bg-orange-150"></div>
                                </div>

                            </div>
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
                        </div> */}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BlogDetails;
