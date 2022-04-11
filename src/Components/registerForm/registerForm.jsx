
import './registerForm.scss'

const RegisterForm = (props) => { 

    return (
            <div className='col-12 m-0 p-0 d-flex  flex-column '>
                <h1 className='titleRegister font-weight d-flex'>REGISTER FORM</h1>
                <div className='inputRegister mt-4'>
                    <input className="form-control nameRegister" type="text" placeholder="NAME" aria-label="default input example"/>
                </div>
                <div className='inputRegister mt-4'>
                    <input className="form-control nameRegister" type="text" placeholder="EMAIL" aria-label="default input example"/>
                </div>
                <div className='inputRegister mt-4'>
                    <input className="form-control nameRegister" type="text" placeholder="PASSWORD" aria-label="default input example"/>
                </div>
                <div className='inputRegister mt-4'>
                    <input className="form-control nameRegister" type="text" placeholder="CONFIRM PASSWORD" aria-label="default input example"/>
                </div>

            </div>
            
        
    )
}

export default RegisterForm