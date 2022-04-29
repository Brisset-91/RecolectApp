import PayMethodForm from "../../Components/payMethodForm/payMethodForm"
import TotalPaymentButton from "../../Components/totalPaymentButton/totalPaymentButton"

const Payment = () => {
    return (
        <div>
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