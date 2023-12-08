import { UserDTO } from "./Types";

const DOMAIN = 'https://localhost:7185';

export const getUsers = async () => {
    await fetch(`${DOMAIN}/users`, {
        method: 'GET',
        mode: 'cors'
    }).then((response) => {
        if (!response.ok) {
            throw new Error(JSON.stringify(response.json()))
        }

        return response.json();
    });
}

export const registerUser = async (user: UserDTO) => {
    console.log(user);
    await fetch(`${DOMAIN}/register`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    }).then((response) => {
        if (!response.ok) {
            throw new Error(JSON.stringify(response.json()))
        }

        return response.json();
    });
}