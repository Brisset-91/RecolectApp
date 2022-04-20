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

    const [business, setBusiness] = useState(null)
    
    useEffect( () => {

        let bringBusiness = async ()=> {

            let dataBusiness = await businessApi.getAllBusiness()
            setBusiness(dataBusiness)

        } 

        bringBusiness()
        /*Object.values(dataBusiness.getBussines).forEach(element => {
            console.log(element)
            console.log(element.business_name)
        });*/

    }, [])
    


/**
 * 
 * let dataBus = Object.values(business.getBussines)
        console.log(dataBus)
    
    Object.values(business.getBussines).forEach(element => {
        console.log(element.business_name)
    });

 */


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
                {
                    business && !business.getBussines.length && < ContTextHome />
                }
            </div>

            <div className=" row d-flex " style={{marginTop: "5rem"}}>
                {
                    business && !!business.getBussines.length && business.getBussines.map(valueBusiness=>{
                        return (
                            <BusinessCard
                                 business={valueBusiness}
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