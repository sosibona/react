import React from "react";
import classNames from 'classnames'

const Task = ({done, text}) => {
  const listItemClass = classNames('list-item', {'list-item_done': done});
  return (
    <li className={listItemClass}>
      <input
        className="list-item__checkbox"
        type="checkbox"
        defaultChecked={done}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn"></button>
    </li>
  );
};

export default Task;
