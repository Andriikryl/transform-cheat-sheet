"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import { Heading } from "../heading/Heading";
import DescriptionBlock from "../descriptionBlock/DescriptionBlock";
import { InputFrame } from "../inputFrame/InputFrame";

export default function Perspective() {
  const [perspecive, setPerspective] = useState(500);
  return (
    <div className={style.perspective__contaner}>
      <Heading headingLevel="h3">Perspective</Heading>
      <DescriptionBlock>
        Perspective can be used to add a feeling of depth to a scene by making
        elements higher on the Z axis (closer to the viewer) appear larger, and
        those further away to appear smaller. The scaling is proportional to
        d/(d − Z) where d, the value of perspective, is the distance from the
        drawing plane to the assumed position of the viewer’s eye.
      </DescriptionBlock>
      <div className={style.code__box}>
        <code className={style.code}>perspective: {perspecive} px;</code>
      </div>
      <div className={style.exaple__box}>
        <div
          className={style.container}
          style={
            {
              "--perspective": `${perspecive}px`,
            } as React.CSSProperties
          }
        >
          <div className={style.transformed}></div>
        </div>
      </div>
      <InputFrame
        className={style.form__angel}
        value={perspecive}
        set={setPerspective}
        min={0}
        max={5000}
        step={1}
        rangeLabel="rotate"
        numberLabel="rotate number"
      ></InputFrame>
    </div>
  );
}
