import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";

const Like = () => {
  const [status, setStatus] = useState(false);

  return (
    <div onClick={() => setStatus(!status)}>
      {status ? <FaHeart color="#ff6bf1" size={20} /> : <CiHeart size={20} />}
    </div>
  );
};

export default Like;
