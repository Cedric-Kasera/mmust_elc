import "./Feed.css";
import PropTypes from 'prop-types';
import timeAgo from "../../utils/timeUtils";
import like_icon from "../../assets/liked.png";
import comment from "../../assets/comment.png";
import share from "../../assets/share.png";
// import not_liked_icon from "../../assets/not-liked.png";

const PostCard = ({ event }) => {
    const firestoreTimestamp = { seconds: 1738998000, nanoseconds: 380000000 };
    console.log(timeAgo(firestoreTimestamp));

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

                    <div className="">
                        <img src={event.image} alt="" className="event-img" />
                    </div>
                </div>

                <div className="event-bottom">
                    <div className="bottom-left">
                        <span className="btn"><img src={like_icon} alt="" className="icon"/><p className="counter"> {event.likes} likes </p></span>

                        <span className="btn"><img src={comment} alt="" className="icon"/><p className="counter">{event.likes} comments</p></span>
                    </div>
                    <div className="bottom-right">
                        
                        <span className="btn"><img src={share} alt="" className="icon"/><p className="counter">Share</p></span>
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
        likes: PropTypes.number.isRequired
    }).isRequired
};

export default PostCard;
