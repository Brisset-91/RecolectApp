/* eslint-disable import/no-anonymous-default-export */

//const BASE_URL = 'https://recolectapp-b1aa4-default-rtdb.firebaseio.com'
const BASE_URL = 'http://localhost:8080'

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