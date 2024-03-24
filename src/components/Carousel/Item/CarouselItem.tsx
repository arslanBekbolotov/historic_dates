import React from "react";

import styles from "./CarouselItem.module.scss";

interface Props {
  index: number;
  rotation: number[];
  rotationCircle: number[];
  handleClickDate: (index: number) => void;
  currentPeriod: number;
}

const CarouselItem: React.FC<Props> = ({
  index,
  rotation,
  rotationCircle,
  handleClickDate,
  currentPeriod,
}) => {
  const topics: string[] = [
    "Технологии",
    "Кино",
    "Литература",
    "Театр",
    "Спорт",
    "Наука",
  ];

  return (
    <div
      className={styles.topic}
      style={{ transform: `rotate(${rotation[index]}deg)` }}
      onClick={() => handleClickDate(index)}
    >
      <div
        className={
          currentPeriod === index ? styles.active : styles.topic_circle
        }
      >
        <div
          style={{
            transform: `rotate(${rotationCircle[index]}deg)`,
            transitionDuration: "0ms",
          }}
        >
          <span
            className={`${currentPeriod === index ? styles.active_title : ""} ${styles.topic_title}`}
          >
            {topics[index]}
          </span>
        </div>
        <div
          className={styles.topic_circle_content}
          style={{
            transform: `rotate(${rotationCircle[index]}deg)`,
            transitionDuration: "2s",
          }}
        >
          {index + 1}
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
