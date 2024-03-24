import React, { useState } from "react";
import Title from "./components/Title/Title";
import Interval from "./components/Interval/Interval";
import CarouselPagination from "./components/Carousel/Pagination/CarouselPagination";
import Carousel from "./components/Carousel/Carousel";
import { periodsData } from "./data/historic-dates";

function App() {
  const periods = periodsData;
  const [currentPeriod, setCurrentPeriod] = useState(0);

  const moveToNextDate = () => {
    setCurrentPeriod((prevState) => prevState + 1);
  };

  const moveToPreviousDate = () => {
    setCurrentPeriod((prevState) => prevState - 1);
  };

  const handleClickDate = (index: number) => {
    setCurrentPeriod(index);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="verticalLine"></div>
        <div className="horizontalLine"></div>
        <Title />
        <Interval period={periods[currentPeriod]} />
        <CarouselPagination
          currentPeriod={currentPeriod}
          moveToNextDate={moveToNextDate}
          moveToPreviousDate={moveToPreviousDate}
        />
        <Carousel
          periods={periods}
          handleClickDate={handleClickDate}
          currentPeriod={currentPeriod}
        />
      </div>
    </div>
  );
}

export default App;
