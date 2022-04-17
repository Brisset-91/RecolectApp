import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import Navbar from '../../Components/navbar/navbar'
import PrimaryButton from '../../Components/primaryButton/primaryButton'
import './home.scss'

const Home = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('user')
        !token && navigate('/')
    })

    return (
        <div className='container'>
            <div className='row'>
                < Navbar />
            </div>
            <div className='row'>
                < PrimaryButton />
            </div>
       
        </div>

        
    )
}

export default Home