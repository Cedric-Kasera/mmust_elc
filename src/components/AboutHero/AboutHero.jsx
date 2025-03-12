import "./AboutHero.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutHero = () => {
    return (
        <div className="font-sans bg-gray-400 py-20 min-h-screen flex flex-col justify-center">
            <section className="bg-cover bg-center h-96" style={{ backgroundImage: `url("https://i.postimg.cc/hGJN7hJV/student-Dis.jpg")` }}>
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-center text-white">
                    <h2 className="text-5xl font-bold">Welcome to MMUST ELC Club</h2>
                </div>
            </section>


            <section className="max-w-screen-xl mx-auto px-6 my-20 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left">
                    <h3 className="text-4xl font-semibold mb-4">Our Mission</h3>
                    <p className="text-lg">
                        The MMUST ELC Club is committed to fostering creativity, leadership, and collaboration within the community.
                        Our mission is to empower members through learning, engagement, and development.
                    </p>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <img src="https://i.postimg.cc/QdCyRVJv/study.jpg" alt="Our Mission" className="w-full h-64 object-cover rounded-lg shadow-lg" />
                </div>
            </section>


            <section className="max-w-screen-xl mx-auto px-6 my-20 flex flex-col md:flex-row-reverse items-center md:space-x-10">
                <div className="md:w-1/2 text-center md:text-left space-y-6">
                    <h3 className="text-4xl font-semibold">Our Story</h3>
                    <p className="text-lg">
                        Founded by a group of passionate students, the MMUST ELC Club has grown to become a vibrant community
                        where creativity thrives. We are driven by the desire to enrich the student experience and promote learning.
                    </p>
                    <p className="text-lg">
                        We have organized events, workshops, and activities that encourage personal growth and foster collaboration.
                    </p>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <img src="https://i.postimg.cc/x1pWCLd0/group.jpg" alt="Our Story" className="w-full h-64 object-cover rounded-lg shadow-lg" />
                </div>
            </section>


            <section className="text-center my-10">
                <Link to="/events">
                    <button className="bg-blue-500 text-white px-6 py-3 text-xl rounded-md hover:bg-blue-700 transition-all">
                        See Our Events
                        <FaArrowRight className="inline ml-2" />
                    </button>
                </Link>
            </section>

        </div>
    )
}

export default AboutHero
