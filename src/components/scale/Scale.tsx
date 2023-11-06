"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import Cube from "../cube/Cube";
import { InputFrame } from "../inputFrame/InputFrame";
import FieldBox from "../fieldBox/FieldBox";
import { Heading } from "../heading/Heading";
import DescriptionBlock from "../descriptionBlock/DescriptionBlock";
import ScaleOneValue from "./ScaleOneValue/ScaleOneValue";

export default function Scale() {
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);

  return (
    <div className={styles.rotate}>
      <Heading headingLevel="h3">Scale</Heading>
      <DescriptionBlock>
        The scale() CSS function defines a transformation that resizes an
        element on the 2D plane. Because the amount of scaling is defined by a
        vector [sx, sy], it can resize the horizontal and vertical dimensions at
        different scales.
      </DescriptionBlock>
      <div className={styles.flex__group}>
        <FieldBox>
          <div
            className={styles.rotate__box}
            style={
              {
                "--scaleX": `${scaleX}`,
                "--scaleY": `${scaleY}`,
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
          value={scaleX}
          set={setScaleX}
          min={0}
          max={3}
          step={0.1}
          rangeLabel="scale SX"
          numberLabel="scale SX number"
        ></InputFrame>
        <InputFrame
          className={styles.form__angel}
          value={scaleY}
          set={setScaleY}
          min={0}
          max={3}
          step={0.1}
          rangeLabel="scale SY"
          numberLabel="scale SY number"
        ></InputFrame>
      </div>
      <ScaleOneValue />
    </div>
  );
}
