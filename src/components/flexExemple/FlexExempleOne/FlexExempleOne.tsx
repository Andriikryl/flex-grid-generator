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
      <div className={style.code__box}>
        <code className={style.code}>
          <span>.layout&#123;</span>
          <span>display: flex;</span>
          <span>gap: 20px;</span>
          <span>flex-wrap: wrap;</span>
          <span>max-width: 500px;</span>
          &#125;
          <span>.flex__item:nth-child(3)&#123;</span>
          <span>flex-grow:1</span>
          <span> &#125;</span>
        </code>
      </div>
    </div>
  );
}
