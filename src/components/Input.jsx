/* eslint-disable no-unused-vars */
import React, { forwardRef, useId } from "react";

const Input = ({ label, type = "text", clasName = "", ...props }, ref) => {
  const id = useId();
  return (
    <div className="w-ful">
      {label && (
        <label className="" htmlFor={id}>
          {label}
        </label>
      )}
      <input type={type} className={`$ {clasName}`} ref={ref} {...props} />
    </div>
  );
};

export default forwardRef(Input);
