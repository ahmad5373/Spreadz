import share from "../assets/Group 237605.svg";
import ellipse62 from "../assets/Ellipse 162.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PostCard = ({ post }) => {
    const { t } = useTranslation();
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.toLocaleString('en-US', { month: 'long' });
        const day = date.getDate();
        return `${year} ${month} ${day}`;
    };
    return (
        <div className="flex justify-between">
            <div className="lg:w-[404px] flex flex-col">
                <div className="rounded-xl"><img src={post?.imageUrl} alt="post " className="h-[303.457px] w-96" /></div>
                <div><p className="base-font-heading md:text-2xl text-base my-4">{post?.title}</p></div>
                <div>
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                            <img src={ellipse62} alt="profile circle" className="w-8 h-8" />
                            <h4 className="font-base-heading md:text-base text-sm ">{post?.postOwner}</h4>
                        </div>
                        <div className="flex items-center">
                            <div className="h-[0.723px] w-[26px] bg-black mr-2"></div>
                            <p className="base-font text-xs text-gray-150">{formatDate(post?.createdAt) || '2024 12 November'}</p>
                        </div>
                        <ul>
                            <li className="flex items-center custom-bullet space-x-2">
                                <img src={share} alt="share icon" className="w-4 h-4" />
                                <p className="text-xs text-gray-150">{post?.share ?? '0'}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div><p className="base-font text-base leading-7 text-gray-350 mb-4 line-clamp-3">{post?.description} </p></div>
                <Link to="/blogs/blog-details" className="base-font-heading text-base text-orange-150" state={post} >
                  {t('ViewPost')}
                </Link>
                <div className="w-[78.032px] h-[0.723px] bg-orange-150"></div>
            </div>
        </div>
    );
}

export default PostCard;
