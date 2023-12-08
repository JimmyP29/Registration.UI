export enum TextInputType {
    TEXT = 'text',
    PASSWORD = 'password',
}

const TextInput = ({ id, type, name, value = '', handleOnChange }: Props) => (
    <>
        <input id={id} type={type} name={name} value={value} onChange={({ target: { value } }) => handleOnChange(value)} aria-label={name} />
    </>
);

interface Props {
    id: string;
    type: TextInputType;
    value?: string;
    name: string;
    handleOnChange: (enteredText: string) => void;
}

export default TextInput;
