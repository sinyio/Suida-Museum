import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Visit from "./pages/Visit/Visit";
import OnlineTour from "./pages/OnlineTour/OnlineTour";
import Events from "./pages/Events/Events";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Exhibits from "./pages/Exhibits/Exhibits";

const App: FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/online-tour" element={<OnlineTour />} />
          <Route path="/about" element={<About />} />     
          <Route path="/exhibits" element={<Exhibits />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
