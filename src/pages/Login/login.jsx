/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import ImgLogin from "../../Components/imgLogin/imgLogin"
import LoginForm from "../../Components/loginForm/loginForm"
import RegisterForm from '../../Components/registerForm/registerForm'
import loginApi from '../../lib/loginApi'
import './login.scss'

const Login = (props) => {

    const [token, setToken] = useState({})

    const searchInputLogin = event => {
        const value = event.target.value
        const property = event.target.name

        setToken({...token, [property]: value})
        
    }

    console.log(token)

    const navigate = useNavigate()

    const saveFormUser = async () => {
        const result = await loginApi.postsUsers(token)

        alert('Sesión iniciada con éxito, redireccionando!')

        const token2 = JSON.parse( localStorage.getItem('token'))

        console.log(token2)

        token2.ok == true? navigate('/home') : navigate('/register')
    }
  

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