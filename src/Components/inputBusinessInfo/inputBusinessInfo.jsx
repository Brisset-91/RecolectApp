
import './inputBusinessInfo.scss'

const InputBusinessInfo = (props) => {

    const { handlerInfo } = props

    return (
        <form>
            <h1 className='titleBusines m-3'>FILL THE BUSINESS INFO</h1>
            <div className="info mb-3">
                <input className="form-control businessInfo form-control-lg" type="text" name="business_name" placeholder="BUSINESS NAME" aria-label=".form-control-lg example" onChange={handlerInfo} />
            </div>
            <div className="info mb-3">
                <input className="form-control businessInfo form-control-lg" type="text" name="business_location" placeholder="BUSINESS LOCATION" aria-label=".form-control-lg example" onChange={handlerInfo} />
            </div>
            <div className="info mb-3">
                <input className="form-control businessInfo form-control-lg" type="text" name="business_phone" placeholder="BUSINESS TELEPHONE" aria-label=".form-control-lg example" onChange={handlerInfo} />
            </div>
        
        </form>
    )
}

export default InputBusinessInfo