/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import ImgLogin from "../../Components/imgLogin/imgLogin"
import LoginForm from "../../Components/loginForm/loginForm"
import loginApi from '../../lib/loginApi'
import './login.scss'

const Login = () => {

    const [newUser, setNewUser] = useState({})
    const searchInputLogin = event => {
        const value = event.target.value
        const property = event.target.name
        setNewUser({...newUser, [property]: value})
    }

    console.log(newUser)

    const navigate = useNavigate()

    const saveFormUser = async () => {
        localStorage.clear()
        await loginApi.postsUsers(newUser)

        alert('Sesión iniciada con éxito, redireccionando!')

        const token = JSON.parse( localStorage.getItem('token'))
        token.ok == true? navigate('/home') : navigate('/register')
    }
  
    return (
        <div className='container d-flex flex-column  align-items-center'>
            < ImgLogin />
            < LoginForm 
                inputSearch={saveFormUser} 
                inputLogin= {{searchInputLogin}}
            />
        </div>
    )
}

export default Login