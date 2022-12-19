import logo from './logo.svg';
import './css_files/App.css';
import './css_files/homepage.css';

import { HomePage } from './pages/homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
