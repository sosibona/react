import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.jsx'
import './index.scss';
// import './comment.scss';

const rootElement = document.querySelector('#root');

const userInfo = {
  name: 'Taras',
  avatarUrl: 'https://avatars2.githubusercontent.com/u/48248564?s=400&u=ead781175af280bc4637070cff6cb9aaa097aaaf&v=4'
}



ReactDOM.render(
  <Comment user={userInfo} text="Good job!" />,
  rootElement
)