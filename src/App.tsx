import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contacts from "./pages/Contacts/Contacts"
import OnlineTour from "./pages/OnlineTour/OnlineTour"


const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/online-tour" element={<OnlineTour />} />
        </Routes> 
      </Layout>
    </BrowserRouter>
  )
}

export default App
