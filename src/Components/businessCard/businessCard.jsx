import { Dropdown } from "reactstrap"

import coffeShop from '../../assets/coffee-shop.jpg';
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
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}

export default BusinessCard