import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import RetroCommentPage from './components/RetroCommentPage';

const comments = [
    {
        user: "Linas",
        text: "komentaras"
    },
    {
        user: "Sima",
        text: "Kitas komentaras"
    }
]
const jsx = <RetroCommentPage comments={comments}/>;


ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
