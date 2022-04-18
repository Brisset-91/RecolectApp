import coffeShop from '../../assets/coffee-shop.jpg';
import './businessCard.scss'

const BusinessCard = () => {

    return (
        <div className='d-flex align-items-center'>
            <div>
                <img src={coffeShop} alt="" />
            </div>
            <div>
                <h1>Starbucks Cordilleras</h1>
                <p>Starbucks Cordilleras</p>
            </div>

        </div>
    )
}

export default BusinessCard