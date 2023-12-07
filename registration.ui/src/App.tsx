import React, { useEffect } from 'react';
import { getUsers } from './Api';
import './App.css';
import RegisterForm from './components/RegisterForm';

const App = () => {
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <main className="App">
      <RegisterForm />
    </main>
  );
}

export default App;
