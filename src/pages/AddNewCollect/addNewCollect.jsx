import { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import CollectConfirmedCard from '../../Components/collectConfirmedCard/collectConfirmedCard'
import Navbar from '../../Components/navbar/navbar'
import TypeOfWaste from '../../Components/typeOfWaste/typeOfWaste'
import WasteTypeForm from '../../Components/wasteTypeForm/wasteTypeForm'

const AddNewCollect = (props) => {

    const [step, setStep] = useState(1) 

    const incremStep = () => setStep(step+1)
    const decrementStep = () => setStep(step-1)

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        !token && navigate('/')
    })

    const [newCollect, setNewCollect] = useState({waste_typeof:[],"collect_status": false}) 
    
    const token = JSON.parse( localStorage.getItem('token'))
    
    const inputHandlerNewCollect = event => {
        const value = event.target.value
        const property = event.target.name
        console.log('value',value)
        console.log('property',property)
        if (property === "waste_typeof") {

            if (newCollect['waste_typeof'].includes(value)) {
                setNewCollect({...newCollect,['waste_typeof']: newCollect['waste_typeof'].filter(waste => waste!== value )})
            }else {
                setNewCollect({...newCollect,['waste_typeof']: [...newCollect['waste_typeof'], value]})
            }
            
        }else {
            setNewCollect({ ...newCollect, [property]: value, 'user':token.id })
        }
    }
    console.log(newCollect)


    return (
        <div className='container'>
            <Navbar />
            {
                step === 1 && (
                    <div className='row'style={{marginTop: "5rem"}}>
                        <TypeOfWaste 
                            inputTypeOfWaste={inputHandlerNewCollect}
                            program={incremStep}
                        />
                    </div>
                )
            }
            {
                step === 2 && ( 
                    <div className='row 'style={{marginTop: "5rem"}}> 
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
                            program={incremStep}
                        />
                    </div> 
                 
                 )
            }


        </div>

    )
}

export default AddNewCollect