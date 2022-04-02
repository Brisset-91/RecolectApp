//import { BusinesTypeForm } from '../../Components/businessTypeForm/businessTypeForm'
import BusinessTypeForm from '../../Components/businessTypeForm/businessTypeForm'
import './addNewBusinessOne.scss'

const AddNewBusinessOne = () => {

    return (

        <div className='container'>

            <div className='row'>
                <form>
                    <h1 className='title m-3'>FILL THE BUSINESS INFO</h1>
                    <div className="info mb-3">
                        <input className="form-control form-control-lg" type="text" placeholder="BUSINESS NAME" aria-label=".form-control-lg example" />
                    </div>
                    <div className="info mb-3">
                        <input className="form-control form-control-lg" type="text" placeholder="BUSINESS LOCATION" aria-label=".form-control-lg example" />
                    </div>
                    <div className="info mb-3">
                        <input className="form-control form-control-lg" type="text" placeholder="BUSINESS TELEPHONE" aria-label=".form-control-lg example" />
                    </div>
                    
                </form>
                <div className='typeOfBusiness'>
                    <BusinessTypeForm />
                </div>
                <div className='btnGo mb-3'>
                    <button type="submit" className="btn ">CONTINUE</button>
                </div>
            </div>
        </div>
    )
}

export default AddNewBusinessOne