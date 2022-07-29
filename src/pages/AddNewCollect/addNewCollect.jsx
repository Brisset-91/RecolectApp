import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState} from 'react'
import CollectConfirmedCard from '../../Components/collectConfirmedCard/collectConfirmedCard'
import MenuNavbar from '../../Components/navbar/navbar'
import TypeOfWaste from '../../Components/typeOfWaste/typeOfWaste'
import WasteTypeForm from '../../Components/wasteTypeForm/wasteTypeForm'
import CollectApi from '../../lib/collectApi'

const AddNewCollect = () => {
    const { search } = useLocation()

    const urlParsed = new URLSearchParams (search)
    const idBusiness = urlParsed.get('businessID')
console.log('urlparced',urlParsed)
console.log('idBusines', idBusiness)
    const [step, setStep] = useState(1) 
    const incremStep = () => setStep(step+1)
    const decrementStep = () => setStep(step-1)

    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        !token && navigate('/')
    })

    const [newCollect, setNewCollect] = useState({waste_typeof:[],"collect_status": false, "business": idBusiness }) 
    
    const token = JSON.parse( localStorage.getItem('token'))

    const inputHandlerNewCollect = event => {
        const value = event.target.value
        const property = event.target.name

        if (property === "waste_typeof") {
            if (newCollect['waste_typeof'].includes(value)) {
                setNewCollect({...newCollect,['waste_typeof']: newCollect['waste_typeof'].filter(waste => waste!== value )})
            }else {
                setNewCollect({...newCollect,['waste_typeof']: [...newCollect['waste_typeof'], value]})
            }
        }else {
            setNewCollect({ ...newCollect, [property]: value, 'user':token.id})
        }
    }
   
    const sendNewCollect = async() => {
        await CollectApi.saveAddNewCollect(newCollect)
        token.ok === true? navigate('/home') : navigate('/register')
    }
    console.log(newCollect)
    return (
        <div className='container'>
            <MenuNavbar />
            {
                step === 1 && (
                    <div className='row'>
                        <TypeOfWaste 
                            inputTypeOfWaste={inputHandlerNewCollect}
                            program={incremStep}
                        />
                    </div>
                )
            }
            {
                step === 2 && ( 
                    <div className='row'> 
                        <WasteTypeForm 
                            handler={inputHandlerNewCollect}
                        />
                        <div className='btnGo mb-3'>
                            <button type="button" className="btn " onClick={incremStep}>Continue</button>
                        </div>
                        <div className='btnGo mb-3'>
                            <button type="button" className="btn " onClick={decrementStep}>Previous</button>
                        </div>
                    </div> 
                )
            }
            {
                step === 3 && ( 
                    <div className='row 'style={{marginTop: "5rem"}}> 
                        <CollectConfirmedCard
                            collect={newCollect}
                            program={incremStep}
                        />
                        <div className='btnGo mb-3'>
                            <button type="button" className="btn " onClick={sendNewCollect}>Send</button>
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
export default AddNewCollect