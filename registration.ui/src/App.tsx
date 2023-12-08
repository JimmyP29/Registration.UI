import React, { useEffect, useState } from 'react';
import { getUsers, registerUser } from './Api';
import './App.css';
import RegisterForm from './components/RegisterForm';
import { UserDTO } from './Types';
import LoginForm from './components/LoginForm';

const App = () => {
  // useEffect(() => {
  //   getUsers();
  // }, []);
  const [registerUsernameValue, setRegisterUsernameValue] = useState('');
  const [registerEmailValue, setRegisterEmailValue] = useState('');
  const [registerPasswordValue, setRegisterPasswordValue] = useState('');

  const [loginUsernameValue, setLoginUsernameValue] = useState('');
  const [loginPasswordValue, setLoginPasswordValue] = useState('');

  //const [userDTO, setUserDto] = useState<UserDTO>();

  const handleRegisterUsernameValue = (enteredText: string) => setRegisterUsernameValue(enteredText);
  const handleRegisterEmailValue = (enteredText: string) => setRegisterEmailValue(enteredText);
  const handleRegisterPasswordValue = (enteredText: string) => setRegisterPasswordValue(enteredText);

  const handleLoginUsernameValue = (enteredText: string) => setLoginUsernameValue(enteredText);
  const handleLoginPasswordValue = (enteredText: string) => setLoginPasswordValue(enteredText);


  const handleRegisterOnSubmit = async (event: any, user: UserDTO) => {
    event.preventDefault();
    console.log(user);
    await registerUser(user);
  }

  const handleLoginSubmit = async (event: any, username: string, password: string) => {
    event.preventDefault();
    console.log('boom')
  }

  return (
    <main className="App">
      <section>
        <RegisterForm
          usernameValue={registerUsernameValue}
          emailValue={registerEmailValue}
          passwordValue={registerPasswordValue}
          handleUsernameValue={handleRegisterUsernameValue}
          handleEmailValue={handleRegisterEmailValue}
          handlePasswordValue={handleRegisterPasswordValue}
          handleOnSubmit={handleRegisterOnSubmit}
        />
      </section>
      <section>
        <LoginForm
          usernameValue={loginUsernameValue}
          passwordValue={loginPasswordValue}
          handleUsernameValue={handleLoginUsernameValue}
          handlePasswordValue={handleLoginPasswordValue}
          handleOnSubmit={handleLoginSubmit}
        />
      </section>
      <section>
        <article></article>
      </section>
    </main>
  );
}

export default App;
