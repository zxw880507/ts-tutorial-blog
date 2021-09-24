import React from "react";
import styles from "./alert.module.css";
import classNames from "classnames";

enum ClassNames {
  Success = "success",
  Error = "error",
}

interface AlertProps {
  children: React.ReactNode;
  type?: string;
}

export default function Alert({ children, type }: AlertProps) {
  const classes = classNames({
    [styles.success]: type === ClassNames.Success,
    [styles.error]: type === ClassNames.Error,
  });
  return <div className={classes}>{children}</div>;
}
