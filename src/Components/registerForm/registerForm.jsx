
import './registerForm.scss'

const RegisterForm = (props) => { 

    return (
        <div className='row registerForm' >
            <div className='col-12'>
                <h1 className='titleRegister font-weight'>REGISTER FORM</h1>
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
            
   
        </div>
        
    )
}

export default RegisterForm