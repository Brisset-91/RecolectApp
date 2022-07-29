/* eslint-disable import/no-anonymous-default-export */
const BASE_URL = 'https://recolectappi-anxious-dugong-ea.mybluemix.net'

export default {

    saveAddNewCollect: async collectData => {
        const token = JSON.parse( localStorage.getItem('token'))
        let response = await fetch(`${BASE_URL}/collect`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token.userToken.token}` 
            },
            body: JSON.stringify(collectData)
        })
        return await response.json()
    },
    getAllColect: async () => {
        const token = JSON.parse( localStorage.getItem('token'))
        console.log(token.userToken.token)
        let response = await fetch(`${BASE_URL}/collect`,
            {
                method: "GET",
                headers: {
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${token.userToken.token}` 
                },
            }
        )
        return await response.json()
    }
}