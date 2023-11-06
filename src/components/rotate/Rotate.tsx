"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import Cube from "../cube/Cube";
import { InputFrame } from "../inputFrame/InputFrame";
import { random } from "../utils/random";
import FieldBox from "../fieldBox/FieldBox";
import RotateTurn from "./rotateTurn/RotateTurn";

export default function Rotate() {
  const [rotate, setRotate] = useState(90);

  const handelClickRandom = () => {
    setRotate((state) => random(1, 360));
  };

  return (
    <div className={styles.rotate}>
      <h2 className={styles.rotate__title}>Rotate</h2>
      <p className={styles.description__block}>
        The rotate property accepts an angle to rotate an element, and
        optionally an axis to rotate it around.
      </p>
      <div className={styles.flex__group}>
        <FieldBox>
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
        </FieldBox>
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
        <button className={styles.button} onClick={handelClickRandom}>
          random
        </button>
      </div>
      <RotateTurn />
    </div>
  );
}
