import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Resume from './pages/resume/resume';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Resume />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;