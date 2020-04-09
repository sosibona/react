import React from "react";

const CreateTaskInput = ({handleChange, createTask, newTask}) => {
  return (
    <div className="create-task">
      <input className="create-task__input" type="text" value={newTask} onChange={handleChange}/>
      <button className="btn create-task__btn" onClick={createTask}>Create</button>
    </div>
  );
};

export default CreateTaskInput;
