"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import Cube from "../cube/Cube";

export default function Rotate() {
  const [rotate, setRotate] = useState(90);

  return (
    <div>
      <h2>Rotate</h2>
      <div className={styles.wrapper__box}>
        <div className={styles.rotate__box}>
          <Cube
            width={150}
            height={150}
            depth={150}
            className={styles.bg__colorSied}
            cuboidClass={styles.cuboid__animation}
          />
        </div>
      </div>
    </div>
  );
}
