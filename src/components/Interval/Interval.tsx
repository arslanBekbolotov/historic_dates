import React from "react";
import { IDateInterval } from "../../types";
import styles from "./Interval.module.scss";

interface Props {
  dates: IDateInterval;
}

const Interval: React.FC<Props> = ({ dates }) => {
  return (
    <h1 className={styles.date_interval}>
      <span className={styles.start}>{dates.start}</span>
      <span className={styles.end}>{dates.end}</span>
    </h1>
  );
};

export default Interval;
