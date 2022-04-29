
import './typeOfWaste.scss'

const TypeOfWaste = (props) => { 
    const { inputTypeOfWaste, program } = props

    return (
        <div className='col-12 m-0 p-0 d-flex  flex-column '>
            <h1 className='titleTypeOfWaste font-weight d-flex'>SELECT THE TYPE OF WASTE</h1>
            <div className='inputTypeOfWaste mt-4'>
                <input className="form-control nameTypeOfWaste" type="text" placeholder="NAME" aria-label="default input example" name='collect_name' onChange={inputTypeOfWaste} />
            </div>
            <div className='inputTypeOfWaste mt-4'>
                <input className="form-control nameTypeOfWaste" type="date" placeholder="SELECT DATE" aria-label="default input example" name='collect_date' onChange={inputTypeOfWaste} />
            </div>
            <div className='inputTypeOfWaste mt-4'>
                <input className="form-control nameTypeOfWaste" type="time" placeholder="SELECT TIME" aria-label="default input example" name='collect_time' onChange={inputTypeOfWaste} />
            </div>

            <button onClick={program}>Program</button>
        </div>
    )
}

export default TypeOfWaste