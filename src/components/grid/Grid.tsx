"use client";
import React, { useId, useState } from "react";
import style from "./style.module.css";
import { motion } from "framer-motion";
import clsx from "clsx";
import { InputFrame } from "../inputFrame/InputFrame";
import imageCode from "public/lines/annotation-noodle.svg";
import Image from "next/image";
import VisuallyHidden from "../visuallyhidden/VisuallyHidden";
import Graph from "../graph/Graph";

interface BoxBlock {
  amount: number;
  type?: string;
  gap: number;
  columnsNumber: number;
  rowsNumber: number;
  rowsNumberHeight: number;
  columnsNumberWidth: number;
  gapColumn: number;
  selectedRowDiraction?: string;
  dynamicRowsValue: string;
  dynamicColumnValue: string;
  gapRowValueType: string;
  gapColumnValueType: string;
  justifyContent: string;
  alignContent: string;
}

export default function Grid() {
  const [children, setChildren] = useState(2);
  const [gap, setGap] = useState(15);
  const [gapRowValueType, setGapRowValueType] = useState("px");
  const [gapColumn, setGapColumn] = useState(15);
  const [gapColumnValueType, setGapColumnValueType] = useState("px");
  const [rowsNumber, setRowsNumber] = useState(2);
  const [rowsNumberHeight, setRowsNumberHeight] = useState(100);
  const [columnsNumber, setColumnsNumber] = useState(2);
  const [columnsNumberWidth, setColumnsNumberWidth] = useState(100);
  const [rowValueWidth, setRowValueWidth] = useState("px");
  const [columnValueWidth, setColumnValueWidth] = useState("px");
  const [justifyContent, setJustifyContent] = useState("");
  const [alignContent, setAlignContent] = useState("");
  const [selectedRowDiraction, setSelectedRowDirection] =
    React.useState("number");
  const [selectedColumnDiraction, setSelectedColumnDirection] =
    React.useState("number");
  const dynamicRowValueType =
    rowValueWidth !== "auto" ? `${rowsNumberHeight}${rowValueWidth}` : `auto`;
  const dynamicColumnValueType =
    columnValueWidth !== "auto"
      ? `${columnsNumberWidth}${columnValueWidth}`
      : `auto`;
  const dynamicRowsValue =
    selectedRowDiraction !== "number"
      ? `repeat(${selectedRowDiraction}, ${dynamicRowValueType})`
      : `repeat(${rowsNumber}, ${dynamicRowValueType})`;
  const dynamicColumnValue =
    selectedColumnDiraction !== "number"
      ? `repeat(${selectedColumnDiraction}, ${dynamicColumnValueType})`
      : `repeat(${columnsNumber}, ${dynamicColumnValueType})`;

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
            <form className={style.form__direaction}>
              <fieldset>
                <div className={style.form__group}>
                  <legend className={style.legend}>
                    <VisuallyHidden>gap row value type</VisuallyHidden>
                  </legend>
                  <select
                    className={style.select}
                    value={gapRowValueType}
                    onChange={(event) => {
                      setGapRowValueType(event.target.value);
                    }}
                  >
                    <option value="%">%</option>
                    <option value="px">px</option>
                  </select>
                </div>
              </fieldset>
            </form>
          </div>
          <div className={style.input__wrapper}>
            <InputFrame
              className={style.form__angel}
              value={gapColumn}
              set={setGapColumn}
              min={0}
              numberLabel="Gap Column"
            ></InputFrame>
            <form className={style.form__direaction}>
              <fieldset>
                <div className={style.form__group}>
                  <legend className={style.legend}>
                    <VisuallyHidden>gap Column value type</VisuallyHidden>
                  </legend>
                  <select
                    className={style.select}
                    value={gapColumnValueType}
                    onChange={(event) => {
                      setGapColumnValueType(event.target.value);
                    }}
                  >
                    <option value="%">%</option>
                    <option value="px">px</option>
                  </select>
                </div>
              </fieldset>
            </form>
          </div>
          <div className={style.input__wrapper}>
            <InputFrame
              className={style.form__angel}
              value={columnsNumber}
              set={setColumnsNumber}
              min={1}
              numberLabel="Columns"
              disabled={selectedColumnDiraction !== "number"}
            ></InputFrame>
            <form className={style.form__direaction}>
              <fieldset>
                <div className={style.form__group}>
                  <legend className={style.legend}>
                    <VisuallyHidden>Diraction columns:</VisuallyHidden>
                  </legend>
                  <select
                    className={style.select}
                    value={selectedColumnDiraction}
                    onChange={(event) => {
                      setSelectedColumnDirection(event.target.value);
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
          <div className={style.input__wrapper}>
            <InputFrame
              className={style.form__angel}
              value={rowsNumber}
              set={setRowsNumber}
              min={1}
              numberLabel="Row"
              disabled={selectedRowDiraction !== "number"}
            ></InputFrame>
            <form className={style.form__direaction}>
              <fieldset>
                <div className={style.form__group}>
                  <legend className={style.legend}>
                    <VisuallyHidden>Diraction row:</VisuallyHidden>
                  </legend>
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
          <div className={style.input__wrapper}>
            <InputFrame
              className={style.form__angel}
              value={rowsNumberHeight}
              set={setRowsNumberHeight}
              min={1}
              numberLabel="Row Height"
              disabled={rowValueWidth === "auto"}
            ></InputFrame>
            <form className={style.form__direaction}>
              <fieldset>
                <div className={style.form__group}>
                  <legend className={style.legend}>
                    <VisuallyHidden>row heigth type of value:</VisuallyHidden>
                  </legend>
                  <select
                    className={style.select}
                    value={rowValueWidth}
                    onChange={(event) => {
                      setRowValueWidth(event.target.value);
                    }}
                  >
                    <option value="%">%</option>
                    <option value="auto">auto</option>
                    <option value="fr">fr</option>
                    <option value="px">px</option>
                  </select>
                </div>
              </fieldset>
            </form>
          </div>
          <div className={style.input__wrapper}>
            <InputFrame
              className={style.form__angel}
              value={columnsNumberWidth}
              set={setColumnsNumberWidth}
              min={10}
              numberLabel="Colums width"
              disabled={columnValueWidth === "auto"}
            ></InputFrame>
            <form className={style.form__direaction}>
              <fieldset>
                <div className={style.form__group}>
                  <legend className={style.legend}>
                    <VisuallyHidden>row heigth type of value:</VisuallyHidden>
                  </legend>
                  <select
                    className={style.select}
                    value={columnValueWidth}
                    onChange={(event) => {
                      setColumnValueWidth(event.target.value);
                    }}
                  >
                    <option value="%">%</option>
                    <option value="auto">auto</option>
                    <option value="fr">fr</option>
                    <option value="px">px</option>
                  </select>
                </div>
              </fieldset>
            </form>
          </div>
          <div className={style.input__wrapper}>
            <form className={style.form__direaction}>
              <fieldset>
                <div className={style.form__group}>
                  <legend className={style.legend}>Justify-content:</legend>
                  <select
                    className={style.select}
                    value={justifyContent}
                    onChange={(event) => {
                      setJustifyContent(event.target.value);
                    }}
                  >
                    <option value="">stretch</option>
                    <option value="center">center</option>
                    <option value="end">end</option>
                    <option value="space-around">space-around</option>
                    <option value="space-between">space-between</option>
                    <option value="space-evenly">space-evenly</option>
                    <option value="start">start</option>
                  </select>
                </div>
              </fieldset>
            </form>
          </div>
          <div className={style.input__wrapper}>
            <form className={style.form__direaction}>
              <fieldset>
                <div className={style.form__group}>
                  <legend className={style.legend}>Align-content:</legend>
                  <select
                    className={style.select}
                    value={alignContent}
                    onChange={(event) => {
                      setAlignContent(event.target.value);
                    }}
                  >
                    <option value="">stretch</option>
                    <option value="center">center</option>
                    <option value="end">end</option>
                    <option value="space-around">space-around</option>
                    <option value="space-between">space-between</option>
                    <option value="space-evenly">space-evenly</option>
                    <option value="start">start</option>
                  </select>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className={style.blog__content}>
          <div className={style.blog__wrapper}>
            <div className={style.graph__wrapper}>
              <Graph
                from={1}
                to={columnsNumber}
                step={1}
                style={{
                  gap: `${gap}${gapRowValueType} ${gapColumn}${gapColumnValueType}`,
                  gridTemplateColumns: dynamicColumnValue,
                }}
                numOfGrafh={columnsNumber}
                classGraph={style.rgaph__columns}
                classReng={style.inner__Item__graph}
              />
              <Graph
                from={1}
                to={rowsNumber}
                step={1}
                style={{
                  gap: `${gap}${gapRowValueType} ${gapColumn}${gapColumnValueType}`,
                  gridTemplateRows: dynamicRowsValue,
                }}
                numOfGrafh={rowsNumber}
                classGraph={style.rgaph__rows}
                classReng={style.inner__ItemRows__graph}
              />
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
                dynamicColumnValue={dynamicColumnValue}
                gapRowValueType={gapRowValueType}
                gapColumnValueType={gapColumnValueType}
                justifyContent={justifyContent}
                alignContent={alignContent}
              />
            </div>
            <div className={style.wrapper__code}>
              <div className={style.code__ImageBox}>
                <Image src={imageCode} width={20} height={72} alt="" />
              </div>
              <div className={style.code__box}>
                <code>
                  <p>.layout &#123;</p>
                  <p>display: grid;</p>
                  <p>grid-template-columns: {dynamicColumnValue};</p>
                  <p>grid-template-rows: {dynamicRowsValue};</p>
                  <p>align-content: {alignContent};</p>
                  <p>justify-content: {justifyContent};</p>
                  <p>
                    {" "}
                    gap: {gap}
                    {gapRowValueType} {gapColumn}
                    {gapColumnValueType};
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
  gapColumn,
  dynamicColumnValue,
  dynamicRowsValue,
  gapRowValueType,
  gapColumnValueType,
  justifyContent,
  alignContent,
  rowsNumberHeight,
  columnsNumberWidth,
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
        gap: `${gap}${gapRowValueType} ${gapColumn}${gapColumnValueType}`,
        gridTemplateColumns: dynamicColumnValue,
        gridTemplateRows: dynamicRowsValue,
        justifyContent: justifyContent,
        alignContent: alignContent,
      }}
    >
      {blocks}
    </div>
  );
}
