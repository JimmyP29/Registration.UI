import React, { useEffect, useState } from 'react';
import { getUsers, registerUser } from './Api';
import './App.css';
import RegisterForm from './components/RegisterForm';
import { UserDTO } from './Types';

const App = () => {
  // useEffect(() => {
  //   getUsers();
  // }, []);
  const [registerUsernameValue, setRegisterUsernameValue] = useState('');
  const [registerEmailValue, setRegisterEmailValue] = useState('');
  const [registerPasswordValue, setRegisterPasswordValue] = useState('');

  //const [userDTO, setUserDto] = useState<UserDTO>();

  const handleRegisterUsernameValue = (enteredText: string) => setRegisterUsernameValue(enteredText);
  const handleRegisterEmailValue = (enteredText: string) => setRegisterEmailValue(enteredText);
  const handleRegisterPasswordValue = (enteredText: string) => setRegisterPasswordValue(enteredText);


  const handleRegisterOnSubmit = async (event: any, user: UserDTO) => {
    event.preventDefault();
    console.log(user);
    await registerUser(user);
  }
  return (
    <main className="App">
      <RegisterForm
        usernameValue={registerUsernameValue}
        emailValue={registerEmailValue}
        passwordValue={registerPasswordValue}
        handleUsernameValue={handleRegisterUsernameValue}
        handleEmailValue={handleRegisterEmailValue}
        handlePasswordValue={handleRegisterPasswordValue}
        handleOnSubmit={handleRegisterOnSubmit}
      />
    </main>
  );
}

export default App;
