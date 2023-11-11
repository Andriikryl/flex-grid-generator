import { useId } from "react";
import style from "./style.module.css";
import clsx from "clsx";
interface InputProps {
  numberLabel: string;
  value: number;
  set: (newValue: number) => void;
  min?: number;
  max?: number;
  className?: string;
  step?: number;
  disabled?: any;
}

export function InputFrame({
  value,
  numberLabel,
  set,
  min = -500,
  max = 500,
  className,
  disabled,
  step = 1,
}: InputProps) {
  const id = useId();
  const numberValumeId = `${id}-number-value`;
  return (
    <form className={clsx(style.form, className)}>
      <div className={style.label__box}>
        <label className={style.label} htmlFor={numberValumeId}>
          {numberLabel}
        </label>
        <input
          className={clsx(style.input__number)}
          type="number"
          id={numberValumeId}
          value={value}
          min={min}
          step={step}
          max={max}
          disabled={disabled}
          onChange={(e) => set(parseFloat(e.target.value) || 0)}
        />
      </div>
    </form>
  );
}
