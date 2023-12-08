import { useState } from 'react';
import { getUsers, loginUser, registerUser } from './Api';
import RegisterForm from './components/RegisterForm';
import { LoginDTO, UserDTO } from './models/types';
import LoginForm from './components/LoginForm';
import Button, { ButtonType } from './components/shared/Button';
import { RETRIEVE_USERS } from './constants';
import UserDisplay from './components/UserDisplay';

const App = () => {
  const [registerUsernameValue, setRegisterUsernameValue] = useState('');
  const [registerEmailValue, setRegisterEmailValue] = useState('');
  const [registerPasswordValue, setRegisterPasswordValue] = useState('');

  const [loginUsernameValue, setLoginUsernameValue] = useState('');
  const [loginPasswordValue, setLoginPasswordValue] = useState('');

  const [users, setUsers] = useState<UserDTO[]>([]);
  const [isUserDisplayVisible, setIsUserDisplayVisible] = useState(false);

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

    if (users.length > 0) {
      setUsers(users);
      setIsUserDisplayVisible(true);
    }

    return null;
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
        {
          isUserDisplayVisible &&
          <UserDisplay users={users} />
        }
      </section>
    </main>
  );
}

export default App;
