import { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import BusinessTypeForm from '../../Components/businessTypeForm/businessTypeForm'
import InputBusinessInfo from "../../Components/inputBusinessInfo/inputBusinessInfo"
import './addNewBusinessOne.scss'


const AddNewBusinessOne = (props) => {
    
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('userToken')
        !token && navigate('/')
    })
    

    const [newBusiness, setNewBusiness] = useState({}) 

    const inputHandler = event => {
        const value = event.target.value
        const property = event.target.name
        setNewBusiness({ ...newBusiness, [property]: value })
        console.log('value',value)
        console.log('property',property)
    }

    return (

        <div className='container'>

            <div className='row'>
                <InputBusinessInfo 
                    handler={{inputHandler}}
                />
                <div className='typeOfBusiness'>
                    <BusinessTypeForm
                    handler={{inputHandler}}
                    />
                </div>
                <div className='btnGo mb-3'>
                    <button type="submit" className="btn ">CONTINUE</button>
                </div>
            </div>
        </div>
    )
}

export default AddNewBusinessOne