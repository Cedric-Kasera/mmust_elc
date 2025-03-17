import "./AboutInfo.css";
import our_story from "../../assets/points.jpg";

const AboutInfo = () => {
    return (
        <section className="">
            <div className="about-info">
                <div className="about-left">
                    <img src={our_story} alt="" className="about-img" />
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

            <div className="about-info flex flex-row-reverse">
                <div className="about-left">
                    <img src={our_story} alt="" className="about-img" />
                </div>
                <div className="about-right">
                    <h3>OUR MISSION</h3>
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

            <div className="about-info">
                <div className="about-left">
                    <img src={our_story} alt="" className="about-img" />
                </div>
                <div className="about-right">
                    <h3>OUR VISION</h3>
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
        </section>
    )
}

export default AboutInfo
