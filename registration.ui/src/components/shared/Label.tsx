const Label = ({ name, htmlFor }: Props) => {
    return (<label htmlFor={htmlFor} aria-label={name}>{name}</label >);
}

interface Props {
    name: string;
    htmlFor: string;
}

export default Label;
