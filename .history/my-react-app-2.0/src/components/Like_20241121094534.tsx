import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = () => {
  const [status, setStatus] = useState(true);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  return (
    <div onClick={toggle}>
      {status ? (
        <FaHeart color="#ff6bf1" size={20} onClick={toggle} />
      ) : (
        <CiHeart size={20} />
      )}
    </div>
  );
};

export default Like;
