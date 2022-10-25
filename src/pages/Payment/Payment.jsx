import PayMethodForm from "../../Components/payMethodForm/payMethodForm"
import TotalPaymentButton from "../../Components/totalPaymentButton/totalPaymentButton"
import MenuNavbar from '../../Components/navbar/navbar'

const Payment = () => {
    return (
        <div>
            <MenuNavbar />
            <div>
                <PayMethodForm />
            </div>
            <div>
                <TotalPaymentButton />
            </div>
           

        </div>
    )
}

export default Payment