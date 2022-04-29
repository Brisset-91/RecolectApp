/* eslint-disable import/no-anonymous-default-export */

const BASE_URL = 'https://recolectappi-anxious-dugong-ea.mybluemix.net'

export default {

    saveAddNewBusiness: async bisinessData => {

        const token = JSON.parse( localStorage.getItem('token'))
        
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