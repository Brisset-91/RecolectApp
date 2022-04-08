
import imgLogin from '../../assets/Ellipse 1.jpg';
import './imgLogin.scss'

const ImgLogin = () => {
    return (
        <div className='row m-2 d-flex justify-content-center align-items-center' >
            <div className="imgProfile rounded-circle" >
                <img className='imgLogin' src={imgLogin} alt="" />
            </div>
        </div>
    )
}
export default ImgLogin