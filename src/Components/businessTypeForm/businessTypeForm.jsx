import coffeShop from '../../assets/coffee-shop.jpg';
import barCounter from '../../assets/bar-counter.jpg';
import restaurant from '../../assets/restaurant.jpg';
import hotel from '../../assets/hotel.jpg';
import career from '../../assets/career.jpg';
import './businessTypeForm.scss'
//import { ReactComponent as coffe } from '../../assets/coffee-shop.svg';

const BusinessTypeForm = props => {
    const { handler } = props

    return(
        <div className='card mb-3 '>
            <div className='card-title'>
                <h6>SELECT THE TYPE OF BUSINESS</h6>
            </div>
            <div className=" mb-3 m-1 ">
                <div className="row g-0 ">
                    <div className="col-3" >
                        <img src={coffeShop} alt="" />
                    </div>
                    <div className="col-9">
                        <div className="input-group-text card-body">
                            <span className=" card-text ">Coffe Shop</span>
                            <div className="inputCheck">
                                <input className="form-check-input mt-0" type="checkbox" value="coffeShop" aria-label="Checkbox for following text input" name="typeOfBusiness" onChange={handler.inputHandler} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-0 " >
                    <div className="col-3" >
                        <img src={barCounter} alt="" />
                    </div>
                    <div className="col-9">
                        <div className="input-group-text card-body">
                            <span className=" card-text ">Bar/Club</span>
                            <div className="inputCheck">
                                <input className="form-check-input mt-0" type="checkbox" value="bar/club" aria-label="Checkbox for following text input" name="typeOfBusiness" onChange={handler.inputHandler} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-0 ">
                    <div className="col-3" >
                        <img src={restaurant} alt="" />
                    </div>
                    <div className="col-9">
                        <div className="input-group-text card-body">
                            <span className=" card-text ">Restaurant</span>
                            <div className="inputCheck">
                                <input className="form-check-input mt-0" type="checkbox" value="restaurant" aria-label="Checkbox for following text input" name="typeOfBusiness" onChange={handler.inputHandler} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-0 ">
                    <div className="col-3" >
                        <img src={hotel} alt="" />
                    </div>
                    <div className="col-9">
                        <div className="input-group-text card-body">
                            <span className=" card-text ">Hotel</span>
                            <div className="inputCheck">
                                <input className="form-check-input mt-0" type="checkbox" value="hotel" aria-label="Checkbox for following text input" name="typeOfBusiness" onChange={handler.inputHandler} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-0 ">
                    <div className="col-3" >
                        <img src={career} alt="" />
                    </div>
                    <div className="col-9">
                        <div className="input-group-text card-body">
                            <span className=" card-text ">Another Business</span>
                            <div className="inputCheck">
                                <input className="form-check-input mt-0" type="checkbox" value="anotherBusiness" aria-label="Checkbox for following text input" name="typeOfBusiness" onChange={handler.inputHandler} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

};

export default BusinessTypeForm