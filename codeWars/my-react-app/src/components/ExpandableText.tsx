import React, { useState } from "react";

interface Props {
  children: string;
}

export const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100;

  // Determine whether to show full text or truncated text
  const displayText =
    children.length <= maxLength || isExpanded
      ? children
      : children.substring(0, maxLength) + "...";

  return (
    <div>
      <p>{displayText}</p>
      {children.length > maxLength && (
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
