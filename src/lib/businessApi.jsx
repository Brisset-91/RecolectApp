/* eslint-disable import/no-anonymous-default-export */

const BASE_URL = 'http://localhost:8080'


  


export default {


    getAllBusiness: async () => {
        
        const token = JSON.parse( localStorage.getItem('token'))
        console.log(token.id)

        let response = await fetch(`${BASE_URL}/business/?user=${token.id}`)
        return await response.json()
    },

}