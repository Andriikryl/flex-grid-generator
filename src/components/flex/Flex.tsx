"use client";
import React from "react";
import style from "./style.module.css";
import clsx from "clsx";

interface BoxBlock {
  amount: number;
  type?: string;
}

export default function Flex() {
  return (
    <div className={style.hero}>
      <div>
        <div></div>
        <BoxBlock amount={3} type="little" />
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
