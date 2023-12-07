const TextInput = ({ id, name, value = '' }: Props) => (
    <>
        <input id={id} type='text' name={name} value={value} />
    </>
);

interface Props {
    id: string;
    value: string;
    name: string;
}

export default TextInput;
