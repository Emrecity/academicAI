import Navbar from "./components/navigationBar"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Undergraduate from "./pages/Undergraduate"
import Masters from "./pages/Masters"
import Footer from "./components/footer"
import General from "./pages/General"
function App() {

  return (
    <div className="mx-5">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/undergraduate.tsx" element={<Undergraduate/>}/>
      <Route path="/masters" element={<Masters/>}/>
      <Route path="/general" element={<General/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
