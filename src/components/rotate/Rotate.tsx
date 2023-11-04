"use client";
import React, { useState } from "react";
import styles from "./style.module.css";

export default function Rotate() {
  const [rotate, setRotate] = useState(false);
  const handelClickRotate = () => {
    setRotate((prevState) => !prevState);
  };
  return (
    <div>
      <h2>Rotate</h2>
      <div className={styles.box}></div>
    </div>
  );
}
