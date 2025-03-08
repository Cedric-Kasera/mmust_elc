import { Route, Routes, Link } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Events from "./pages/Events"

function App() {

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-3 px-3 sticky top-0">
        <Navbar />
      </div>

      <div className="pt-4 px-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
