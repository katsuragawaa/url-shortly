import { ButtonHTMLAttributes } from "react";

import "./button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isCopied?: boolean;
};

export function Button({ isCopied = false, ...props }: ButtonProps) {
  return (
    <button
      className={`btn`}
      {...props}
    />
  );
}
