import { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import BusinessCard from "../../Components/businessCard/businessCard"
import ContTextHome from "../../Components/contTextHome/contTextHome"
import Navbar from '../../Components/navbar/navbar'
import PrimaryButton from '../../Components/primaryButton/primaryButton'
import './home.scss'
import businessApi from "../../lib/businessApi"

const Home = () => {
    const navigate = useNavigate()

    const [business, setBusiness] = useState({})
    
    const dataBusiness = async ()=> {
        let databusiness = await businessApi.getAllBusiness()
        setBusiness(databusiness)
    }
    
       
    console.log(business) 

    useEffect(() => {
        const token = JSON.parse( localStorage.getItem('token'))
        !token && navigate('/')
    })

    const addNewBusiness = () => {


    } 

    return (
        <div className='container'>
            <div className='row'>
                < Navbar />
            </div>
            <div className=" d-flex ">
                < ContTextHome />
            </div>
            <div>
                < BusinessCard /> 
            </div>
            <div className='row'>
                < PrimaryButton />
            </div>
       
        </div>

    )
}

export default Home