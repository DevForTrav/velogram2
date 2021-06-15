import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, } from "react-router-dom"
import Title from './components/Title.js';
import UploadImageForm from './components/UploadImageForm';
import LikedCollectionPage from './components/LikedCollectionPage'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
          <Title />
          <Route path='/' exact component={App} />
          <Route path='/new' exact component={UploadImageForm} /> 
          <Route path='/likes' exact component={LikedCollectionPage} /> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
