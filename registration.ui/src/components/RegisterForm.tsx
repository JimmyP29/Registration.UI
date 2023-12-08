import { FormField, UserDTO } from "../models/types";
import { TextInputType } from "./shared/TextInput";
import { USERNAME, EMAIL, PASSWORD, REGISTER } from "../constants";
import FormWrapper, { renderForm } from "./shared/FormWrapper";

const RegisterForm = ({
    usernameValue,
    emailValue,
    passwordValue,
    handleUsernameValue,
    handleEmailValue,
    handlePasswordValue,
    handleOnSubmit,
}: Props) => {

    const formFields = [
        {
            formName: REGISTER,
            identifier: USERNAME,
            inputType: TextInputType.TEXT,
            value: usernameValue,
            handleOnChange: handleUsernameValue,
        } as FormField,
        {
            formName: REGISTER,
            identifier: EMAIL,
            inputType: TextInputType.TEXT,
            value: emailValue,
            handleOnChange: handleEmailValue,
        } as FormField,
        {
            formName: REGISTER,
            identifier: PASSWORD,
            inputType: TextInputType.PASSWORD,
            value: passwordValue,
            handleOnChange: handlePasswordValue,
        } as FormField,
    ];

    const handleFormOnSubmit = (event: any) => {
        handleOnSubmit(event, { username: usernameValue, email: emailValue, password: passwordValue } as UserDTO);
    }

    return (
        <FormWrapper handleFormOnSubmit={handleFormOnSubmit} name={REGISTER}>
            {renderForm(formFields)}
        </FormWrapper>
    );
}

interface Props {
    usernameValue: string;
    emailValue: string;
    passwordValue: string;
    handleUsernameValue: (enteredText: string) => void;
    handleEmailValue: (enteredText: string) => void;
    handlePasswordValue: (enteredText: string) => void;
    handleOnSubmit: (event: any, userDTO: UserDTO) => void;
}

export default RegisterForm;
