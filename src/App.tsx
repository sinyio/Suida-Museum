import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"


const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
