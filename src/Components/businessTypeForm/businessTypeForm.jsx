import coffeShop from '../../assets/coffee-shop.jpg';
import barCounter from '../../assets/bar-counter.jpg';
import restaurant from '../../assets/restaurant.jpg';
import hotel from '../../assets/hotel.jpg';
import career from '../../assets/career.jpg';
import './businessTypeForm.scss'

//import { ReactComponent as coffe } from '../../assets/coffee-shop.svg';

const BusinessTypeForm = props => {
    return(
        <div className='card mb-3 '>
            <div className='card-title'>
                <h6>SELECT THE TYPE OF BUSINESS</h6>
            </div>
            <div className=" mb-3 m-1 ">
                <div className="row g-0 ">
                    <div className="col-4" >
                        <img src={coffeShop} alt="" />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <p className="card-text">Coffe Shop</p>
                        </div>
                    </div>
                </div>

                <div className="row g-0 " >
                    <div className="col-4" >
                        <img src={barCounter} alt="" />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <p className="card-text">Bar/Club</p>
                        </div>
                    </div>
                </div>

                <div className="row g-0 ">
                    <div className="col-4" >
                        <img src={restaurant} alt="" />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <p className="card-text">Restaurant</p>
                        </div>
                    </div>
                </div>

                <div className="row g-0 ">
                    <div className="col-4" >
                        <img src={hotel} alt="" />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <p className="card-text">Hotel</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0 ">
                    <div className="col-4" >
                        <img src={career} alt="" />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <p className="card-text">Another Business</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

};

export default BusinessTypeForm