
import './historyCard.scss'

const HistoryCard = () => {
    return (
        <div className='row d-flex flex-column justify-content-center align-items-center m-2'>
            <div className='history-card col-12 '>
                <p>Corporación blue</p>
                <p>Negocio 1</p>
                <p>03/04/202 - 08/04/2022</p>
                <p>14:00</p>
            </div>
            <div className='btn-edit col-12'>
                <button type="button" className="btn btn-save">EDIT</button>
            </div>

        </div>
    )
}
export default HistoryCard