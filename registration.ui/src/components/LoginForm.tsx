import { FormField, LoginDTO } from "../models/types";
import { TextInputType } from "./shared/TextInput";
import { USERNAME, PASSWORD, LOGIN } from "../constants";
import FormWrapper, { renderForm } from "./shared/FormWrapper";

const LoginForm = ({
    usernameValue,
    passwordValue,
    handleUsernameValue,
    handlePasswordValue,
    handleOnSubmit,
}: Props) => {

    const formFields = [
        {
            formName: LOGIN,
            identifier: USERNAME,
            inputType: TextInputType.TEXT,
            value: usernameValue,
            handleOnChange: handleUsernameValue,
        } as FormField,
        {
            formName: LOGIN,
            identifier: PASSWORD,
            inputType: TextInputType.PASSWORD,
            value: passwordValue,
            handleOnChange: handlePasswordValue,
        } as FormField,
    ];

    const handleFormOnSubmit = (event: any) =>
        handleOnSubmit(event, { username: usernameValue, password: passwordValue } as LoginDTO);

    return (
        <FormWrapper handleFormOnSubmit={handleFormOnSubmit} name={LOGIN}>
            {renderForm(formFields)}
        </FormWrapper>
    );
}

interface Props {
    usernameValue: string;
    passwordValue: string;
    handleUsernameValue: (enteredText: string) => void;
    handlePasswordValue: (enteredText: string) => void;
    handleOnSubmit: (event: any, loginDTO: LoginDTO) => void;
}

export default LoginForm;
