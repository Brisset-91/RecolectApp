/* eslint-disable react/style-prop-object */
import coffeShop from '../../assets/coffee-shop.jpg';
import barCounter from '../../assets/bar-counter.jpg';
import restaurant from '../../assets/restaurant.jpg';
import hotel from '../../assets/hotel.jpg';
import career from '../../assets/career.jpg';
import './businesTypeForm.scss'



//import { ReactComponent as coffe } from '../../assets/coffee-shop.svg';

function BusinesTypeForm (props) {
    return(
        <div className='card card-princ col-6 col-md-6 mb-3 m-3'>
            <div className='card-title'>
                <h2>SELECT THE TYPE OF BUSINESS</h2>
            </div>
            <div className=" mb-3 m-3 p-3">
                <div className="row g-0 mb-3">
                    <div className="col-md-4" >
                        <img src={coffeShop} alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">Coffe Shop</p>
                        </div>
                    </div>
                </div>

                <div className="row g-0 mb-3" >
                    <div className="col-md-4" >
                        <img src={barCounter} alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">Bar/Club</p>
                        </div>
                    </div>
                </div>

                <div className="row g-0 mb-3">
                    <div className="col-md-4" >
                        <img src={restaurant} alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">Restaurant</p>
                        </div>
                    </div>
                </div>

                <div className="row g-0 mb-3">
                    <div className="col-md-4" >
                        <img src={hotel} alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">Hotel</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0 mb-3">
                    <div className="col-md-4" >
                        <img src={career} alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">Another Business</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

};

export default BusinesTypeForm