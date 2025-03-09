import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Events from "./pages/Events"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <div className="bg-[#fdfdfdff]">
      <Navbar />

      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>

      <div className="main">
        <Footer />
      </div>
    </div>
  )
}

export default App
