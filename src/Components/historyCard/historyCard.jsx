
import './historyCard.scss'

const HistoryCard = ({collect}) => {
    const {collect_name, collect_date, collect_time, waste_typeof} = collect
    
    return (
        <div className='row d-flex flex-column justify-content-center align-items-center m-2'>
            <div className='history-card col-12 '>
                <p>Corporación blue(cambiar)</p>
                <p>{collect_name}</p>
                <p>{waste_typeof}</p>
                <p>{collect_date}</p>
                <p>{collect_time}</p>
            </div>
            <div className='btn-edit col-12'>
                <button type="button" className="btn btn-save">EDIT</button>
            </div>

        </div>
    )
}
export default HistoryCard