"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import Cube from "../cube/Cube";
import { InputFrame } from "../inputFrame/InputFrame";
import FieldBox from "../fieldBox/FieldBox";
import { Heading } from "../heading/Heading";
import DescriptionBlock from "../descriptionBlock/DescriptionBlock";

export default function Skew() {
  const [skewX, setSkewX] = useState(1);
  const [skewY, setSkewY] = useState(1);

  return (
    <div className={styles.rotate}>
      <Heading headingLevel="h3">Skew</Heading>
      <DescriptionBlock>
        The skew() CSS function defines a transformation that skews an element
        on the 2D plane. Its result is a data type.
      </DescriptionBlock>
      <div className={styles.flex__group}>
        <FieldBox>
          <div
            className={styles.rotate__box}
            style={
              {
                "--skewX": `${skewX}deg`,
                "--skewY": `${skewY}deg`,
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
          value={skewX}
          set={setSkewX}
          min={-100}
          max={100}
          step={1}
          rangeLabel="scale SX"
          numberLabel="scale SX number"
        ></InputFrame>
        <InputFrame
          className={styles.form__angel}
          value={skewY}
          set={setSkewY}
          min={-100}
          max={100}
          step={1}
          rangeLabel="scale SY"
          numberLabel="scale SY number"
        ></InputFrame>
      </div>
    </div>
  );
}
