import React, { useState } from "react";
import Title from "./components/Title/Title";
import Interval from "./components/Interval/Interval";
import CarouselPagination from "./components/Carousel/Pagination/CarouselPagination";
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

  return (
    <div className="App">
      <div className="container">
        <Title />
        <Interval dates={periods[currentPeriod]} />
        <CarouselPagination
          currentPeriod={currentPeriod}
          moveToNextDate={moveToNextDate}
          moveToPreviousDate={moveToPreviousDate}
        />
      </div>
    </div>
  );
}

export default App;
