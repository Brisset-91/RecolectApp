/* eslint-disable import/no-anonymous-default-export */

//const BASE_URL = 'https://recolectapp-b1aa4-default-rtdb.firebaseio.com'
const BASE_URL = 'http://localhost:8080'

export default {

   /* getAllUser: async () => {
        let response = await fetch(`${BASE_URL}/auth/login`)
        return await response.json()
    },*/

    postsUsers: async usersData => {
        let response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usersData)
        })

        .then((response)=> {return await response.json()})
    
        .then((data)=>{
            console.log('succes:',data.token)
            localStorage.setItem('token',data.token)
            console.log(data)
            if(data.ok == false) {
                alert('Invalid Credentials')
                return
            }
            
        })
    
        .catch(error =>{
            console.log('error:', error)
        })

        return await response.json()
    },


}