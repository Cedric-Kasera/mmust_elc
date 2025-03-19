import "./Feed.css";
import PropTypes from 'prop-types';
import timeAgo from "../../utils/timeUtils";
import liked_icon from "../../assets/liked.png";
import comment from "../../assets/comment.png";
import share from "../../assets/share.png";
import not_liked_icon from "../../assets/not-liked.png";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

const PostCard = ({ event }) => {
    const [isLiked, setIsLiked] = useState(false);
    //Likes Update
    const [likes, setLikes] = useState(event.likes);



    const handleLikeClick = async () => {
        const newLikes = isLiked ? likes - 1 : likes + 1;
        setLikes(newLikes);
        setIsLiked(!isLiked);

        const eventDocRef = doc(db, "events", event.id);
        await updateDoc(eventDocRef, {
            likes: newLikes
        });
    };

    return (
        <div className="event-card" >
            <div className="event-wrapper">
                <div className="event-top">
                    <div className="profile">
                        <img src={event.profile} alt="" className="profile-img" />
                    </div>

                    <div className="profile-info">
                        <span className="profile-name">MMUST Equity Leaders Chapter</span>
                        <span className="profile-date"> {timeAgo(event.date)} </span>
                    </div>
                </div>

                <div className="event-center">
                    <h1> {event.title} </h1>
                    <p> {event.description} </p>

                    <div className="flex gap-2">
                        <img src={event.image} alt="" className="event-img" />
                        <img src={event.image} alt="" className="event-img" />
                    </div>
                </div>

                <div className="event-bottom">
                    <div className="bottom-left">
                        <span className="btn" >
                            <img src={isLiked ? liked_icon : not_liked_icon} alt="" className="icon" onClick={handleLikeClick} />
                            <p className="counter"> {likes} likes </p>
                        </span>

                        <span className="btn">
                            <img src={comment} alt="" className="icon" />
                            <p className="counter">{event.likes} comments</p>
                        </span>
                    </div>
                    <div className="bottom-right">

                        <span className="btn">
                            <img src={share} alt="" className="share-icon" />
                            <p className="counter">Share</p>
                        </span>
                    </div>
                </div>
            </div>

            {/* <img src={not_liked_icon} alt="" /> */}

        </div>
    )
}

PostCard.propTypes = {
    event: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        profile: PropTypes.string.isRequired,
        date: PropTypes.shape({
            seconds: PropTypes.number.isRequired,
            nanoseconds: PropTypes.number.isRequired
        }).isRequired,
        likes: PropTypes.number.isRequired,
        comment: PropTypes.number.isRequired
    }).isRequired
};

export default PostCard;
