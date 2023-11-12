import React from "react";
import style from "./style.module.css";

export default function ExemplOne() {
  return (
    <div className={style.flex__group}>
      <div className={style.layout}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={style.code__box}>
        <code className={style.code}>
          <span>&#123;</span>
          <span> display: grid;</span>
          <span> grid-template-rows: repeat(3, 1fr);</span>
          <span> grid-template-columns: repeat(3, 1fr);</span>
          <span> gap: 8px;</span>
          &#125;
        </code>
      </div>
    </div>
  );
}
