
import './payMethodForm.scss'

const PayMethodForm = () => {
    
    return (
        <div className='row payMethod' >
            <div className='col-12 '>
                <h1 className='titleRegister font-weight'>PAY METHOD</h1>
                <div className='inputRegister  mt-4'>
                    <input class="form-control nameRegister" type="text" placeholder="CARD NAME" aria-label="default input example"/>
                </div>
                <div className='inputRegister  mt-4'>
                    <input class="form-control nameRegister" type="text" placeholder="BANK" aria-label="default input example"/>
                </div>
                <div className='inputRegister  mt-4'>
                    <input class="form-control nameRegister" type="text" placeholder="CARD NUMBER" aria-label="default input example"/>
                </div>
                <div className='inputRegister  mt-4'>
                    <input class="form-control nameRegister" type="text" placeholder="MAIL" aria-label="default input example"/>
                </div>
            </div>
        </div>
    )
}
export default PayMethodForm