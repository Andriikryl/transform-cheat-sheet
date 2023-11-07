"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import { Heading } from "../heading/Heading";
import DescriptionBlock from "../descriptionBlock/DescriptionBlock";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

export default function Backface() {
  const [backface, setBackface] = useState(false);
  const [optIn, setOptIn] = React.useState(false);
  const handelClickBackface = () => {
    setBackface((prev) => !prev);
    console.log(backface);
  };
  console.log(optIn);
  return (
    <div className={style.backface__container}>
      <Heading headingLevel="h3">Backface</Heading>
      <DescriptionBlock>
        Using three-dimensional transforms, it’s possible to transform an
        element such that its reverse side is visible. 3D-transformed elements
        show the same content on both sides, so the reverse side looks like a
        mirror-image of the front side (as if the element were projected onto a
        sheet of glass). Normally, elements whose reverse side is towards the
        viewer remain visible. However, the backface-visibility property allows
        the author to make an element invisible when its reverse side is towards
        the viewer. This behavior is live; if an element with
        backface-visibility: hidden were animating, such that its front and
        reverse sides were alternately visible, then it would only be visible
        when the front side were towards the viewer.
      </DescriptionBlock>
      <div className={style.code__box}>
        <AnimatePresence>
          {optIn && (
            <motion.code
              className={style.code}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: -200,
              }}
              transition={{ opacity: { duration: 0.6 }, x: { duration: 1.2 } }}
            >
              backface-visibility: hidden;
            </motion.code>
          )}
        </AnimatePresence>
      </div>
      <div className={style.exaple__box}>
        <div
          className={clsx(style.card, { [style.flipped]: backface })}
          onClick={handelClickBackface}
        >
          <div className={clsx(style.front, style.face)}>
            <span>Front</span>
          </div>
          <div
            className={clsx(style.back, style.face, {
              [style.hiddenBackface]: optIn,
            })}
          >
            Back
          </div>
        </div>
      </div>
      <div className={style.minimal__radio}>
        <div className={style.minimal__radio__radio__container}>
          <form
            className={style.minimal__survey}
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <input
              className={style.minimal__radio__radio__input}
              type="checkbox"
              id="opt-in-checkbox"
              checked={optIn}
              onChange={(event) => {
                setOptIn(event.target.checked);
              }}
            />
            <label
              className={style.minimal__radio__radio__label}
              htmlFor="opt-in-checkbox"
            >
              <span className={style.minimal__radio__radio__text}>
                add backface
              </span>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
