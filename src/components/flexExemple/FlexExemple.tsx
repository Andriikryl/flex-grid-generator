import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import pet from "public/lines/pet 1.svg";
import FlexExempleOne from "./FlexExempleOne/FlexExempleOne";
export default function FlexExemple() {
  return (
    <div className={style.flex__box}>
      <div className={style.title__box}>
        <h2 className={style.grid__title}>Flex exemple</h2>
        <Image src={pet} width={100} height={100} alt="pet" />
      </div>
      <FlexExempleOne />
    </div>
  );
}
