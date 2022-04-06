import user from '../../assets/user 1.jpg';
import './profileSettingForm.scss'

const ProfileSettingForm = () => {
    return (
        <div className='row m-2 d-flex justify-content-center align-items-center' >
                <div className="imgProfile rounded-circle" >
                    <img className='imgUser' src={user} alt="" />
                </div>
                <div>
                    <input className=" form-control mt-4 col-12 input-profile" type="text" placeholder="USER NAME" aria-label="default input example"/>
                
                    <input className=" form-control mt-4 col-12 input-profile " type="text" placeholder="FULL NAME" aria-label="default input example"/>
                
                    <input className=" form-control mt-4 col-12 input-profile" type="text" placeholder="E-MAIL" aria-label="default input example"/>

                    <input className=" form-control mt-4 col-12 input-profile " type="text" placeholder="PHONE" aria-label="default input example"/>
                </div>
        </div>
    )
}
export default ProfileSettingForm