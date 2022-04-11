import RegisterForm from "../../Components/registerForm/registerForm"
import ThirdButton from "../../Components/thirdButton/thirdButton"

const Register = (props) => {
    return (
        <div className='container'>
            <div className='row m-0 p-0'>
                 <RegisterForm />
            </div>
            <div className='row m-0 p-0'>
                <ThirdButton />
            </div>
            
        </div>
    )
}

export default Register