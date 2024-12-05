import React from "react";

interface Props {
  text: string[];
}

export const ExpandableText = ({ text }: Props) => {
  return (
    <div>
      <h4>Expandable Text:</h4>
      <ul>
        {text.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpandableText;
