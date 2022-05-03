/* eslint-disable import/no-anonymous-default-export */
// const BASE_URL = 'http://localhost:8080'
const BASE_URL = 'https://recolectappi-anxious-dugong-ea.mybluemix.net'

export default {

    getAllBusiness: async () => {

        const token = JSON.parse( localStorage.getItem('token'))
        console.log(token.userToken.token)

        let response = await fetch(`${BASE_URL}/business/?user=${token.userToken.id }`,
            {
                method: "GET",
                headers: {
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${token.userToken.token}` 
                },
            }
        )
        return await response.json()
        
    },
}