import { FC } from "react"
import { Layout } from "./components/Layout/Layout"
import Home from "./pages/Home/Home"

const App: FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default App
