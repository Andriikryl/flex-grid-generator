import React from "react";
import { range } from "../utils/range";
import style from "./style.module.css";

interface GraphProps {
  from: number;
  to: number;
  step: number;
  classGraph?: string;
  classReng?: string;
  style?: any;
  numOfGrafh?: any;
}

export default function Graph({
  from,
  to,
  step,
  classGraph,
  classReng,
  style,
  numOfGrafh,
}: GraphProps) {
  return (
    <div className={classGraph} style={style}>
      {range(from, to + 1, step).map((num) => (
        <div key={num} className={classReng}>
          <span>{num}</span>
        </div>
      ))}
    </div>
  );
}
