"use client";
import { Container } from "@/components/container/Container";
import styles from "./page.module.css";
import clsx from "clsx";
import Rotate from "@/components/rotate/Rotate";
import { useState } from "react";
import RotateAxies from "@/components/rotateAxies/RotateAxies";
import Scale from "@/components/scale/Scale";
import Skew from "@/components/skew/Skew";
import Translate from "@/components/translate/Translate";

export default function Home() {
  return (
    <section className={styles.blog}>
      <Container>
        <div className={styles.blog__box}>
          <div className={styles.blog__sidebar}></div>
          <div className={styles.blog__content}>
            <div className={styles.blog__wrapper}>
              <Rotate />
              <RotateAxies />
              <Scale />
              <Skew />
              <Translate />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
