import "./Feed.css";
import { db } from "../../firebase/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import PostCard from "./PostCard";

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
        <section className="flex flex-col gap-4">
            {eventsList.map((event) => (
                <PostCard event={event} key={event.id} />
            ))}
        </section>
    )
}

export default Feed
