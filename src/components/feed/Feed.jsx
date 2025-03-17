import "./Feed.css";
import { db } from "../../firebase/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

const Feed = () => {
    const [eventsList, setEventsList] = useState([]);

    const eventsCollectionRef = collection(db, "events");

    useEffect(() => {
        const getEvents = async () => {
            //Read data from DB and display it
            try {
                const data = await getDocs(eventsCollectionRef);
                const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id, }));
                console.log(filteredData);

                setEventsList(filteredData)
            } catch (error) {
                console.error(error);
            }
        }

        getEvents();
    }, []);

    return (
        <section className="main">
            <div>
                {eventsList.map((event) => (
                    <div key={event.id} className="events">
                        <h1> {event.title} </h1>
                        <p> {event.description} </p>

                        <div className="">
                            <img src={event.image} alt="" className="about-img" />
                        </div>

                        <span> {event.date.seconds.toString()} </span>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Feed
