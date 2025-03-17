import "./Player.css"
import player from "../../assets/player.mp4"
import PropTypes from "prop-types";
import { FaXmark } from "react-icons/fa6";

const Player = ({ playState, setPlayState }) => {
    const handlePlayIconClick = () => {
        setPlayState(false);
    };

    return (
        <div className={`player ${playState ? " " : "hide"}`}>
            <FaXmark className="cancel" onClick={handlePlayIconClick} />
            <video src={player} controls ></video>
        </div>
    )
}

Player.propTypes = {
    playState: PropTypes.bool.isRequired,
    setPlayState: PropTypes.func.isRequired,
};

export default Player