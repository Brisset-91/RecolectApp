import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ImgLogin from "../../Components/imgLogin/imgLogin"
import LoginForm from "../../Components/loginForm/loginForm"
import RegisterForm from '../../Components/registerForm/registerForm'
import './login.scss'

const Login = (props) => {
    const [isLogged, setIsLogged] = useState(true)
    const navigate = useNavigate()

    const userLogin = () => {
        alert('Sesión iniciada con éxito, redireccionando!')

        //setIsLogged(!isLogged)
        localStorage.setItem('userToken', '1234asdf')
        
        setTimeout(function () {
            navigate('/home')
        }, 2000)
    }

    const register = () => {
        const token = localStorage.getItem('userToken')
        console.log( typeof(token) )
        console.log(token)
        
        console.log('click')
        
        return  !!token? < RegisterForm/> : console.log('si token')  
    }

    return (
        <div className='container d-flex flex-column  align-items-center'>
            
            < ImgLogin />
        
            < LoginForm 
            inputLogin={{userLogin}} 
            />
            
        </div>
    )
}

export default Login