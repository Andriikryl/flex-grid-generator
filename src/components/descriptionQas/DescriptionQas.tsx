import React from "react";
import style from "./style.module.css";

interface DescriptionQasProps {
  children: React.ReactNode;
}

export default function DescriptionQas({ children }: DescriptionQasProps) {
  return <p className={style.description}>{children}</p>;
}
