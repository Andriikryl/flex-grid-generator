"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import { motion } from "framer-motion";
import clsx from "clsx";
import { InputFrame } from "../inputFrame/InputFrame";

interface BoxBlock {
  amount: number;
  type?: string;
  gap?: number | string;
  selectedDiraction: any;
  selectedWrap: any;
  selectedMainAxis: any;
  selectedCrossAxis: any;
}

export default function Flex() {
  const [children, setChildren] = useState(5);
  const [gap, setGap] = useState(15);
  const [selectedDiraction, setSelectedDirection] = React.useState("row");
  const [selectedWrap, setSelectedWrap] = React.useState("nowrap");
  const [selectedMainAxis, setSelectedMainAxix] = React.useState("flex-start");
  const [selectedCrossAxis, setSelectedCrossAxix] = React.useState("stretch");
  return (
    <div className={style.hero}>
      <div className={style.blog__box}>
        <div className={style.blog__sidebar}>
          <div className={style.input__wrapper}>
            <InputFrame
              className={style.form__angel}
              value={children}
              set={setChildren}
              min={1}
              numberLabel="Children"
            ></InputFrame>
          </div>
          <div className={style.input__wrapper}>
            <InputFrame
              className={style.form__angel}
              value={gap}
              set={setGap}
              min={0}
              numberLabel="Gap"
            ></InputFrame>
          </div>
          <div className={style.input__wrapper}>
            <form className={style.form__direaction}>
              <fieldset>
                <div className={style.form__group}>
                  <legend className={style.legend}>Diraction:</legend>
                  <select
                    className={style.select}
                    value={selectedDiraction}
                    onChange={(event) => {
                      setSelectedDirection(event.target.value);
                    }}
                  >
                    <option value="column">column</option>
                    <option value="column-reverse">column-reverse</option>
                    <option value="row">row</option>
                    <option value="row-reverse">row-reverse</option>
                  </select>
                </div>
              </fieldset>
            </form>
          </div>
          <div className={style.input__wrapper}>
            <form className={style.form__direaction}>
              <fieldset>
                <div className={style.form__group}>
                  <legend className={style.legend}>Wrap:</legend>
                  <select
                    className={style.select}
                    value={selectedWrap}
                    onChange={(event) => {
                      setSelectedWrap(event.target.value);
                    }}
                  >
                    <option value="nowrap">nowrap</option>
                    <option value="wrap">wrap</option>
                    <option value="wrap-reverse">wrap-reverse</option>
                  </select>
                </div>
              </fieldset>
            </form>
          </div>
          <div className={style.input__wrapper}>
            <form className={style.form__direaction}>
              <fieldset>
                <div className={style.form__group}>
                  <legend className={style.legend}>Main Axis:</legend>
                  <select
                    className={style.select}
                    value={selectedMainAxis}
                    onChange={(event) => {
                      setSelectedMainAxix(event.target.value);
                    }}
                  >
                    <option value="flex-start">flex-start</option>
                    <option value="flex-end">flex-end</option>
                    <option value="center">center</option>
                    <option value="space-around">space-around</option>
                    <option value="space-between">space-between</option>
                    <option value="space-evenly">space-evenly</option>
                  </select>
                </div>
              </fieldset>
            </form>
          </div>
          <div className={style.input__wrapper}>
            <form className={style.form__direaction}>
              <fieldset>
                <div className={style.form__group}>
                  <legend className={style.legend}>Cross Axis:</legend>
                  <select
                    className={style.select}
                    value={selectedCrossAxis}
                    onChange={(event) => {
                      setSelectedCrossAxix(event.target.value);
                    }}
                  >
                    <option value="flex-start">flex-start</option>
                    <option value="flex-end">flex-end</option>
                    <option value="center">center</option>
                    <option value="stretch">stretch</option>
                  </select>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className={style.blog__content}>
          <div className={style.blog__wrapper}>
            <BoxBlock
              amount={children}
              type="little"
              gap={gap}
              selectedDiraction={selectedDiraction}
              selectedWrap={selectedWrap}
              selectedMainAxis={selectedMainAxis}
              selectedCrossAxis={selectedCrossAxis}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BoxBlock({
  amount,
  type,
  gap,
  selectedDiraction,
  selectedWrap,
  selectedMainAxis,
  selectedCrossAxis,
}: BoxBlock) {
  let blocks = [];
  for (let i = 0; i < amount; i++) {
    blocks.push(
      <motion.div
        key={i}
        className={clsx(
          style.block,
          type === "little" && style.little__block,
          type === "smallest" && style.smallest__block
        )}
        layout
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{
          opacity: 0,
          x: -200,
        }}
        transition={{ opacity: { duration: 0.6 }, x: { duration: 1.2 } }}
      >
        <span className={style.number}>{i + 1}</span>
      </motion.div>
    );
  }
  return (
    <div
      className={style.blocks__box}
      style={{
        gap: gap,
        flexDirection: selectedDiraction,
        flexWrap: selectedWrap,
        justifyContent: selectedMainAxis,
        alignItems: selectedCrossAxis,
      }}
    >
      {blocks}
    </div>
  );
}
