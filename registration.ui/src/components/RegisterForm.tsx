import { useState } from "react";
import Button, { ButtonType } from "./shared/Button";
import Label from "./shared/Label";
import TextInput, { TextInputType } from "./shared/TextInput";
import { UserDTO } from "../Types";

const RegisterForm = ({ handleOnSubmit }: Props) => {
    const [usernameValue, setUsernameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const username = 'Username';
    const email = 'Email';
    const password = 'Password';

    // const handleOnChangeUsername = (enteredText: string) => {
    //     setUsernameValue(enteredText);
    // }

    // const handleOnChangeEmail = (enteredText: string) => {
    //     setEmailValue(enteredText);
    // }

    // const handleOnChangePassword = (enteredText: string) => {
    //     setPasswordValue(enteredText);
    // }

    const handleFormOnSubmit = (event: any) => {
        //event.preventDefault();
        handleOnSubmit(event, { username: usernameValue, email: emailValue, password: passwordValue } as UserDTO);
        // setUsernameValue('');
        // setEmailValue('');
        // setPasswordValue('');
    }

    return (
        <form method="POST" onClick={handleFormOnSubmit}>
            <fieldset>
                <legend>Register Form</legend>
                <p>
                    <Label name={username} htmlFor={username} />
                    <TextInput id={username} type={TextInputType.TEXT} name={username} value={usernameValue} handleOnChange={setUsernameValue} />
                </p>
                <p>
                    <Label name={email} htmlFor={email} />
                    <TextInput id={email} type={TextInputType.TEXT} name={email} value={emailValue} handleOnChange={setEmailValue} />
                </p>
                <p>
                    <Label name={password} htmlFor={password} />
                    <TextInput id={password} type={TextInputType.PASSWORD} name={password} value={passwordValue} handleOnChange={setPasswordValue} />
                </p>
            </fieldset>
            <Button
                type={ButtonType.SUBMIT}
                value="Register"
            />
        </form>
    );
}

interface Props {
    handleOnSubmit: (event: any, userDTO: UserDTO) => void;
}

export default RegisterForm;
