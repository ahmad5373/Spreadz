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
import { addComment, getallBlog, getSingleBlog } from "../apiUtils/BlogApi";
import { toast } from "react-toastify";
import PostCard from "./PostCard";
import { jwtDecode } from "jwt-decode";
import { getToken } from "./auth/AuthCheck";



const BlogDetails = () => {
    const { state } = useLocation();
    const [post, setPost] = useState(state);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [decoded, setDecoded] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        website: "",
        email: "",
        comment: "",
    });

    const token = getToken('jwtToken');
    useEffect(() => {
        if (token) {
            const decodedToken = jwtDecode(token);
            setDecoded(decodedToken)
        }
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const year = date.getFullYear();
        const month = date.toLocaleString('en-US', { month: 'long' });
        const day = date.getDate();

        return `${year} ${month} ${day}`;
    };


    const Follow = () => {
        console.log("Here is  Filtering the Post --->");
    }

    const AllPost = () => {
        console.log("See all other posts");
    }

    const fetchPost = async () => {
        try {
            setLoading(true);
            const response = await getSingleBlog(post?._id);
            setPost(response?.data?.data)
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Failed to fetch post data.');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, website, email, comment } = formData;

        // Check for required fields
        if (!name || !website || !email || !comment) {
            toast.error("Please fill in all fields.");
            return;
        }
        if (!decoded) {
            toast.error("Please first login.");
            return;
        }

        const payload = {
            content: comment,
            website: website,
            user_id: decoded?.user?._id,
            post_id: post?._id,
        };
        try {
            const response = await addComment(payload, token);
            if (response?.data?.status) {
                toast.success(response?.data?.message || 'Comment Added...')
            }
            setLoading(false);
            fetchPost();
            setFormData({ name: "", website: "", email: "", comment: "", })
        } catch (error) {
            console.log('error :>> ', error);
            toast.error(error?.response?.data?.message || 'Something Went Wrong. Try Again');
        }

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
                                <h1 className="base-font-heading text-xl pb-8">{post?.subTitle}</h1>
                                <p className="text-base leading-7 ">{post?.description}</p>
                            </div>

                            <div className="flex justify-start items-center space-x-2 pb-5">
                                <div className="h-2 w-1 bg-red-150" ></div>
                                <h2 className="base-font-heading text-base">Comments</h2>
                            </div>

                            {post.comments.length > 0 && post.comments.map((comment) => {
                                return (
                                    <>
                                        <div className="flex justify-between  space-x-2 ">
                                            <div className="flex space-x-3">
                                                <img src={manImage} alt="A Girl With small hair" className="rounded-xl" />
                                                <div className="flex flex-col justify-center">
                                                    <h1 className="base-font-heading text-sm">{comment?.user_id?.name || 'Jon Kantner'}</h1>
                                                    <div className="flex  justify-between items-center">
                                                        <FontAwesomeIcon icon={faCalendar} size="sm" style={{ color: "#b2b2b3", }} />
                                                        <p className="base-font text-base text-gray-250 ml-2 mr-16 ">{formatDate(comment?.createdAt) || '2022 04 July'}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <button className="flex justify-end items-center py-2 pr-4 pl-4 space-x-2 bg-gray-200 rounded-xl">
                                                <FontAwesomeIcon icon={faShare} size="sm" style={{ color: "#b5b5b5", }} />
                                                <p className="base-font-heading text-base text-gray-250 ">Reply</p>
                                            </button>
                                        </div>

                                        <div className="px-4 pt-3">
                                            <p className="base-font text-sm leading-6 capitalize">{comment?.content || 'When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats.'}</p>
                                        </div>

                                        {comment?.nestedComments && comment.nestedComments.length > 0 && (
                                            <div className="flex lg:mx-20 pr-5 pl-3 md:px-8 lg:px-20 py-3 lg:w-[736.104px">
                                                <div className="flex flex-col bg-white px-4 pt-3 pb-4 mb-3 space-y-7 rounded-lg">
                                                    {comment.nestedComments.map((nestedComment, index) => {
                                                        return (
                                                            <div key={index}>
                                                                <div className="flex space-x-3">
                                                                    <img src={girlcurly} alt="A Girl With curly hair" className="rounded-xl" />
                                                                    <div className="flex flex-col justify-center">
                                                                        <h1 className="base-font-heading text-sm">{nestedComment.userName || 'Cassie Evans'}</h1>
                                                                        <div className="flex justify-between items-center">
                                                                            <FontAwesomeIcon icon={faCalendar} size="sm" style={{ color: "#b2b2b3" }} />
                                                                            <p className="base-font text-base text-gray-250 ml-2 mr-16 ">{formatDate(nestedComment?.createdAt) || '2022 04 July'}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h3 className="base-font text-base leading-6 capitalize">{nestedComment.content || 'Comment content goes here'}</h3>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                );
                            })}
                            <div className="flex flex-col justify-between space-y-5 p-5">
                                <div className="flex justify-start items-center space-x-2 pb-5">
                                    <div className="h-2 w-1 bg-red-150"></div>
                                    <h2 className="base-font-heading text-base">Add A Comment</h2>
                                </div>
                                <div className="flex flex-col justify-between space-y-5 p-5">
                                    <form
                                        className="flex flex-col space-y-5"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="flex flex-col lg:flex-row justify-between lg:space-x-5">
                                            <div className="flex flex-col space-y-4 lg:w-[440px]">
                                                <label className="base-font-heading text-sm" htmlFor="name">Name</label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="bg-white h-10 rounded-lg px-2 focus:outline-orange-300"
                                                />

                                                <label className="base-font-heading text-sm" htmlFor="website">Website</label>
                                                <input
                                                    id="website"
                                                    name="website"
                                                    type="text"
                                                    value={formData.website}
                                                    onChange={handleChange}
                                                    className="bg-white h-10 rounded-lg px-2 focus:outline-orange-300"
                                                />

                                                <label className="base-font-heading text-sm" htmlFor="email">Email</label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="bg-white h-10 rounded-lg px-2 focus:outline-orange-300"
                                                />
                                            </div>

                                            <div className="flex flex-col space-y-4 w-full lg:w-[440px]">
                                                <h1 className="base-font-heading text-base">Comments</h1>
                                                <textarea
                                                    id="comment"
                                                    name="comment"
                                                    placeholder="Write your comment"
                                                    required
                                                    value={formData.comment}
                                                    onChange={handleChange}
                                                    className="bg-white w-full h-56 rounded-lg p-4 text-xs focus:outline-orange-300"
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="flex justify-center items-center flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                                            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-4 lg:w-[650px]">
                                                <div>
                                                    <h2 className="base-font-heading text-base">Rate the usefulness of the article</h2>
                                                </div>
                                                <div className="flex justify-between items-center space-x-6">
                                                    <FontAwesomeIcon icon={faFaceAngry} style={{ color: "#fc5c65" }} />
                                                    <FontAwesomeIcon icon={faFaceMeh} style={{ color: "#FA8231" }} />
                                                    <FontAwesomeIcon icon={faFaceGrinWide} style={{ color: "#F7B731" }} />
                                                    <FontAwesomeIcon icon={faFaceGrinHearts} style={{ color: "#45AAF2" }} />
                                                    <button
                                                        type="button"
                                                        className="flex justify-center items-center py-2 px-4 space-x-2 bg-green-150 rounded-xl w-[125px]"
                                                    >
                                                        <FontAwesomeIcon icon={faFaceGrinStars} style={{ color: "#FFF" }} />
                                                        <p className="text-white text-base">Good</p>
                                                    </button>
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="flex justify-center items-center py-2 px-4 space-x-2 rounded-xl bg-orange-150 lg:w-48 w-1/2 max-[375px]:w-full"
                                            >
                                                <FontAwesomeIcon icon={faCommentDots} size="xs" style={{ color: "#fff" }} />
                                                <p className="text-white text-base">Send Comments</p>
                                            </button>
                                        </div>
                                    </form>
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
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BlogDetails;
