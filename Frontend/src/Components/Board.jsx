import React, { useState } from 'react';
import './Board.css';

const Board = (props) => {
  const [showMove, setshowMove] = useState("");

  const accept = () => {
    setshowMove(props.t[0].move); 
  }

  return (
    <div>
      <button onClick={accept}>{showMove}</button>
      <button onClick={accept}>{showMove}</button>
      <button onClick={accept}>{showMove}</button>
    </div>
  );
}

export default Board;
