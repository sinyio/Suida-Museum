import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FC } from "react";
import tours from "../../assets/tours/tours.ts";
import TourCard from "../TourCard/TourCard";

const TourList: FC = () => {
  return (
    <Carousel showThumbs={false} showStatus={false} emulateTouch>
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
          id={tour.id}
          title={tour.title}
          description={tour.description}
          img={tour.img}
        />
      ))}
    </Carousel>
  );
};

export default TourList;
