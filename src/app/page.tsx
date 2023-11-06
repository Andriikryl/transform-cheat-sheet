"use client";
import { Container } from "@/components/container/Container";
import styles from "./page.module.css";
import Rotate from "@/components/rotate/Rotate";
import { useState } from "react";
import RotateAxies from "@/components/rotateAxies/RotateAxies";
import Scale from "@/components/scale/Scale";
import Skew from "@/components/skew/Skew";
import Translate from "@/components/translate/Translate";
import Origin from "@/components/origin/Origin";
import { useTabs } from "@/components/hooks/useTabs";
import { Framer } from "@/components/framer/Framer";

export default function Home() {
  const [hookProps] = useState({
    tabs: [
      {
        label: "Rotate",
        children: <Rotate />,
        id: "Rotate",
      },
      {
        label: "RotateAxies",
        children: <RotateAxies />,
        id: "RotateAxies",
      },
      {
        label: "Scale",
        children: <Scale />,
        id: "Scale",
      },
      {
        label: "Skew",
        children: <Skew />,
        id: "Skew",
      },
      {
        label: "Translate",
        children: <Translate />,
        id: "Translate",
      },
      {
        label: "Transform origin",
        children: <Origin />,
        id: "Transform origin",
      },
    ],
    initialTabId: "Rotate",
  });
  const framer = useTabs(hookProps);
  return (
    <section className={styles.blog}>
      <Container>
        <div className={styles.blog__box}>
          <div className={styles.blog__sidebar}>
            <Framer.TabsBody {...framer.tabProps} />
          </div>
          <div className={styles.blog__content}>
            <div className={styles.blog__wrapper}>
              <Framer.Content
                {...framer.contentProps}
                className={styles.inner__content}
              >
                {framer.selectedTab.children}
              </Framer.Content>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
