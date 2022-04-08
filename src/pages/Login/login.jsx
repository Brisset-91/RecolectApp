import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ImgLogin from "../../Components/imgLogin/imgLogin"
import LoginForm from "../../Components/loginForm/loginForm"
import './login.scss'

const Login = (props) => {
    const [isLogged, setIsLogged] = useState(true)
    const navigate = useNavigate()

    const login = () => {
        alert('Sesión iniciada con éxito, redireccionando!')

        //setIsLogged(!isLogged)
        localStorage.setItem('userToken', '1234asdf')
        
        setTimeout(function () {
            navigate('/AddNewBusinessOne')
        }, 2000)
    }

    return (
        <div className='container d-flex flex-column justify-content-center align-items-center'>
            <div>
                < ImgLogin />
            </div>
            <div>
                < LoginForm inputLogin={{login}} />
            </div>
   
        </div>
    )
}

export default Login