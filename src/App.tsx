import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import './utils/i18n'
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import VisitPage from "./pages/VisitPage/VisitPage";
import OnlineTourPage from "./pages/OnlineTourPage/OnlineTourPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import EventDetailPage from "./pages/EventDetailPage/EventDetailPage";
import ExhibitsPage from "./pages/ExhibitsPage/ExhibitsPage";
import TourPage from "./pages/TourPage/TourPage";

const App: FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
          <Route path="/visit" element={<VisitPage />} />
          <Route path="/online-tour" element={<OnlineTourPage />} />
          <Route path="/online-tour/:id" element={<TourPage />} />
          <Route path="/about" element={<AboutPage />} />     
          <Route path="/exhibits" element={<ExhibitsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
