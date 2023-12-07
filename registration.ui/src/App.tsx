import React, { useEffect } from 'react';
import {getUsers} from './Api';
import './App.css';

function App() {
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="App">
      Working
    </div>
  );
}

export default App;
