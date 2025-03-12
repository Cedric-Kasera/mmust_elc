import "./Info.css";
import play_icon from "../../assets/play-icon.png";
import PropTypes from "prop-types";

const Info = ({ setPlayState }) => {
    return (
        <div className="info">
            <div className="about-left">
                <img src="https://i.postimg.cc/mZSCCjWy/about.png" alt="" className="about-img" />
                <img src={play_icon} alt="" className="play-icon cursor-pointer" onClick={() => {setPlayState(true)}} />
            </div>

            <div className="about-right">
                <h3>ABOUT MMUST ELC</h3>
                <h2 className="font-extrabold">Nurturing Tomorrow&apos;s Leaders Today </h2>
                <p>
                    Embark on a transformative educational journey with our university&apos;s comprehensive education programs.
                </p>

                <p>
                    With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
                </p>

                <p>
                    Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
                </p>
            </div>
        </div>
    )
}

Info.propTypes = {
    setPlayState: PropTypes.bool.isRequired,
};

export default Info
