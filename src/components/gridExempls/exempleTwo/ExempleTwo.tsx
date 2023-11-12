import React from "react";
import style from "./style.module.css";

export default function ExempleTwo() {
  return (
    <div className={style.exemple__box}>
      <div className={style.code__box}>
        <code className={style.code}>
          <span>.layout&#123;</span>
          <span> display: grid;</span>
          <span> grid:</span>
          <span>&quot;header header header&quot; auto</span>
          <span>&quot;leftSide body rightSide&quot; 1fr</span>
          <span>&quot;footer footer footer&quot; auto</span>
          <span> / auto 1fr auto;</span>
          <span> gap: 8px;</span>
          &#125;
          <span>.header &#123; grid-area: header; &#125;</span>
          <span>.leftSide &#123; grid-area: leftSide; &#125;</span>
          <span>.body &#123; grid-area: body; &#125;</span>
          <span>.rightSide &#123; grid-area: rightSide; &#125;</span>
          <span>.footer &#123; grid-area: footer; &#125;</span>
        </code>
      </div>
      <section className={style.layout}>
        <div className={style.header}></div>
        <div className={style.leftSide}></div>
        <div className={style.body}></div>
        <div className={style.rightSide}></div>
        <div className={style.footer}></div>
      </section>
    </div>
  );
}
