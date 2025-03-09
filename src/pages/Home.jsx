import { useState } from "react"
import Info from "../components/About/Info"
import Contact from "../components/Contact/Contact"
import Gallery from "../components/gallery/Gallery"
import Hero from "../components/Hero/Hero"
import Player from "../components/Player/Player"
import Programs from "../components/program/Programs"
import Testimonials from "../components/testimonials/Testimonials"
import Title from "../components/title/Title"

const Home = () => {
  const [playState, setPlayTest] = useState(false);


  return (
    <div className="bg-[#fdfdfdff]">
      <Hero />
      <div className="main">
        <Title subTitle="Our Programs" title="What We Offer" />
        <Programs />
        <Info setPlayTest={setPlayTest} />

        <Title subTitle="Gallery" title="Chapter Photos" />
        <Gallery />

        <Title subTitle="Testimonials" title="What Others Have To Say" />
        <Testimonials />

        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
      </div>

      <Player playState={playState} setPlayState={setPlayTest} />
    </div>
  )
}

export default Home; Title
