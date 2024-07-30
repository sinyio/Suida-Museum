import { YMaps, Panorama } from "@pbe/react-yandex-maps";
import pagesCSS from "../Pages.module.css";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tours from "../../assets/tours/tours";

const apiKey = import.meta.env.VITE_REACT_APP_YANDEX_MAPS_API_KEY;

type OnlineTour = {
  id: string;
  title: string;
  coords?: number[];
}

const TourPage: FC = () => {
  const [currentTour, setCurrentTour] = useState<OnlineTour>({
    id: "",
    title: "",
    coords: [0, 0],
  });

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const TourDetail = tours.find((tour) => tour.id === id);
    if (TourDetail) {
      setCurrentTour({
        id: TourDetail.id,
        title: TourDetail.title,
        coords: TourDetail.coords,
      });
    }
  }, [id]);

  return (
    <main className={pagesCSS.container}>
      <section style={{ display: "flex", justifyContent: "center" }}>
        <YMaps query={{ apikey: apiKey }}>
          <Panorama
            defaultPoint={currentTour.coords}
            width="80vw"
            height="80vh"
          />
        </YMaps>
      </section>
    </main>
  );
};

export default TourPage;
