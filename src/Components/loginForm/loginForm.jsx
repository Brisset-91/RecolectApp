
import { Link } from 'react-router-dom'

import './loginForm.scss'

const LoginForm = (props) => {
    
    const { inputLogin } = props

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
               <button type="button" className="btn btn-register" ><Link to='/register' className='linkRegister' > REGISTER </Link> </button>
                
            </div>

        </div>
    )
}
    
export default LoginForm