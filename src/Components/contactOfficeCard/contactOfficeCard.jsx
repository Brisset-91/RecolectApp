import oil from '../../assets/Vector.jpg';

import './contactOfficeCard.scss'

const ContactOfficeCard = props => { 

    return (

        <div className="row card-contact"  >
            <div className ="col-3 d-flex justify-content-center align-items-center">
                <img className='img-contact' src={oil} alt="" />
            </div>
            <div className="col-9 data-contact">
                <p className='info-contact'>OFFICE INFORMATION</p>
                <p className='info-contact'>Elm street 191</p>
                <p className='info-contact'><span className='fw-bold'>City:</span>  New York</p>
            </div>
        </div>
        
    )
}

export default ContactOfficeCard