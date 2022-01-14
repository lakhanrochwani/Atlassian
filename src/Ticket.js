import React, { useState } from 'react';
import './style.css';

const Ticket = ({ title }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="container">
      <div className="status">
        <h1 className="title">{title}</h1>
        <select className="options">
          <option>Todo</option>
          <option>InProgress</option>
          <option>Done</option>
        </select>
      </div>
      <div
        className="subtasks"
        onClick={() => {
          setActive((prevState) => {
            return !prevState;
          });
        }}
      >
        <p>{active ? <span>▼</span> : <span>▶</span>} Show subtasks</p>
      </div>
    </div>
  );
};

export default Ticket;
