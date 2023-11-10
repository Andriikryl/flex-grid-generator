"use client";
import { Container } from "@/components/container/Container";
import styles from "./page.module.css";
import { useState } from "react";
import { useTabs } from "@/components/hooks/useTabs";
import { Framer } from "@/components/framer/Framer";
import Hero from "@/components/hero/Hero";
import Flex from "@/components/flex/Flex";
import Grid from "@/components/grid/Grid";

export default function Home() {
  const [hookProps] = useState({
    tabs: [
      {
        label: "Flex",
        children: <Flex />,
        id: "Flex",
      },
      {
        label: "Grid",
        children: <Grid />,
        id: "Grid",
      },
    ],
    initialTabId: "Flex",
  });
  const framer = useTabs(hookProps);
  return (
    <section className={styles.blog}>
      <Container>
        <Hero />
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
