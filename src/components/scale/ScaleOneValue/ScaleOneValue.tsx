"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { InputFrame } from "@/components/inputFrame/InputFrame";

export default function ScaleOneValue() {
  const [scale, setScale] = useState(0);
  return (
    <div className={styles.flex__group}>
      <code className={styles.code__block}>transform: scale({scale});</code>
      <div className={styles.cube__box}>
        <div className={styles.border__box}></div>
        <div
          className={styles.rotate__box}
          style={
            {
              "--scale": `${scale}`,
            } as React.CSSProperties
          }
        >
          <div>
            <span>{scale}</span>
          </div>
        </div>
      </div>
      <InputFrame
        className={styles.form__angel}
        value={scale}
        set={setScale}
        min={0}
        max={2}
        step={0.1}
        rangeLabel="Percentage"
        numberLabel="Percentage number"
      ></InputFrame>
    </div>
  );
}
