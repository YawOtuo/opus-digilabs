import logo from './logo.svg';
import './css_files/App.css';
import './css_files/homepage.css';

import { HomePage } from './pages/homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { Admin } from './components/admin/admin';


class App extends React.Component {
  
render(){
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/admin' element={<Admin/>} />

    </Routes>
    </BrowserRouter>
  );
}}

export default App;
