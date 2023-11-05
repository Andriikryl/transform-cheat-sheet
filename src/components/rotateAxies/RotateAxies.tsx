"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import Cube from "../cube/Cube";
import { InputFrame } from "../inputFrame/InputFrame";
import { random } from "../utils/random";
import FieldBox from "../fieldBox/FieldBox";
export default function RotateAxies() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);

  const handelClickRandomX = () => {
    setRotateX((state) => random(1, 360));
  };

  const handelClickRandomY = () => {
    setRotateY((state) => random(1, 360));
  };

  const handelClickRandomZ = () => {
    setRotateZ((state) => random(1, 360));
  };
  return (
    <div className={styles.rotate}>
      <h2 className={styles.rotate__title}>Rotate (XYZ)</h2>
      <p className={styles.description__block}>
        The axis can be specified with either the x, y, or z keywords, which
        specify a rotation around that axis, equivalent to the rotateX(),
        rotateY(), and rotateZ() transform functions. Alternately, the axis can
        be specified explicitly by giving three numbers representing the x, y,
        and z components of an origin-centered vector, equivalent to the
        rotate3d() function.
      </p>
      <div className={styles.flex__group}>
        <div className={styles.axies}>
          <div className={styles.axies__side}></div>
          <div className={styles.axies__side}></div>
          <div className={styles.axies__side}></div>
        </div>
        <FieldBox>
          <div
            className={styles.rotate__box}
            style={
              {
                "--rotateX": `${rotateX}deg`,
                "--rotateY": `${rotateY}deg`,
                "--rotateZ": `${rotateZ}deg`,
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
          value={rotateX}
          set={setRotateX}
          min={0}
          max={360}
          step={1}
          rangeLabel="rotate X"
          numberLabel="rotate X number"
        ></InputFrame>
        <InputFrame
          className={styles.form__angel}
          value={rotateY}
          set={setRotateY}
          min={0}
          max={360}
          step={1}
          rangeLabel="rotate Y"
          numberLabel="rotate Y number"
        ></InputFrame>
        <InputFrame
          className={styles.form__angel}
          value={rotateZ}
          set={setRotateZ}
          min={0}
          max={360}
          step={1}
          rangeLabel="rotate Z"
          numberLabel="rotate Z number"
        ></InputFrame>
        <button className={styles.button} onClick={handelClickRandomX}>
          random X
        </button>
        <button className={styles.button} onClick={handelClickRandomY}>
          random Y
        </button>
        <button className={styles.button} onClick={handelClickRandomZ}>
          random Z
        </button>
      </div>
    </div>
  );
}
