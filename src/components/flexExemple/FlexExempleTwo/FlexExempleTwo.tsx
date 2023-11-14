import React from "react";
import style from "./style.module.css";

export default function FlexExempleTwo() {
  return (
    <div className={style.wrapper}>
      <div className={style.code__box}>
        <code className={style.code}>
          <span>.layout&#123;</span>
          <span>display: flex;</span>
          <span>gap: 20px;</span>
          <span>flex-wrap: wrap;</span>
          <span>flex-direction: column;</span>
          <span>max-width: 500px;</span>
          &#125;
        </code>
      </div>
      <div className={style.flex__group}>
        <div className={style.flex__item}></div>
        <div className={style.flex__item}></div>
        <div className={style.flex__item}></div>
        <div className={style.flex__item}></div>
        <div className={style.flex__item}></div>
        <div className={style.flex__item}></div>
        <div className={style.flex__item}></div>
        <div className={style.flex__item}></div>
      </div>
    </div>
  );
}
