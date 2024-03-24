import React, { useState } from "react";
import Title from "./components/Title/Title";
import CarouselPagination from "./components/Carousel/Pagination/CarouselPagination";
import Carousel from "./components/Carousel/Carousel";
import { periodsData } from "./data/historic-dates";
import Periods from "./components/Periods/Periods";

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
    <div className="main-wrapper">
      <span className="vertical_line" />
      <div className="main-title">
        <Title />
      </div>
      <Carousel
        periods={periods}
        handleClickDate={handleClickDate}
        currentPeriod={currentPeriod}
      />
      <div style={{ padding: "0 5%", margin: "-40px 0 56px" }}>
        <CarouselPagination
          currentPeriod={currentPeriod}
          moveToNextDate={moveToNextDate}
          moveToPreviousDate={moveToPreviousDate}
        />
      </div>
      <div className="periods_section">
        <Periods currentPeriod={currentPeriod} />
      </div>
    </div>
  );
}

export default App;
