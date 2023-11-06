"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { InputFrame } from "@/components/inputFrame/InputFrame";

export default function RotateTurn() {
  const [rotate, setRotate] = useState(0);
  return (
    <div className={styles.flex__group}>
      <code className={styles.code__block}>
        transform: rotate({rotate} turn);
      </code>
      <div className={styles.cube__box}>
        <div className={styles.border__box}></div>
        <div
          className={styles.rotate__box}
          style={
            {
              "--rotate": `${rotate}turn`,
            } as React.CSSProperties
          }
        >
          <div>
            <span>{rotate}</span>
          </div>
        </div>
      </div>
      <InputFrame
        className={styles.form__angel}
        value={rotate}
        set={setRotate}
        min={-1}
        max={1}
        step={0.1}
        rangeLabel="Rotate turn"
        numberLabel="Rotate turn number"
      ></InputFrame>
    </div>
  );
}
