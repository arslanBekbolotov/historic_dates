import React from "react";
import { eventsData } from "../../data/historic-dates";
import Slider from "../Slider/Slider";
import { SwiperSlide } from "swiper/react";
import styles from "./Periods.module.scss";

interface Props {
  currentPeriod: number;
}

const Periods: React.FC<Props> = ({ currentPeriod }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Slider>
        {eventsData[currentPeriod].map((periodInfo, index) => (
          <SwiperSlide key={index} style={{ maxWidth: "400px" }}>
            <p className={styles.year}>{periodInfo.year}</p>
            <p className={styles.event}>{periodInfo.event}</p>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default Periods;
