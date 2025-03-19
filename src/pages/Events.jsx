import Feed from "../components/feed/Feed"
import FeedHero from "../components/feed/FeedHero"
import TopNews from "../components/feed/TopNews"

const Events = () => {
  return (
    <div>
      <FeedHero />
      <div className="event-page main">
        <Feed />
        <TopNews />
      </div>
    </div>
  )
}

export default Events
