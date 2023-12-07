import Button, { ButtonType } from "./shared/Button";
import Label from "./shared/Label";
import TextInput from "./shared/TextInput";

const RegisterForm = () => {
    const username = 'Username';
    const email = 'email';
    const password = 'password';

    return (
        <form>
            <fieldset>
                <legend>Register Form</legend>
                <p>
                    <Label name={username} htmlFor={username} />
                    <TextInput id={username} name={username} value='' />
                </p>
                <p>
                    <Label name={email} htmlFor={email} />
                    <TextInput id={email} name={email} value='' />
                </p>
                <p>
                    <Label name={password} htmlFor={password} />
                    <TextInput id={password} name={password} value='' />
                </p>

            </fieldset>
            <Button
                type={ButtonType.SUBMIT}
                value="Save"
            />
        </form>
    );
}

export default RegisterForm;
