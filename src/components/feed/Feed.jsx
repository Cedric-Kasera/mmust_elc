import "./Feed.css";
import { db } from "../../firebase/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import PostCard from "./PostCard";
import MyInstagramLoader from "../Loader";


const Feed = () => {
    const [eventsList, setEventsList] = useState([]);
    const [loading, setLoading] = useState(true); // State to manage loading

    const eventsCollectionRef = collection(db, "events");

    useEffect(() => {
        const getEvents = async () => {
            // Simulate a delay of 3 seconds
            await new Promise(resolve => setTimeout(resolve, 3000));

            //Read data from DB and display it
            try {
                const data = await getDocs(eventsCollectionRef);
                const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id, }));
                // console.log(filteredData);

                setEventsList(filteredData)
                setLoading(false) // Set loading to false after data is loaded
            } catch (error) {
                console.error(error);
                setLoading(false) // Set loading to false in case of error
            }
        }

        getEvents();
    }, []);

    if (loading) {
        return <MyInstagramLoader />; // Display the loader while loading
    }

    return (
        <section className="flex flex-col gap-4">
            {eventsList.map((event) => (
                <PostCard event={event} key={event.id} />
            ))}
        </section>
    )
}

export default Feed
