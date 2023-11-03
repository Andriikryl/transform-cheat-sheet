import { Container } from "@/components/container/Container";
import styles from "./page.module.css";
import clsx from "clsx";

export default function Home() {
  return (
    <section className={styles.blog}>
      <Container>
        <div className={styles.blog__box}>
          <div className={styles.blog__sidebar}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            itaque recusandae aut, similique cupiditate earum hic optio deserunt
            quis quam sed et eum, corrupti dolor blanditiis aperiam accusamus
            magnam non.
          </div>
          <div className={styles.blog__content}>
            <div className={styles.blog__wrapper}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam sequi culpa atque reiciendis nobis enim eveniet
                earum. Reiciendis magnam laudantium, deleniti voluptatum
                similique optio pariatur vel ea, aspernatur ipsum consectetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita ad placeat odio excepturi molestias unde totam illo
                reiciendis deleniti perspiciatis aperiam deserunt in,
                dignissimos quae beatae ipsum? Nostrum, voluptate fugiat.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
