import imgReciclaje from '../../assets/reciclaje 2.jpg';
import './totalPaymentButton.scss'

const TotalPaymentButton = props => { 
    return (
        <div className='row'>
            <div className="row g-0 ">
                <div className="col-3" >
                    <img src={imgReciclaje} alt="" />
                </div>
                <div className="col-9">
                    <div className="input-group-text card-body">
                        <span className=" card-text ">Total</span>
                        <div className="">
                            <p> 62.00 USD</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalPaymentButton