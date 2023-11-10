"use client";
import React, { useEffect, useState, useRef, MutableRefObject } from "react";
import styles from "./style.module.css";
import VisuallyHidden from "../visuallyhidden/VisuallyHidden";
import imageQas from "public/lines/Actions & UI/question-circle.svg";
import Image from "next/image";
import imageClear from "public/lines/Actions & UI/clear-x.svg";

interface ToastyProps {
  text?: string;
}

export default function Faq({ text }: ToastyProps) {
  const [isShown, setIsShown] = useState(false);
  const handelClickButtonShow = () => {
    setIsShown((prev) => !prev);
  };
  const handelClickButtonClose = () => {
    setIsShown(false);
  };

  const translateX = isShown ? "200%" : "400%";

  return (
    <>
      <button className={styles.buttonOpen} onClick={handelClickButtonShow}>
        <VisuallyHidden>open faq</VisuallyHidden>
        <Image src={imageQas} width={36} height={36} alt="" />
      </button>
      <div className={styles.wrapper}>
        <div
          className={styles.character}
          style={{
            transform: `translateX(${translateX})`,
          }}
        >
          <button
            onClick={handelClickButtonClose}
            className={styles.close__btn}
          >
            <VisuallyHidden>close</VisuallyHidden>
            <Image src={imageClear} width={40} height={40} alt="" />
          </button>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
