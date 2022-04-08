import { useEffect } from 'react'
import RegisterForm from '../registerForm/registerForm'

import './loginForm.scss'

const LoginForm = (props) => {
    
    const { inputLogin } = props

    const token = localStorage.getItem('userToken')
    console.log( typeof(token) )
  
    const register = () => {
       
        if (token.length > 1) {
            console.log(token)
            return (
                <RegisterForm />
            )
        } else {
            console.log('hola')
        }
    }

    return (
        <div className='row '>
            <div className='col-12 '>
                <div className=' mt-4'>
                    <input className="form-control date-form" type="text" placeholder="ACOUNT" aria-label="default input example"/>
                </div>
                <div className=' mt-3'>
                    <input className="form-control date-form" type="text" placeholder="PASSWORD" aria-label="default input example"/>
                    <div className='px-3'>
                        <p className='text'>Forgot youre pasword?</p>
                    </div>
                </div>
            </div>
            <div className='btn-container col-12'>
                <button type="button" className="btn btn-login " onClick={inputLogin.userLogin}>LOGIN</button>
                <p className='text'>OR</p>
                <button type="button" className="btn btn-register" onClick={register} >REGISTER </button>
            </div>

        </div>
    )
}
    
export default LoginForm