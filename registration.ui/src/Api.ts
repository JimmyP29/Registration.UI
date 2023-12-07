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
