import TotalPaymentButton from "../../Components/totalPaymentButton/totalPaymentButton"
import WalletCard from "../../Components/walletCard/walletCard"
import MenuNavbar from '../../Components/navbar/navbar'

const Pocket = () => {

    return (
        <div>
             <MenuNavbar />
            <div>
                <h1>Pocket</h1>
                <h1>MY WALLET</h1>
            </div>
            <div>
                <WalletCard />
                <TotalPaymentButton />
            </div>
            <div>
                <input type="button" value="CASH OUT" />
            </div>
            <div>
                <p>Reminder : You need at least 100 dollars to cash out</p>
            </div>
        </div>

    )

}

export default Pocket