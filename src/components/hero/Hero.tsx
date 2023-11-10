import React from "react";
import style from "./style.module.css";
import MenImage from "public/face/men.svg";
import WemanImage from "public/face/women.svg";
import arrowDown from "public/lines/Arrow left.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={style.hero}>
      <div className={style.title__box}>
        <h1 className={style.hero__title}>Flex grid genrator</h1>
      </div>
      <div className={style.qa__box}>
        <div className={style.flex__group}>
          <Image src={MenImage} width={54} height={54} alt="men" />
          <div className={style.info__bloc}>
            <p>How use flex?</p>
          </div>
        </div>
        <div className={style.flex__group}>
          <div className={style.info__bloc}>
            <p>How use grid?</p>
          </div>
          <div className={style.image__boxWem}>
            <Image src={WemanImage} width={54} height={54} alt="men" />
          </div>
        </div>
      </div>
      <div className={style.arrow__dowBox}>
        <Image src={arrowDown} width={251} height={14} alt="arrow down" />
      </div>
    </div>
  );
}
