"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import Cube from "../cube/Cube";
import { InputFrame } from "../inputFrame/InputFrame";
import FieldBox from "../fieldBox/FieldBox";
import { Heading } from "../heading/Heading";

export default function Scale() {
  const [scale, setScale] = useState(1);

  return (
    <div className={styles.rotate}>
      <Heading headingLevel="h3">Scale</Heading>
      <p className={styles.description__block}>
        The scale() CSS function defines a transformation that resizes an
        element on the 2D plane. Because the amount of scaling is defined by a
        vector [sx, sy], it can resize the horizontal and vertical dimensions at
        different scales.
      </p>
      <div className={styles.flex__group}>
        <FieldBox>
          <div
            className={styles.rotate__box}
            style={
              {
                "--scale": `${scale}`,
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
          value={scale}
          set={setScale}
          min={0}
          max={3}
          step={0.1}
          rangeLabel="rotate"
          numberLabel="rotate number"
        ></InputFrame>
      </div>
    </div>
  );
}
