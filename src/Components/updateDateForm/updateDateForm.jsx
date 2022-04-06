
import './updateDateForm.scss'

const UpdateDateForm = () => { 

    return (
        <div className='row updateDate'>
            <div className='col-12 '>
                <div className=' mt-4'>
                    <input className="form-control upDateForm nameRegister" type="text" placeholder="Corporación Blue" aria-label="default input example"/>
                </div>
                <div className=' mt-4'>
                <select className="form-select upDateForm" aria-label="Default select example">
                    <option selected>Negocio 1</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
                <div className=' mt-4'>
                    <input className="form-control upDateForm nameRegister" aria-label="default input example" data-date-format="dd-mm-yyyy" placeholder="03/04/2022 - 09/04/2022"/>
                </div>
                <div className=' mt-4'>
                    <input className="form-control upDateForm nameRegister" type="text" placeholder="14:00" aria-label="default input example"/>
                </div>
            </div>
            <div className='btn-update col-12'>
                <button type="button" className="btn btn-save">SAVE</button>
                <button type="button" className="btn btn-delete">DELETE</button>
            </div>
            
        </div>
    )
}

export default UpdateDateForm