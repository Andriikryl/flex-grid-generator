import React from "react";
import style from "./style.module.css";
import ExemplOne from "./exempleOne/ExemplOne";
import pet from "public/lines/pet 1.svg";
import Image from "next/image";
import ExempleTwo from "./exempleTwo/ExempleTwo";

export default function GridExempls() {
  return (
    <div>
      <div className={style.title__box}>
        <h2 className={style.grid__title}>Grid exemple</h2>
        <Image src={pet} width={100} height={100} alt="pet" />
      </div>
      <ExemplOne />
      <ExempleTwo/>
    </div>
  );
}
