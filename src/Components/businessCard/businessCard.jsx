import Dropdown from 'react-bootstrap/Dropdown'

import coffeShop from '../../assets/coffee-shop.jpg';
import Modals from '../modal/modal';
import './businessCard.scss'

const BusinessCard = ({business}) => {
    const { business_name, business_location} =business


    return (
        <div className='d-flex align-items-center businessCard'>
            <div>
                <img src={coffeShop} alt="" />
            </div>
            <div>
                <h1>{business_name? business_name: "La encalada "  }</h1>
                <p>{business_location? business_location: "Caminos del inca 300" }</p>
            </div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Options
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/addNewCollect">Add collect</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Edit information</Dropdown.Item>
                    <Dropdown.Item href="/history">Collection history</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Reschedule collect</Dropdown.Item>
                    <Dropdown.Item >Erase
                        <Modals 
                        
                        />
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}

export default BusinessCard