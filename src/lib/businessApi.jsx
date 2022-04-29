/* eslint-disable import/no-anonymous-default-export */

const BASE_URL = 'https://recolectappi-anxious-dugong-ea.mybluemix.net'

export default {


    getAllBusiness: async () => {

        const token = JSON.parse( localStorage.getItem('token'))
        console.log(token.id)

        let response = await fetch(`${BASE_URL}/business/?user=${token.id}`,
            {
                method: "GET",
                headers: {
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${token.user}` 
                },
               // body: JSON.stringify(newPost),
            }
        )
        return await response.json()


        
    },

}