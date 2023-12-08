import { TextInputType } from "../components/shared/TextInput";

export type UserDTO = {
    username: string;
    email: string;
    password: string;
}

export type LoginDTO = {
    username: string;
    password: string;
}

export type FormField = {
    formName: string;
    identifier: string;
    inputType: TextInputType;
    value: string;
    handleOnChange: () => void;
}