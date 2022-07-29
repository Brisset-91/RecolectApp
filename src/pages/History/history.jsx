import { useEffect, useState} from "react"
import { useLocation } from 'react-router-dom'
import HistoryCard from "../../Components/historyCard/historyCard"
import collectApi from "../../lib/collectApi"


const History = () => {

    const { search } = useLocation()

    const urlParsed = new URLSearchParams (search)
    const idBusiness = urlParsed.get('business')

    console.log('urlparced',urlParsed)
    console.log('idBusines', idBusiness)

    const [collect, setCollect] = useState({})

    useEffect( () => {
        let bringCollect = async ()=> {
            let dataCollect = await collectApi.getAllColect()
            setCollect(dataCollect)

            localStorage.setItem('dataCollect',JSON.stringify( dataCollect))
        } 
        bringCollect()
    }, [])

    return (
        <div>
            <h1>History</h1>
            <div>
                {
                    collect?.getCollect && collect.getCollect.map(valueCollect =>{
                        return(
                            <HistoryCard 
                                collect={valueCollect}
                            />
                        )
                    })
                }
            </div>            
        </div>
    )
}

export default History