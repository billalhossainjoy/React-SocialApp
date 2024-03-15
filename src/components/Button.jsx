/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-700",
  text = "text-white",
  className = "",
  ...props
}) {
  return <div className={`px-4 py-2 ${bgColor} ${text} ${className}`} {...props}>{children}</div>;
}

export default Button;
