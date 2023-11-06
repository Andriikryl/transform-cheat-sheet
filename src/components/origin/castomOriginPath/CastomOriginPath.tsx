"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { InputFrame } from "@/components/inputFrame/InputFrame";

export default function CastomOriginPath() {
  const [rotate, setRotate] = useState(0);
  const [selectedOptionX, setSelectedOptionX] = useState("bottom");
  const [selectedOptionY, setSelectedOptionY] = useState("right");
  const [value, setValue] = useState(0);
  return (
    <div>
      <div className={styles.flex__group}>
        <code className={styles.code__block}>
          transform-origin: {selectedOptionX} {selectedOptionY} {value}px;
        </code>
        <div className={styles.cube__box}>
          <div className={styles.border__box}></div>
          <div
            className={styles.rotate__box}
            style={
              {
                "--rotate": `${rotate}turn`,
                "--originX": `${selectedOptionX}`,
                "--originY": `${selectedOptionY}`,
                "--valuePx": `${value}px`,
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
        <form className={styles.form__direaction}>
          <fieldset>
            <legend className={styles.legend}>Diraction</legend>
            <select
              className={styles.select}
              value={selectedOptionX}
              onChange={(event) => {
                setSelectedOptionX(event.target.value);
              }}
            >
              <option value="top">top</option>
              <option value="bottom">bottom</option>
            </select>
          </fieldset>
        </form>
        <form className={styles.form__direaction}>
          <fieldset>
            <legend className={styles.legend}>Diraction</legend>
            <select
              className={styles.select}
              value={selectedOptionY}
              onChange={(event) => {
                setSelectedOptionY(event.target.value);
              }}
            >
              <option value="left">left</option>
              <option value="right">right</option>
            </select>
          </fieldset>
        </form>
        <InputFrame
          className={styles.form__angel}
          value={value}
          set={setValue}
          min={-100}
          max={100}
          step={1}
          rangeLabel="Value px"
          numberLabel="Value px number"
        ></InputFrame>
      </div>
    </div>
  );
}
