"use client";
import { Container } from "@/components/container/Container";
import styles from "./page.module.css";
import clsx from "clsx";
import Rotate from "@/components/rotate/Rotate";
import { useState } from "react";
import RotateAxies from "@/components/rotateAxies/RotateAxies";

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
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
