import React from "react";

interface Props {
  Text: string[];
}

export const ExpandableText = ({ Text }: Props) => {
  return <div>ExpandableText: {Text}</div>;
};

export default ExpandableText;
