/* eslint-disable react-hooks/exhaustive-deps */
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
    
    useEffect(async () => {
        let dataBusiness = await businessApi.getAllBusiness()
        setBusiness(dataBusiness)

    }, [])
    
    console.log(business) 

/*
    useEffect(() => {
        const token = JSON.parse( localStorage.getItem('token'))
        !token && navigate('/')
    })
*/
    return (
        <div className='container'>
            <div className='row'>
                < Navbar />
            </div>
            <div className=" row d-flex ">
                < ContTextHome />
            </div>

            <div className=" row d-flex ">
           
                {
                    Object.keys(business.getBussines).forEach(key => {
                        console.log(key)

                        return (
                            < BusinessCard 
                                key = {key}
                                businessData = {{...business[key]}}
                            /> 
                            
                        )

                    })
                }
            </div>
            
            <div className='row'>
                

                < PrimaryButton />
            </div>
       
        </div>

    )
}

export default Home