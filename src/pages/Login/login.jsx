/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ImgLogin from "../../Components/imgLogin/imgLogin"
import LoginForm from "../../Components/loginForm/loginForm"
import RegisterForm from '../../Components/registerForm/registerForm'
import loginApi from '../../lib/loginApi'
import './login.scss'

const Login = (props) => {

    /*
    const [isLogged, setIsLogged] = useState(true)
   

    const register = () => {
        const token = localStorage.getItem('userToken')
        console.log( typeof(token) )
        console.log(token)
        
        console.log('click')
        
        return  !!token? < RegisterForm/> : console.log('si token')  
    } 
    

    const [users, setUsers] = useState({})

    useEffect(async () => {
        let dataUser = await loginApi.getAllUser()
        setUsers(dataUser)

    }, [])

    console.log(users) */

    const navigate = useNavigate()

    const [token, setToken] = useState({})

    const searchInputLogin = event => {
        const value = event.target.value
        const property = event.target.name

        setToken({...token, [property]: value})
        
    }

    console.log(token)

    const saveFormUser = async () => {
        const result = await loginApi.postsUsers(token)
        console.log(token)

        /*
        localStorage.clear()
        localStorage.setItem("user", JSON.stringify(token))

        alert('Sesión iniciada con éxito, redireccionando!')

        
        setTimeout(function () {
            navigate('/home')
        }, 2000)*/
    }
    
   // console.log('token',token)
/*
    const userLogin = () => {

        let dataUsers = Object.keys(users)

        dataUsers.forEach(element => {
            const user = users[element]

            console.log(user)
        });

       // console.log(dataUsers)
     
        
        
        alert('SesiuserLoginón iniciada con éxito, redireccionando!')

        localStorage.setItem('userToken', '1234asdf')
        setTimeout(function () {
            navigate('/home')
        }, 2000)
    }*/

   

    return (
        <div className='container d-flex flex-column  align-items-center'>
            
            < ImgLogin />
        
            < LoginForm 
                inputSearch={{saveFormUser}} 
                inputLogin= {{searchInputLogin}}
            />
            
        </div>
    )
}

export default Login