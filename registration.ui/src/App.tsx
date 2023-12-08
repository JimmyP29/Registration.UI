import { useEffect, useState } from 'react';
import { getUsers, loginUser, registerUser } from './Api';
import './App.css';
import RegisterForm from './components/RegisterForm';
import { LoginDTO, UserDTO } from './models/types';
import LoginForm from './components/LoginForm';
import Button, { ButtonType } from './components/shared/Button';
import { RETRIEVE_USERS } from './constants';

const App = () => {
  // useEffect(() => {
  //   getUsers();
  // }, []);
  const [registerUsernameValue, setRegisterUsernameValue] = useState('');
  const [registerEmailValue, setRegisterEmailValue] = useState('');
  const [registerPasswordValue, setRegisterPasswordValue] = useState('');

  const [loginUsernameValue, setLoginUsernameValue] = useState('');
  const [loginPasswordValue, setLoginPasswordValue] = useState('');

  const handleRegisterUsernameValue = (enteredText: string) => setRegisterUsernameValue(enteredText);
  const handleRegisterEmailValue = (enteredText: string) => setRegisterEmailValue(enteredText);
  const handleRegisterPasswordValue = (enteredText: string) => setRegisterPasswordValue(enteredText);

  const handleLoginUsernameValue = (enteredText: string) => setLoginUsernameValue(enteredText);
  const handleLoginPasswordValue = (enteredText: string) => setLoginPasswordValue(enteredText);


  const handleRegisterOnSubmit = async (event: any, user: UserDTO) => {
    event.preventDefault();

    const { username, email, password } = user;
    if (!username && !email && !password) return null;

    await registerUser(user);
  }

  const handleLoginSubmit = async (event: any, login: LoginDTO) => {
    event.preventDefault();

    if (login.username && login.password) await loginUser(login);
  }

  const handleRetrieveUsersOnClick = async () => {

    const users = await getUsers();
    console.log(users)

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
        <article>
          <Button
            type={ButtonType.BUTTON}
            value={RETRIEVE_USERS}
            onClick={handleRetrieveUsersOnClick}
          />
        </article>
      </section>
    </main>
  );
}

export default App;
