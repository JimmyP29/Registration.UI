import Button, { ButtonType } from "./shared/Button";
import Label from "./shared/Label";
import TextInput, { TextInputType } from "./shared/TextInput";

const LoginForm = ({
    usernameValue,
    passwordValue,
    handleUsernameValue,
    handlePasswordValue,
    handleOnSubmit,
}: Props) => {
    const username = 'Username';
    const password = 'Password';

    const handleFormOnSubmit = (event: any) => handleOnSubmit(event, '', '');

    return (
        <form method="POST" onClick={handleFormOnSubmit}>
            <fieldset>
                <legend>Login Form</legend>
                <p>
                    <Label name={username} htmlFor={username} />
                    <TextInput
                        id={username}
                        type={TextInputType.TEXT}
                        name={username}
                        value={usernameValue}
                        handleOnChange={handleUsernameValue}
                    />
                </p>
                <p>
                    <Label name={password} htmlFor={password} />
                    <TextInput
                        id={password}
                        type={TextInputType.PASSWORD}
                        name={password}
                        value={passwordValue}
                        handleOnChange={handlePasswordValue}
                    />
                </p>
            </fieldset>
            <Button
                type={ButtonType.SUBMIT}
                value="Login"
            />
        </form>
    );
}

interface Props {
    usernameValue: string;
    passwordValue: string;
    handleUsernameValue: (enteredText: string) => void;
    handlePasswordValue: (enteredText: string) => void;
    handleOnSubmit: (event: any, username: string, password: string) => void;
}

export default LoginForm;
