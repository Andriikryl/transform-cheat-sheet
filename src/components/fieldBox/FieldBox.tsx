import React from "react";
import styles from "./style.module.css";
import Graph from "../graph/Graph";

interface FieldBoxProps {
  children: React.ReactNode;
}

export default function FieldBox({ children }: FieldBoxProps) {
  return (
    <div className={styles.wrapper__box}>
      <Graph
        from={1}
        to={10}
        step={1}
        classGraph={styles.graph}
        classReng={styles.reng}
      />
      <Graph
        from={1}
        to={10}
        step={1}
        classGraph={styles.graph__col}
        classReng={styles.reng__col}
      />
      <div className={styles.x__axis}>
        <span>x</span>
      </div>
      <div className={styles.y__axis}>
        <span>y</span>
      </div>
      {children}
    </div>
  );
}
