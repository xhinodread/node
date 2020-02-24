import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import Main from './contenedores/Main';
import Starter from './contenedores/Starter03';

import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylos/starter-template.css";
import 'bootstrap/dist/js/bootstrap.js'
/***
import './js/jquery-3.4.1.min.js';
import './js/popper.min.js';
import './js/bootstrap.min.js';
import './js/mdb.min.js';
******/
ReactDOM.render(<Starter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
