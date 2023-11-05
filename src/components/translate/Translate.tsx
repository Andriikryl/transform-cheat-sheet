"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import Cube from "../cube/Cube";
import { InputFrame } from "../inputFrame/InputFrame";
import FieldBox from "../fieldBox/FieldBox";
import { Heading } from "../heading/Heading";
import DescriptionBlock from "../descriptionBlock/DescriptionBlock";

export default function Translate() {
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  return (
    <div className={styles.rotate}>
      <Heading headingLevel="h3">Translate</Heading>
      <DescriptionBlock>
        This transformation is characterized by a two-dimensional vector [tx,
        ty]. Its coordinates define how much the element moves in each
        direction.
      </DescriptionBlock>
      <div className={styles.flex__group}>
        <FieldBox>
          <div
            className={styles.rotate__box}
            style={
              {
                "--translateX": `${translateX}px`,
                "--translateY": `${translateY}px`,
              } as React.CSSProperties
            }
          >
            <Cube
              width={100}
              height={100}
              depth={100}
              className={styles.bg__colorSied}
              cuboidClass={styles.cuboid__animation}
            />
          </div>
        </FieldBox>
        <InputFrame
          className={styles.form__angel}
          value={translateX}
          set={setTranslateX}
          min={-100}
          max={100}
          step={1}
          rangeLabel="Translate SX"
          numberLabel="Translate SX number"
        ></InputFrame>
        <InputFrame
          className={styles.form__angel}
          value={translateY}
          set={setTranslateY}
          min={-100}
          max={100}
          step={1}
          rangeLabel="Translate SY"
          numberLabel="Translate SY number"
        ></InputFrame>
      </div>
    </div>
  );
}
