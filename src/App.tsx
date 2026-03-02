import Navbar from "./components/navigationBar"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Undergraduate from "./pages/Undergraduate"
import Masters from "./pages/Masters"
import Footer from "./components/footer"
import General from "./pages/General"
import NotFound from "./pages/NotFound"
import {routes} from './helpers/routes'
function App() {

  return (
    <div className="mx-5">
    <Navbar/>
    <Routes>
      <Route path={routes.home} element={<Home/>}/>
      <Route path={routes.undergraduate} element={<Undergraduate/>}/>
      <Route path={routes.masters} element={<Masters/>}/>
      <Route path={routes.general} element={<General/>}/>
      <Route path={routes.notFound} element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
