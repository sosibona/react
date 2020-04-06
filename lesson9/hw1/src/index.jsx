import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import UserList from "./UserList";

const users = [
  {
    id: "id-0",
    age: 21,
    name: "Bob",
  },
  {
    id: "id-1",
    age: 17,
    name: "Tom",
  },
  {
    id: "id-2",
    age: 18,
    name: "Tad",
  },
  {
    id: "id-3",
    age: 45,
    name: "Justin",
  },
  {
    id: "id-4",
    age: 45,
    name: "Franklin",
  },
  {
    id: "id-5",
    age: 45,
    name: "John",
  },
  {
    id: "id-6",
    age: 45,
    name: "GromCode",
  },
];

const root = document.querySelector("#root");

ReactDOM.render(<UserList users={users} />, root);
