import { useState } from "react"
import { useNavigate } from "react-router-dom"

import RegisterForm from "../../Components/registerForm/registerForm"
import ThirdButton from "../../Components/thirdButton/thirdButton"
import userApi from "../../lib/userApi"



const Register = (props) => {
    const [newUSer, setNewUSer] = useState({})

    const formRegister = event => {
        const value = event.target.value
        const property = event.target.name

        setNewUSer({...newUSer, [property]: value})

        console.log(newUSer)
    }
    
    const navigate = useNavigate()

    const saveFormRegister = async () => {
        const result = await userApi.saveUsers(newUSer)

        localStorage.clear()
        localStorage.setItem("user", JSON.stringify(newUSer))

        alert('Sesión iniciada con éxito, redireccionando!')

        setTimeout(function () {
            navigate('/home')
        }, 2000)
    }

    return (
        <div className='container'>
            <div className='row mt-0 p-0'>
                <RegisterForm 
                    inputRegister ={{formRegister}}
                
                />
            </div>
            
            <div className='row m-0 p-0'>
                <ThirdButton 
                    register = {{saveFormRegister}}
                />
            </div>
            
        </div>
    )
}

export default Register