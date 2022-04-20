import { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import BusinessTypeForm from '../../Components/businessTypeForm/businessTypeForm'
import InputBusinessInfo from "../../Components/inputBusinessInfo/inputBusinessInfo"
import Navbar from '../../Components/navbar/navbar'
import WasteTypeForm from '../../Components/wasteTypeForm/wasteTypeForm'
import addNewBusiness from '../../lib/addNewBusiness'
import './addNewBusiness.scss'


const AddNewBusiness = (props) => {
    
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        !token && navigate('/')
    })
    

    const [newBusiness, setNewBusiness] = useState({}) 
    
    const [step, setStep] = useState(1) 

    const token = JSON.parse( localStorage.getItem('token'))

    console.log(token)

    const inputHandler = event => {
        const value = event.target.value
        const property = event.target.name
        setNewBusiness({ ...newBusiness, [property]: value, 'user':token.id, 'business_waste_typeof': newWasteType() })
        //console.log('value',value)
        //console.log('property',property)
    }

    console.log(newBusiness)

    const [wasteType, setWasteType] = useState([]) 

    const newWasteType = event => {
        const value = event.target.value
        //const property = event.target.name
        setWasteType ( wasteType.push(value))
    }
    

    console.log(newWasteType)

    const newAddNewBusiness = async () => {
        const result = await addNewBusiness.saveAddNewBusiness(newBusiness)
        console.log(result)

        token.ok == true? navigate('/home') : navigate('/register')
    }

    const incremStep = () => setStep(step+1)

    const decrementStep = () => setStep(step-1)

    return (

        <div className='container'>
            <Navbar />
            {
                step === 1 &&
               ( <div className='row'style={{marginTop: "5rem"}}>
                    <InputBusinessInfo 
                        handler={{inputHandler}}
                    />
                    <div className='typeOfBusiness'>
                        <BusinessTypeForm
                            value = {newBusiness.typeOfBusiness}
                            handler={{inputHandler}}
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
                    <div className='row ' style={{marginTop: "5rem"}}> 
                        <WasteTypeForm 
                            handler={{newWasteType}}
                        />
                       
                        <div className='btnGo mb-3'>
                            <button type="button" className="btn " onClick={incremStep}>Next</button>
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