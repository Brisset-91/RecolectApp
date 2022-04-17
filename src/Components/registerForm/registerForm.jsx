
import './registerForm.scss'

const RegisterForm = (props) => { 
    const { inputRegister } = props

    return (
            <div className='col-12 m-0 p-0 d-flex  flex-column '>
                <h1 className='titleRegister font-weight d-flex'>REGISTER FORM</h1>
                <div className='inputRegister mt-4'>
                    <input className="form-control nameRegister" type="text" placeholder="NAME" aria-label="default input example" name='user_name' onChange={inputRegister.formRegister} />
                </div>
                <div className='inputRegister mt-4'>
                    <input className="form-control nameRegister" type="text" placeholder="EMAIL" aria-label="default input example" name='user_mail' onChange={inputRegister.formRegister} />
                </div>
                <div className='inputRegister mt-4'>
                    <input className="form-control nameRegister" type="text" placeholder="PASSWORD" aria-label="default input example" name='user_password' onChange={inputRegister.formRegister} />
                </div>


            </div>
            
        
    )
}

export default RegisterForm