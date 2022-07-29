/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState} from "react"
import BusinessCard from "../../Components/businessCard/businessCard"
import ContTextHome from "../../Components/contTextHome/contTextHome"
import MenuNavbar from '../../Components/navbar/navbar'
import PrimaryButton from '../../Components/primaryButton/primaryButton'
import './home.scss'
import businessApi from "../../lib/businessApi"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Home = () => {
    const [show, setShow] = useState(false)

    const openModal = ()=> setShow(true)
    const closeModal = ()=> setShow(false)

    const [business, setBusiness] = useState(null)
    
    useEffect( () => {
        let bringBusiness = async ()=> {
            let dataBusiness = await businessApi.getAllBusiness()
            setBusiness(dataBusiness)
            localStorage.setItem('dataBusiness',JSON.stringify(dataBusiness))
        } 
        bringBusiness()
    }, [])
    console.log(business)
    
    return (
        <div className='container'>
            <div className='row'>
                <MenuNavbar />
            </div>
            <div className="row d-flex">
                {
                    business && !business.getBussines.length && < ContTextHome />
                }
            </div>
            <div className="row d-flex">
                {
                    business && !!business.getBussines.length && business.getBussines.map(valueBusiness=>{
                        return (
                            <BusinessCard
                                business={valueBusiness}
                                openModal={openModal}
                            /> 
                        )
                    })
                }
            </div>
            
            <div className='row'>
                < PrimaryButton />
            </div>

            <Modal show={show}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Quieres eliminar tu negocio?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={closeModal} >
                  No
                </Button>
                <Button variant="primary" >
                  Si
                </Button>
              </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Home