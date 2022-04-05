
import './updateDateForm.scss'

const UpdateDateForm = () => { 

    return (
        <div>
            <div className='col-12 '>
                <div className=' mt-4'>
                    <input class="form-control nameRegister" type="text" placeholder="Corporación Blue" aria-label="default input example"/>
                </div>
                <div className=' mt-4'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Negocio 1</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
                <div className=' mt-4'>
                    <input class="form-control nameRegister" type="text" placeholder="CARD NUMBER" aria-label="default input example"/>
                </div>
                <div className=' mt-4'>
                    <input class="form-control nameRegister" type="text" placeholder="MAIL" aria-label="default input example"/>
                </div>
            </div>
        </div>
    )
}

export default UpdateDateForm