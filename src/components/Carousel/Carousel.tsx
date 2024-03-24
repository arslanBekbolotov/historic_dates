import React, { useCallback, useEffect, useRef, useState } from "react";
import CarouselItem from "./Item/CarouselItem";
import { getRotation } from "../../utils/getRotation";
import { getArrayForward } from "../../utils/getArrayForward";
import { getArrayBack } from "../../utils/getArrayBack";
import Interval from "../Interval/Interval";
import { IDateInterval } from "../../types";
import styles from "./Carousel.module.scss";

interface Props {
  periods: IDateInterval[];
  handleClickDate: (index: number) => void;
  currentPeriod: number;
}

const Carousel: React.FC<Props> = ({
  periods,
  handleClickDate,
  currentPeriod,
}) => {
  const [arrayForward, setArrayForward] = useState<number[]>([]);
  const [arrayBack, setArrayBack] = useState<number[]>([]);
  const [currentRotation, setCurrentRotation] = useState<number>(0);
  const [rotationCircle, setRotationCircle] = useState<number[]>([]);

  const rotation = useRef<number[]>(getRotation(periods.length));

  const rotationCarousel = useCallback(() => {
    let oneDivision = 360 / periods.length;

    if (arrayBack.includes(currentPeriod)) {
      let count = arrayBack.indexOf(currentPeriod) + 1;
      let value = count * oneDivision;
      setCurrentRotation((prev) => prev - value);
      setRotationCircle((prev) => prev.map((item) => item + value));
    } else if (arrayForward.includes(currentPeriod)) {
      let value: number = 0;
      let count = arrayForward.indexOf(currentPeriod) + 1;
      if (count === 1) {
        value = oneDivision * 2;
      }
      if (count === 2) {
        value = oneDivision;
      }

      setCurrentRotation((prev) => prev + value);

      setRotationCircle((prev) => prev.map((item) => item - value));
    }
  }, [arrayBack, arrayForward, currentPeriod, periods.length]);

  useEffect(() => {
    const rotation = getRotation(periods.length);
    setRotationCircle(rotation.map((item) => -item));
  }, [periods.length]);

  useEffect(() => {
    rotationCarousel();
  }, [currentPeriod, rotationCarousel]);

  useEffect(() => {
    setArrayForward(getArrayForward(periods.length, currentPeriod));
    setArrayBack(getArrayBack(periods.length, currentPeriod));
  }, [currentRotation, currentPeriod, periods.length]);

  return (
    <div className={styles.carousel_wrapper}>
      <span className={styles.horizontal_line} />
      <div className={styles.interval}>
        <Interval period={periods[currentPeriod]} />
      </div>

      <div
        className={styles.carousel}
        style={{ transform: `rotate(${currentRotation}deg)` }}
      >
        {periods.map((_, index) => (
          <CarouselItem
            index={index}
            key={index}
            rotation={rotation.current}
            rotationCircle={rotationCircle}
            handleClickDate={handleClickDate}
            currentPeriod={currentPeriod}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
