import React from 'react';
import { render } from 'react-dom';
import Popup from './Popup';
import './index.css';
render(React.createElement(Popup, null), window.document.querySelector('#app-container'));
