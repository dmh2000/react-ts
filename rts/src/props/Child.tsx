import React from "react";
interface ChildProps {
  color?: string;
  onclick?: () => void;
  children?: React.ReactNode;
}

const Child: React.FC<ChildProps> = ({ color, onclick, children }) => {
  return (
    <div>
      <button onClick={onclick}>
        {color}
        {children}
      </button>
    </div>
  );
};

export default Child;
