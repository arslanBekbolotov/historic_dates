import React from "react";
import { IDateInterval } from "../../types";
import styles from "./Interval.module.scss";

interface Props {
  period: IDateInterval;
}

const Interval: React.FC<Props> = ({ period }) => {
  return (
    <h1 className={styles.date_interval}>
      <span className={styles.start}>{period?.start}</span>
      <span className={styles.end}>{period?.end}</span>
    </h1>
  );
};

export default Interval;
