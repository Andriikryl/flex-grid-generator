"use client";
import React, { useId, useState } from "react";
import style from "./style.module.css";
import { motion } from "framer-motion";
import clsx from "clsx";
import { InputFrame } from "../inputFrame/InputFrame";
import imageCode from "public/lines/annotation-noodle.svg";
import Image from "next/image";

interface BoxBlock {
  amount: number;
  type?: string;
  gap?: number | string;
  columnsNumber: number;
  rowsNumber: number;
  rowsNumberHeight: number;
  columnsNumberWidth: number;
  gapColumn: number;
  selectedRowDiraction?: string;
  dynamicRowsValue: string;
}

export default function Grid() {
  const [children, setChildren] = useState(2);
  const [gap, setGap] = useState(15);
  const [gapColumn, setGapColumn] = useState(15);
  const [rowsNumber, setRowsNumber] = useState(2);
  const [rowsNumberHeight, setRowsNumberHeight] = useState(100);
  const [columnsNumber, setColumnsNumber] = useState(2);
  const [columnsNumberWidth, setColumnsNumberWidth] = useState(100);
  const [selectedRowDiraction, setSelectedRowDirection] =
    React.useState("number");
  const [selectedColumnDiraction, setSelectedColumnDirection] =
    React.useState("number");
  const dynamicRowsValue =
    selectedRowDiraction !== "number"
      ? `repeat(${selectedRowDiraction}, ${rowsNumberHeight}px)`
      : `repeat(${rowsNumber}, ${rowsNumberHeight}px)`;
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
              numberLabel="Gap Row"
            ></InputFrame>
          </div>
          <div className={style.input__wrapper}>
            <InputFrame
              className={style.form__angel}
              value={gapColumn}
              set={setGapColumn}
              min={0}
              numberLabel="Gap Column"
            ></InputFrame>
          </div>
          <div className={style.input__wrapper}>
            <InputFrame
              className={style.form__angel}
              value={columnsNumber}
              set={setColumnsNumber}
              min={0}
              numberLabel="Columns"
            ></InputFrame>
          </div>
          <div className={style.input__wrapper}>
            <InputFrame
              className={style.form__angel}
              value={rowsNumber}
              set={setRowsNumber}
              min={0}
              numberLabel="Row"
              disabled={selectedRowDiraction !== "number"}
            ></InputFrame>
          </div>
          <div className={style.input__wrapper}>
            <InputFrame
              className={style.form__angel}
              value={rowsNumberHeight}
              set={setRowsNumberHeight}
              min={10}
              numberLabel="Row Height"
            ></InputFrame>
          </div>
          <div className={style.input__wrapper}>
            <InputFrame
              className={style.form__angel}
              value={columnsNumberWidth}
              set={setColumnsNumberWidth}
              min={10}
              numberLabel="Colums width"
            ></InputFrame>
          </div>
          <div className={style.input__wrapper}>
            <form className={style.form__direaction}>
              <fieldset>
                <div className={style.form__group}>
                  <legend className={style.legend}>Diraction row:</legend>
                  <select
                    className={style.select}
                    value={selectedRowDiraction}
                    onChange={(event) => {
                      setSelectedRowDirection(event.target.value);
                    }}
                  >
                    <option value="auto-fill">auto-fill</option>
                    <option value="auto-fit">auto-fit</option>
                    <option value="number">number</option>
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
              columnsNumber={columnsNumber}
              rowsNumber={rowsNumber}
              rowsNumberHeight={rowsNumberHeight}
              columnsNumberWidth={columnsNumberWidth}
              gapColumn={gapColumn}
              dynamicRowsValue={dynamicRowsValue}
            />
            <div className={style.wrapper__code}>
              <div className={style.code__ImageBox}>
                <Image src={imageCode} width={20} height={72} alt="" />
              </div>
              <div className={style.code__box}>
                <code>
                  <p>.layout &#123;</p>
                  <p>display: grid;</p>
                  <p>
                    {" "}
                    gap: {gap}px {gapColumn}px;
                  </p>
                  <p>&#125;</p>
                </code>
              </div>
            </div>
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
  columnsNumber,
  rowsNumber,
  rowsNumberHeight,
  columnsNumberWidth,
  gapColumn,
  selectedRowDiraction,
  dynamicRowsValue,
}: BoxBlock) {
  let blocks = [];
  for (let i = 0; i < amount; i++) {
    blocks.push(
      <motion.div
        key={i}
        className={clsx(style.block)}
        layout
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{
          opacity: 0,
          x: -200,
        }}
        transition={{ opacity: { duration: 0.6 }, x: { duration: 1.2 } }}
      >
        <div
          className={clsx(
            type === "little" && style.little__block,
            type === "smallest" && style.smallest__block
          )}
        >
          <span className={style.number}>{i + 1}</span>
        </div>
      </motion.div>
    );
  }
  return (
    <div
      className={style.blocks__box}
      style={{
        gap: `${gap}px ${gapColumn}px`,
        gridTemplateColumns: `repeat(${columnsNumber}, ${columnsNumberWidth}px)`,
        gridTemplateRows: dynamicRowsValue,
      }}
    >
      {blocks}
    </div>
  );
}
