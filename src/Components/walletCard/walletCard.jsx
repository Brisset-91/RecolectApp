import oil from '../../assets/waterTypeForm/engine-oil.jpg';
import cans from '../../assets/waterTypeForm/beer-can.jpg';
import plastic from '../../assets/waterTypeForm/agua 1.jpg';
import carton from '../../assets/waterTypeForm/caja 1.jpg';
import glass from '../../assets/waterTypeForm/wine 1.jpg';
import grease from '../../assets/waterTypeForm/sin-grasa 1.jpg';
import './walletCard.scss'

const WalletCard = () => { 

    return (
        <div className="row wallet-card g-0 ">
            <div className="imgWallet "  >
                <div className ="col-3 d-flex justify-content-center align-items-center">
                    <img className='imgIcon' src={oil} alt="" />
                </div>
                <div className="col-9 wallet-card-details">
                    <span className="wallet-name">Oil</span>
                    <div className="amount">
                        <p className='amount-detail'> 20.00 USD</p>
                    </div>
                </div>
            </div>
            <div className="imgWallet "  >
                <div className="col-3 d-flex justify-content-center align-items-center" >
                    <img className='imgIcon' src={cans} alt="" />
                </div>
                <div className="col-9 wallet-card-details">
                    <span className=" wallet-name ">Cans</span>
                    <div className="amount">
                        <p className='amount-detail'> 25.00 USD</p>
                    </div>
                </div>
            </div>
            <div className="imgWallet "  >
                <div className="col-3 d-flex justify-content-center align-items-center" >
                    <img className='imgIcon' src={carton} alt="" />
                </div>
                <div className="col-9 wallet-card-details">
                    <span className=" wallet-name ">Carton</span>
                    <div className="amount">
                        <p className='amount-detail'> 10.00 USD</p>
                    </div>
                </div>
            </div>
            <div className="imgWallet "  >
                <div className="col-3 d-flex justify-content-center align-items-center" >
                    <img className='imgIcon' src={plastic} alt="" />
                </div>
                <div className="col-9 wallet-card-details">
                    <span className=" wallet-name ">Plastic</span>
                    <div className="amount">
                        <p className='amount-detail'> 15.00 USD</p>
                    </div>
                </div>
            </div>
            <div className="imgWallet "  >
                <div className="col-3 d-flex justify-content-center align-items-center" >
                    <img className='imgIcon' src={glass} alt="" />
                </div>
                <div className="col-9 wallet-card-details">
                    <span className=" typeRecolect ">Glass</span>
                    <div className="amount">
                        <p className='amount-detail'> 12.00 USD</p>
                    </div>
                </div>
            </div>
            <div className="imgWallet-2  "  >
                <div className="col-3 d-flex justify-content-center align-items-center" >
                    <img className='imgIcon' src={grease} alt="" />
                </div>
                <div className="col-9 wallet-card-details">
                    <span className=" typeRecolect ">Grease</span>
                    <div className="amount">
                        <p className='amount-detail'> -20.00 USD</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletCard