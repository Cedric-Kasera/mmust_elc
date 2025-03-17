import { Link } from "react-router-dom";
import "./AboutCTA.css";
const AboutCTA = () => {
    return (
        <section>
            <div>
                <Link to="/events">
                    <button className="button">See Our Events</button>
                </Link>
            </div>
        </section>
    )
}

export default AboutCTA
