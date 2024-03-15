import React, { useId } from "react";

function Select({ options = [], label, className, ...props },ref) {
  const id = useId();
  return (
    <>
    {label && <label className="" htmlFor={id}>{label}</label>}
      <select className={` ${className} `} ref={ref}>
        {options?.map((option) => {
          return (
            <option key={id} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Select;
