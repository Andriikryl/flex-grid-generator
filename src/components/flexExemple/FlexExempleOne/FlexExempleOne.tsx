import React from "react";
import style from "./style.module.css";

export default function FlexExempleOne() {
  return (
    <div className={style.wrapper}>
      <div className={style.flex__group}>
        <div className={style.flex__item}></div>
        <div className={style.flex__item}></div>
        <div className={style.flex__item}></div>
      </div>
    </div>
  );
}
