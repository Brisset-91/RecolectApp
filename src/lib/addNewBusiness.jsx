/* eslint-disable import/no-anonymous-default-export */

const BASE_URL = 'http://localhost:8080'

const token = JSON.parse( localStorage.getItem('token'))
console.log(token.id)

export default {

    saveAddNewBusiness: async bisinessData => {
        let response = await fetch(`${BASE_URL}/business`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token.user}` 
            },
            body: JSON.stringify(bisinessData)
        })
        return await response.json()
    },

}