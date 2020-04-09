import React, { Component } from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";

class TasksList extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.createTask = this.createTask.bind(this);
    this.handleTaskStatusChange = this.handleTaskStatusChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.state = {
      tasks: [
        { text: "Buy milk", done: false, id: 1 },
        { text: "Pick up Tom", done: false, id: 2 },
        { text: "Visit party", done: false, id: 3 },
        { text: "Visit doctor", done: true, id: 4 },
        { text: "Buy meat", done: true, id: 5 },
      ],
      newTask: "",
    };
  }

  createTask = () => {
    const newTask = {
      text: this.state.newTask,
      done: false,
      id: Math.random(),
    };
    this.state.tasks.push(newTask);
    this.setState({
      tasks: this.state.tasks,
      newTask: "",
    });
  };

  handleChange = (event) => {
    const newTask = event.target.value;
    this.setState({
      newTask: newTask,
    });
  };

  handleTaskStatusChange = (id) => {
    const updatedTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    this.setState({
      tasks: updatedTasks,
    });
  };

  deleteTask = (id) => {
    const updeateTask = this.state.tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: updeateTask,
    })
  };

  render() {
    const sortedTask = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreateTaskInput
          handleChange={this.handleChange}
          createTask={this.createTask}
          newTask={this.state.newTask}
        />
        <ul className="list">
          {sortedTask.map((task) => {
            return (
              <Task
                key={task.id}
                {...task}
                onChange={this.handleTaskStatusChange}
                onDelete={this.deleteTask}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TasksList;
