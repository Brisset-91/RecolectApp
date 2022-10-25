/* eslint-disable import/no-anonymous-default-export */
const BASE_URL = "http://localhost:8000"
console.log('BASE_URL',BASE_URL)

export default {

    saveUsers: async usersData => {
        let response = await fetch(`${BASE_URL}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usersData)
        })
        return await response.json()
    },




}