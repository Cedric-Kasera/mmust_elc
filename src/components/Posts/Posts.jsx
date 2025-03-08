import Profile from "../../assets/user.png"
import PostPic1 from "../../assets/post1.jpg"
import { IoMdMore } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";

const Posts = () => {
    return (
        <div className="w-full lg:w-3/5 bg-gray-200 rounded-xl my-8">
            <div className="p-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={Profile} alt="" className="w-8 h-8 rounded-full object-cover" />
                        <span className="text-base font-medium mx-2">Event Manager | Admin</span>
                        <span className="text-xs">5 mins ago</span>
                    </div>

                    <IoMdMore className="w-6 h-6 font-bold cursor-pointer"/>
                </div>
                <div className="my-3">
                    <span>Hey! Its my first post :)</span>
                    <img src={PostPic1} alt="" className="mt-5 rounded-md w-full max-h-[500px] object-contain" />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between gap-4">
                        <span className="flex items-center">
                            <FcLike className="w-5 h-5 mr-1 cursor-pointer" />
                            <p className="text-[15px]">32 People likes</p>
                        </span>
                        <span className="flex items-center cursor-pointer">
                            <FaComment className="w-5 h-5 mr-1" />
                            <p className="text-[15px] text-blue-600 underline underline-offset-2">12 comments</p>
                        </span>
                    </div>
                    <div className="flex items-center bg-gray-300 hover:bg-gray-400 duration-200 py-1 px-2 rounded-md cursor-pointer">
                        <IoShareSocialOutline className="w-5 h-5 mr-1r" />
                        <span>Share</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts
