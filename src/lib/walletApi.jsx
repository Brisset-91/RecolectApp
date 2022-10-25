/* eslint-disable import/no-anonymous-default-export */
const BASE_URL = "http://localhost:8000"
console.log('BASE_URL',BASE_URL)

//http://localhost:8000/walletUser?user=6327acad514d34d5cd3972a1
export default {

    getUserByIdWallet: async () => {
        const token = JSON.parse( localStorage.getItem('token'))
        console.log(token.userToken.token)

        let response = await fetch(`${BASE_URL}/walletUser?user=${token.userToken.id }`,
            {
                method: "GET",
                headers: {
                    'Content-Type':'application/json',
                    //Authorization:`Bearer ${token.userToken.token}` 
                },
            }
        )
        return await response.json()
        
    },
}