import React from "react";

interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children }: Props) => {
  return (
    <button className="btn btn-primary" type="button">
      {children}
    </button>
  );
};

export default Button;
