import { LoginDTO, UserDTO } from "./models/types";

const DOMAIN = 'https://localhost:7185';

export const getUsers = async () => {
    await fetch(`${DOMAIN}/users`, {
        method: 'GET',
        mode: 'cors'
    }).then((response) => {
        if (!response.ok) {
            throw new Error(JSON.stringify(response.json()))
        }
        const blah = response.json()
        console.log(blah)

        return blah
    });
}

export const registerUser = async (user: UserDTO) => {
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

export const loginUser = async (login: LoginDTO) => {
    await fetch(`${DOMAIN}/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(login),
    }).then((response) => {
        if (!response.ok) {
            throw new Error(JSON.stringify(response.json()))
        }

        return response.json();
    });
}
