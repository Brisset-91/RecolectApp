import imgReciclaje from '../../assets/reciclaje 2.jpg';
import './totalPaymentButton.scss'

const TotalPaymentButton = props => { 
    return (
        
        <div className="row btn-totalPayment g-0 ">
            <div className="col-3 imgCont" >
                <img className='imgReciclaje' src={imgReciclaje} alt="" />
            </div>
            
            <div className="col-9 payment-details">
                <span className=" card-text ">Total</span>
                <div className="amount">
                    <p className='price'> 62.00 USD</p>
                </div>
            </div>
        </div>
    )
}

export default TotalPaymentButton