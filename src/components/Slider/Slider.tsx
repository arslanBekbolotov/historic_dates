import React, { PropsWithChildren } from "react";
import { Navigation, EffectFade, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import styles from "./Slider.module.scss";
import "swiper/css/pagination";
import "swiper/css";

const Slider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: "#button_forward",
        prevEl: "#button_back",
      }}
      modules={[Navigation, Pagination, EffectFade]}
      className={styles.slider}
      style={{ overflow: "visible", display: "flex", padding: "0 5%" }}
    >
      {children}
      <div className={styles.slider_buttons}>
        <button id="button_forward" className={styles.button_forward}>
          <img
            className={styles.button_forward_icon}
            src="/Vector%202.svg"
            alt="вперед"
          />
        </button>
        <button id="button_back" className={styles.button_back}>
          <img
            className={styles.button_back_icon}
            src="/Vector%201.svg"
            alt="назад"
          />
        </button>
      </div>
    </Swiper>
  );
};

export default Slider;
