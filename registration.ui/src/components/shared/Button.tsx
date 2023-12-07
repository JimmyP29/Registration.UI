export enum ButtonType {
    SUBMIT = 'submit',
    BUTTON = 'button',
}

const Button = ({ type, value, callback }: Props) => {
    return (
        type === ButtonType.SUBMIT ?
            (<button type={type}>{value}</button>)
            :
            (<button type={type} onClick={callback}>{value}</button>)
    );
}

interface Props {
    type: ButtonType;
    value: string;
    callback?: () => void;
}

export default Button;
