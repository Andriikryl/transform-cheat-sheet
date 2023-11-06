"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { InputFrame } from "@/components/inputFrame/InputFrame";

export default function TranslateCalc() {
  const [percentage, setPercentage] = useState(0);
  const [pixels, setPixels] = useState(0);
  return (
    <div className={styles.flex__group}>
      <code className={styles.code__block}>
        transform: translateX(calc({percentage}% + {pixels}px));
      </code>
      <div className={styles.cube__box}>
        <div className={styles.border__box}></div>
        <div
          className={styles.rotate__box}
          style={
            {
              "--percentage": `${percentage}%`,
              "--pixels": `${pixels}px`,
            } as React.CSSProperties
          }
        >
          <div>
            <span>{percentage} %</span>
            <span>{pixels} px</span>
          </div>
        </div>
      </div>
      <InputFrame
        className={styles.form__angel}
        value={percentage}
        set={setPercentage}
        min={-100}
        max={100}
        step={1}
        rangeLabel="Percentage"
        numberLabel="Percentage number"
      ></InputFrame>
      <InputFrame
        className={styles.form__angel}
        value={pixels}
        set={setPixels}
        min={-50}
        max={50}
        step={1}
        rangeLabel="Pixels"
        numberLabel="Pixels"
      ></InputFrame>
    </div>
  );
}
