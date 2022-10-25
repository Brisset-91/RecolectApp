/* eslint-disable import/no-anonymous-default-export */
const BASE_URL = "http://localhost:8000"
console.log('BASE_URL',BASE_URL)

export default {

     postsUsers: async usersData => {
       
        await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usersData)
        })

        .then((response)=> response.json())
    
        .then( async (data)=>{
          
            console.log('succes:',data.message)
            
            localStorage.setItem('token',JSON.stringify(data))
            console.log(data)
            
            if(data.ok == false) {
                alert('Invalid Credentials')
                return
            }
            
            return await data
            
        })
    
        .catch(error =>{
            console.log('error:', error)
        })

       
    },


}