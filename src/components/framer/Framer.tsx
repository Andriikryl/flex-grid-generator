"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import style from "./style.module.css";
import { Tab } from "../hooks/useTabs";
import clsx from "clsx";

const transition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.4,
};

type Props = {
  selectedTabIndex: number;
  tabs: Tab[];
  setSelectedTab: (input: [number, number]) => void;
};

const TabsBody = ({
  tabs,
  selectedTabIndex,
  setSelectedTab,
}: Props): JSX.Element => {
  const [buttonRefs, setButtonRefs] = useState<Array<HTMLButtonElement | null>>(
    []
  );

  useEffect(() => {
    setButtonRefs((prev) => prev.slice(0, tabs.length));
  }, [tabs.length]);

  const navRef = useRef<HTMLDivElement>(null);
  const navRect = navRef.current?.getBoundingClientRect();

  const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();

  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);
  const hoveredRect =
    buttonRefs[hoveredTabIndex ?? -1]?.getBoundingClientRect();

  return (
    <nav
      ref={navRef}
      className={style.nav}
      onPointerLeave={(e) => setHoveredTabIndex(null)}
    >
      {tabs.map((item, i) => {
        return (
          <motion.button
            key={i}
            className={clsx(style.button, {
              "text-slate-700": hoveredTabIndex === i || selectedTabIndex === i,
            })}
            ref={(el) => (buttonRefs[i] = el)}
            onPointerEnter={() => {
              setHoveredTabIndex(i);
            }}
            onFocus={() => {
              setHoveredTabIndex(i);
            }}
            onClick={() => {
              setSelectedTab([i, i > selectedTabIndex ? 1 : -1]);
            }}
          >
            {item.label}
          </motion.button>
        );
      })}
      <AnimatePresence>
        {hoveredRect && navRect && (
          <motion.div
            key={"hover"}
            className={style.hover__box}
            initial={{
              x: hoveredRect.left - navRect.left,
              y: hoveredRect.top - navRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 0,
            }}
            animate={{
              x: hoveredRect.left - navRect.left,
              y: hoveredRect.top - navRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 1,
            }}
            exit={{
              x: hoveredRect.left - navRect.left,
              y: hoveredRect.top - navRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 0,
            }}
            transition={transition}
          />
        )}
      </AnimatePresence>
      {/* {selectedRect && navRect && (
        <motion.div
          initial={false}
          className={style.border__button}
          animate={{
            width: selectedRect.width,
            y: `calc(${selectedRect.top - navRect.width}px + -20%)`,
            opacity: 1,
          }}
          transition={transition}
        />
      )} */}
    </nav>
  );
};

const Content = ({
  children,
  className,
  selectedTabIndex,
  direction,
}: {
  direction: number;
  selectedTabIndex: number;
  children: ReactNode;
  className?: string;
}): JSX.Element => {
  return (
    <AnimatePresence exitBeforeEnter={false} custom={direction}>
      <motion.div
        key={selectedTabIndex}
        variants={{
          enter: (direction) => ({
            opacity: 0,
            x: direction > 0 ? 100 : -100,
            scale: 0.8,
          }),
          center: { opacity: 1, x: 0, scale: 1, rotate: 0 },
          exit: (direction) => ({
            opacity: 0,
            x: direction > 0 ? -100 : 100,
            scale: 0.8,
            position: "absolute",
          }),
        }}
        transition={{ duration: 0.45 }}
        initial={"enter"}
        animate={"center"}
        exit={"exit"}
        custom={direction}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export const Framer = { TabsBody, Content };
