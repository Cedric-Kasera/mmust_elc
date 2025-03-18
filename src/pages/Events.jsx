import AboutHero from "../components/AboutHero/AboutHero"
import Feed from "../components/feed/Feed"
import TopNews from "../components/feed/TopNews"

const Events = () => {
  return (
    <div>
      <AboutHero />
      <div className="event-page main">
        <Feed />
        <TopNews />
      </div>
    </div>
  )
}

export default Events
