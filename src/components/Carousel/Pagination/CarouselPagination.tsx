import React from "react";
import styles from "./CarouselPagination.module.scss";

interface Props {
  currentPeriod: number;
  moveToNextDate: () => void;
  moveToPreviousDate: () => void;
}

const CarouselPagination: React.FC<Props> = ({
  currentPeriod,
  moveToNextDate,
  moveToPreviousDate,
}) => {
  return (
    <div>
      <div className={styles.pagination_content}>0{currentPeriod + 1}/06</div>
      <div className={styles.pagination_buttons}>
        <button
          onClick={moveToPreviousDate}
          style={{ opacity: currentPeriod === 0 ? 0.6 : 1 }}
          disabled={currentPeriod === 0}
        >
          <img src="/Vector%201.svg" alt="вперед" />
        </button>
        <button
          onClick={moveToNextDate}
          style={{ opacity: currentPeriod === 5 ? 0.6 : 1 }}
          disabled={currentPeriod === 5}
        >
          <img src="/Vector%202.svg" alt="назад" />
        </button>
      </div>
    </div>
  );
};

export default CarouselPagination;
