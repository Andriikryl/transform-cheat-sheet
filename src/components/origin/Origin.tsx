"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { InputFrame } from "@/components/inputFrame/InputFrame";
import { Heading } from "../heading/Heading";
import DescriptionBlock from "../descriptionBlock/DescriptionBlock";

export default function Origin() {
  const [rotate, setRotate] = useState(0);
  const [selectedOption, setSelectedOption] = React.useState("center");
  return (
    <div className={styles.rotate}>
      <Heading headingLevel="h3">Transform origin</Heading>
      <DescriptionBlock>
        The transform-origin CSS property sets the origin for an elements
        transformations.
      </DescriptionBlock>
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
                "--origin": `${selectedOption}`,
              } as React.CSSProperties
            }
          >
            <div>
              <span>{rotate}</span>
            </div>
          </div>
        </div>
        <code className={styles.code__block}>
          transform-origin: {selectedOption};
        </code>
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
            <legend className={styles.legend}>Angel diraction</legend>
            <select
              className={styles.select}
              value={selectedOption}
              onChange={(event) => {
                setSelectedOption(event.target.value);
              }}
            >
              <option value="center">center</option>
              <option value="left top">left top</option>
              <option value="55px bottom">55px bottom</option>
              <option value="0% 150%">0% 150%</option>
            </select>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
