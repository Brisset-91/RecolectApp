/* eslint-disable import/no-anonymous-default-export */
const BASE_URL = "http://localhost:8000"
console.log('BASE_URL',BASE_URL)

export default {

    saveAddNewBusiness: async businessData => {

        const token = JSON.parse( localStorage.getItem('token'))
        
        let response = await fetch(`${BASE_URL}/business`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token.userToken.token}` 
            },
            body: JSON.stringify(businessData)
        })
        return await response.json()
    },

}