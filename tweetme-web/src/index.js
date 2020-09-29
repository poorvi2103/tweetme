import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {TweetComponent} from './tweets';


const appEl = document.getElementById('root')
if(appEl){
  ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  appEl);
}

const tweetsEl = document.getElementById('tweetme')
if(tweetsEl){
   ReactDOM.render(
  <React.StrictMode>
    <TweetComponent />
  </React.StrictMode>,
  tweetsEl);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
