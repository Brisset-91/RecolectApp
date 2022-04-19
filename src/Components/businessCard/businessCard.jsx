import coffeShop from '../../assets/coffee-shop.jpg';
import './businessCard.scss'

const BusinessCard = props => {
    const { business_name, business_location} =props.businessData


    return (
        <div className='d-flex align-items-center'>
            <div>
                <img src={coffeShop} alt="" />
            </div>
            <div>
                <h1>{business_name}</h1>
                <p>{business_location}</p>
            </div>

        </div>
    )
}

export default BusinessCard