import React, { useEffect, useState } from 'react';
import { getUsers, registerUser } from './Api';
import './App.css';
import RegisterForm from './components/RegisterForm';
import { UserDTO } from './Types';

const App = () => {
  // useEffect(() => {
  //   getUsers();
  // }, []);
  const [userDTO, setUserDto] = useState<UserDTO>();

  const handleRegisterOnSubmit = (event: any, user: UserDTO) => {
    event.preventDefault();
    console.log(user);
    registerUser(user);
  }
  return (
    <main className="App">
      <RegisterForm handleOnSubmit={handleRegisterOnSubmit} />
    </main>
  );
}

export default App;
