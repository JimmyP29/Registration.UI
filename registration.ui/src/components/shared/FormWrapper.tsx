import { FormField } from "../../models/types";
import Button, { ButtonType } from "./Button";
import Label from "./Label";
import TextInput from "./TextInput";

const FormWrapper = ({ handleFormOnSubmit, name, children }: Props) => {
    return (
        <form method="POST">
            <fieldset>
                <legend>{name}</legend>
                {children}
            </fieldset>
            <Button
                type={ButtonType.BUTTON}
                value={name}
                onClick={handleFormOnSubmit}
            />
        </form>
    );
}

export const renderForm = (formFields: FormField[]) => formFields.map(({
    formName,
    identifier,
    inputType,
    value,
    handleOnChange
}) => (
    <p key={identifier}>
        <Label name={identifier} htmlFor={identifier} />
        <TextInput
            id={`${formName}-${identifier}`}
            type={inputType}
            name={identifier}
            value={value}
            handleOnChange={handleOnChange}
        />
    </p>
));

interface Props {
    handleFormOnSubmit: (event: any) => void
    name: string;
    children: JSX.Element | JSX.Element[];
}

export default FormWrapper;
