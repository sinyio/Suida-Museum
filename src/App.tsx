import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Visit from "./pages/Visit/Visit";
import OnlineTour from "./pages/OnlineTour/OnlineTour";
import Events from "./pages/Events/Events";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import EventDetail from "./pages/EventDetail/EventDetail";
import ExhibitsPage from "./pages/ExhibitsPage/ExhibitsPage";

const App: FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/online-tour" element={<OnlineTour />} />
          <Route path="/about" element={<About />} />     
          <Route path="/exhibits" element={<ExhibitsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
