import { UserDTO } from "../models/types";

const UserDisplay = ({ users }: Props) => (
    <article>
        <ul>
            {users.map(({ username, email }) => (
                <li key={`${username}${new Date().toString()}`}>
                    {`${username}: ${email}`}
                </li>
            ))}
        </ul>
    </article>
);

interface Props {
    users: UserDTO[];
}

export default UserDisplay;