import "./Player.css"
import player from "../../assets/player.mp4"
import PropTypes from "prop-types";

const Player = ({ playState }) => {
    return (
        <div className={`player ${playState ? "" : "hide"}`}>
            <video src={player} controls ></video>
        </div>
    )
}

Player.propTypes = {
    playState: PropTypes.bool.isRequired,
};

export default Player
