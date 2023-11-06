import React from "react";
import { Heading } from "../heading/Heading";
import DescriptionBlock from "../descriptionBlock/DescriptionBlock";
import styles from "./style.module.css";
import Cube from "../cube/Cube";
import Link from "next/link";
import Git from "../icons/Git";
import Insta from "../icons/Insta";

const dataTechnology = [
  "JavaScript",
  "TypeScript",
  "Framer motion",
  "Next js",
  "Css",
];

export default function Hero() {
  return (
    <div className={styles.home}>
      <Heading headingLevel="h1">Home</Heading>
      <div className={styles.universal__group}>
        <div className={styles.flex__group}>
          <Cube
            width={300}
            height={300}
            depth={300}
            className={styles.bg__colorSied}
            cuboidClass={styles.cuboid__animation}
          >
            <Cube
              width={120}
              height={120}
              depth={120}
              className={styles.bg__colorMain}
              cuboidClass={styles.cuboid__animation}
            >
              <Cube
                width={50}
                height={50}
                depth={50}
                className={styles.bg__colorTwo}
                cuboidClass={styles.cuboid__animation}
              >
                <Cube
                  width={10}
                  height={10}
                  depth={10}
                  className={styles.bg__colorThree}
                  cuboidClass={styles.cuboid__animation}
                />
              </Cube>
            </Cube>
          </Cube>
        </div>
      </div>
      <div className={styles.about__box}>
        <h1 className={styles.about__title}>Info</h1>
        <p className={styles.about__description}>
          Hi everyone! My name is Andrii and this is my little guide / progect
        </p>
        <div className={styles.stack__box}>
          <h2 className={styles.stack__title}>Technologies stack:</h2>
          <ul className={styles.stack__list}>
            {dataTechnology.map((item, index) => {
              return (
                <li className={styles.stack__item} key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <p className={styles.git__text}>
          Check all my projects in my GitHub profile
        </p>
        <div className={styles.links__group}>
          <Link
            className="info__social-link"
            href="https://github.com/Andriikryl"
            target="blank"
          >
            <Git />
          </Link>
          <Link
            href="https://www.instagram.com/andrej.kr/?hl=ru"
            target="blank"
          >
            <Insta />
          </Link>
        </div>
      </div>
    </div>
  );
}
