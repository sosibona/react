import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const rootElement = document.querySelector('#root');

const element = (
    <div className="greeting">
        <div className="greeting__title">Hello, World!</div>
        <div className="greeting__text">I'm learning React</div>
    </div>
);

ReactDOM.render(element, rootElement);

// const renderGreeting = elem => {
//     const containerElem = document.createElement('div');
//     containerElem.classList.add('greeting');
    
//     const titleElem = document.createElement('h1');
//     titleElem.classList.add('greeting__title');
//     titleElem.textContent = 'Hello, world!'; 
    
//     const textElem = document.createElement('p');
//     textElem.classList.add('greeting__text');
//     textElem.textContent = 'I\'m learning React';

//     containerElem.append(titleElem, textElem);

//     elem.append(containerElem);
// };

// renderGreeting(rootElement);