import Dropdown from 'react-bootstrap/Dropdown'

import coffeShop from '../../assets/coffee-shop.jpg';
import Modals from '../modal/modal';
import './businessCard.scss'

const BusinessCard = ({business}, props) => {
    const { business_name, business_location, _id} =business
    const {idBusiness } = props


    return (
        <div className='d-flex align-items-center businessCard'>
            <div>
                <img src={coffeShop} alt="" />
            </div>
            <div>
                <h1>{business_name? business_name: "Nombre de tu negocio "  }</h1>
                <p>{business_location? business_location: "Direccion de tu negocio" }</p>
            </div>
            <Dropdown>
                <Dropdown.Toggle eventKey={_id} variant="success" id="dropdown-basic">
                    Options
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={idBusiness} >Add collect</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Edit information</Dropdown.Item>
                    <Dropdown.Item href="/history">Collection history</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Reschedule collect</Dropdown.Item>
                    <Dropdown.Item >Erase
                      
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}

export default BusinessCard