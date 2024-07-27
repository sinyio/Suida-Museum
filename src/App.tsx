import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Visit from "./pages/Visit/Visit"
import OnlineTour from "./pages/OnlineTour/OnlineTour"
import Events from "./pages/Events/Events"

const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/online-tour" element={<OnlineTour />} />
          <Route path="/events" element={<Events />} />
          <Route path="/online-tour" element={<OnlineTour />} />
        </Routes> 
      </Layout>
    </BrowserRouter>
  )
}

export default App
