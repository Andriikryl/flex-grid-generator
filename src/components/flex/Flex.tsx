"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import clsx from "clsx";
import { InputFrame } from "../inputFrame/InputFrame";

interface BoxBlock {
  amount: number;
  type?: string;
}

export default function Flex() {
  const [children, setChildren] = useState(5);
  const [gap, setGap] = useState(5);
  return (
    <div className={style.hero}>
      <div className={style.blog__box}>
        <div className={style.blog__sidebar}>
          <div className={style.input__wrapper}>
            <InputFrame
              className={style.form__angel}
              value={children}
              set={setChildren}
              numberLabel="Children"
            ></InputFrame>
          </div>
        </div>
        <div className={style.blog__content}>
          <div className={style.blog__wrapper}>
            <BoxBlock amount={children} type="little" />
          </div>
        </div>
      </div>
    </div>
  );
}

function BoxBlock({ amount, type }: BoxBlock) {
  let blocks = [];
  for (let i = 0; i < amount; i++) {
    blocks.push(
      <div
        key={i}
        className={clsx(
          style.block,
          type === "little" && style.little__block,
          type === "smallest" && style.smallest__block
        )}
      >
        <span className={style.number}>{i + 1}</span>
      </div>
    );
  }
  return <div className={style.blocks__box}>{blocks}</div>;
}
