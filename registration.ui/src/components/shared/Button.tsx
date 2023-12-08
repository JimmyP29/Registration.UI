export enum ButtonType {
    SUBMIT = 'submit',
    BUTTON = 'button',
}

const Button = ({ type, value, onClick }: Props) => {
    return (
        type === ButtonType.SUBMIT ?
            (<button type={type} aria-label={value}>{value}</button>)
            :
            (<button type={type} aria-label={value} onClick={onClick}>{value}</button>)
    );
}

interface Props {
    type: ButtonType;
    value: string;
    onClick?: (event: any) => void;
}

export default Button;
