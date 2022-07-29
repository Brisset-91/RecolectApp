import { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import BusinessTypeForm from '../../Components/businessTypeForm/businessTypeForm'
import InputBusinessInfo from "../../Components/inputBusinessInfo/inputBusinessInfo"
import MenuNavbar from '../../Components/navbar/navbar'
import WasteTypeForm from '../../Components/wasteTypeForm/wasteTypeForm'
import addNewBusinessApi from '../../lib/addNewBusinessApi'

const AddNewBusiness = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        !token && navigate('/')
    })
    
    const [newBusiness, setNewBusiness] = useState({waste_typeof:[],business_typeof:'coffeShop'}) 
    
    const token = JSON.parse( localStorage.getItem('token'))
    
    const inputHandler = event => {
        const value = event.target.value
        const property = event.target.name
        if (property === "waste_typeof") {

            if (newBusiness['waste_typeof'].includes(value)) {
                setNewBusiness({...newBusiness,['waste_typeof']: newBusiness['bwaste_typeof'].filter(waste => waste!== value )})
            }else {
                setNewBusiness({...newBusiness,['waste_typeof']: [...newBusiness['waste_typeof'], value]})
            }
        }else {
            setNewBusiness({ ...newBusiness, [property]: value, 'user':token.userToken.id })
        }
    }
    console.log(newBusiness)
    
    const newAddNewBusiness = async () => {
        const result = await addNewBusinessApi.saveAddNewBusiness(newBusiness)
        token.ok == true? navigate('/home') : navigate('/register')
    }
   
    const [step, setStep] = useState(1) 
    const incremStep = () => setStep(step+1)
    const decrementStep = () => setStep(step-1)

    return (
        <div className='container'>
            <MenuNavbar />
            {
                step === 1 &&
               ( <div className='row'>
                    <InputBusinessInfo 
                        handlerInfo={inputHandler}
                    />
                    <div className='typeOfBusiness'>
                        <BusinessTypeForm
                            value = {newBusiness.business_typeof}
                            handlerBusinesType={inputHandler}
                        />
                    </div>
                    <div className='btnGo mb-3'>
                        <button type="button" className="btn " onClick={incremStep}>CONTINUE</button>
                    </div>
                </div>
                )
            }
            {
                step === 2 && ( 
                    <div className='row'>
                        <WasteTypeForm 
                            handler={inputHandler}
                        />
                        <div className='btnGo mb-3'>
                            <button type="button" className="btn " onClick={newAddNewBusiness}>Next</button>
                        </div>
                        <div className='btnGo mb-3'>
                            <button type="button" className="btn " onClick={decrementStep}>Previous</button>
                        </div>
                    </div> 
                )
            }
        </div>
    )
}

export default AddNewBusiness