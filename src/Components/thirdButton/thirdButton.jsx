
import './thirdButton.scss'

function ThirdButton(props) {
    const { register } = props
    
    return (
        <div className=' col-12 d-flex justify-content-center align-items-center'>
            <button type="button" className="btn btnRegister " onClick={register.saveFormRegister} >REGISTER</button>
        </div>
    )
}

export default ThirdButton
