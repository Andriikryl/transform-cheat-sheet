"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import Cube from "../cube/Cube";
import { InputFrame } from "../inputFrame/InputFrame";

export default function Rotate() {
  const [rotate, setRotate] = useState(90);

  return (
    <div>
      <h2>Rotate</h2>
      <div className={styles.wrapper__box}>
        <div className={styles.x__axis}>
          <span>x</span>
        </div>
        <div className={styles.y__axis}>
          <span>y</span>
        </div>
        <div
          className={styles.rotate__box}
          style={
            {
              "--rotate": `${rotate}deg`,
            } as React.CSSProperties
          }
        >
          <Cube
            width={150}
            height={150}
            depth={150}
            className={styles.bg__colorSied}
            cuboidClass={styles.cuboid__animation}
          />
        </div>
      </div>
      <InputFrame
        className={styles.form__angel}
        value={rotate}
        set={setRotate}
        min={0}
        max={360}
        step={1}
        rangeLabel="rotate"
        numberLabel="rotate number"
      ></InputFrame>
    </div>
  );
}
