import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 1, name: 'Petya'},
    {id: 2, name: 'Yura'},
    {id: 3, name: 'Olya'},
    {id: 4, name: 'Andru'},
    {id: 5, name: 'Blade'}
];

let messages = [
    {id: 1, message: 'Hi'},
    {id: 1, message: 'Where are you from?'},
    {id: 1, message: 'How old are you?'},
];

let posts = [
    {id: 1, message: 'It\'s my first message', likesCount: 4},
    {id: 2, message: 'It\'s my second message', likesCount: 7},
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
