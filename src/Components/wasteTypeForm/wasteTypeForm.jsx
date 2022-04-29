import oil from '../../assets/waterTypeForm/engine-oil.jpg';
import cans from '../../assets/waterTypeForm/beer-can.jpg';
import plastic from '../../assets/waterTypeForm/agua 1.jpg';
import carton from '../../assets/waterTypeForm/caja 1.jpg';
import glass from '../../assets/waterTypeForm/wine 1.jpg';
import grease from '../../assets/waterTypeForm/sin-grasa 1.jpg';
import './wasteTypeForm.scss'


const WasteTypeForm = props => {
    const { handler } = props

    return(
        <div className='card-wasteType col-12 col-md-12 mb-3 m-3'>
            
            <h1 className='card-title-wasteType'>SELECT THE TYPE OF WASTE</h1>
           
            <div className=" mb-3 m-3 p-3">
                <div className="wasteType row g-0 mb-5">
                    <div className="col-md-4 btn-wasteType"  >
                        <div>
                            <img src={oil} alt="" />
                        </div>
                        <div className="input-group-text card-body">
                            <span className=" card-text-wasteType ">Oil</span>
                            <div className="inputCheck">
                                <input className="form-check-input mt-0" type="checkbox" value="oil" aria-label="Checkbox for following text input" name="waste_typeof "  onChange={handler} />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 btn-wasteType" >
                        <div>
                            <img src={cans} alt="" />
                        </div>
                        <div className="input-group-text card-body">
                            <span className=" card-text-wasteType ">Cans</span>
                            <div className="inputCheck">
                                <input className="form-check-input mt-0" type="checkbox" value="cans" aria-label="Checkbox for following text input" name="waste_typeof" onChange={handler} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wasteType row g-0 mb-5">
                    <div className="col-md-4 btn-wasteType" >
                        <div>
                            <img src={plastic} alt="" />
                        </div>
                        <div className="input-group-text card-body">
                            <span className=" card-text-wasteType ">Plastic</span>
                            <div className="inputCheck">
                                <input className="form-check-input mt-0" type="checkbox" value="plastic" aria-label="Checkbox for following text input" name="waste_typeof" onChange={handler} />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 btn-wasteType" >
                        <div>
                            <img src={carton} alt="" />
                        </div>
                        <div className="input-group-text card-body">
                            <span className=" card-text-wasteType ">Carton</span>
                            <div className="inputCheck">
                                <input className="form-check-input mt-0" type="checkbox" value="carton" aria-label="Checkbox for following text input" name="waste_typeof" onChange={handler} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wasteType row g-0">
                    <div className="col-md-4 btn-wasteType" >
                        <div>
                            <img src={glass} alt="" />
                        </div>
                        <div className="input-group-text card-body">
                            <span className=" card-text-wasteType ">Glass</span>
                            <div className="inputCheck">
                                <input className="form-check-input mt-0" type="checkbox" value="glass" aria-label="Checkbox for following text input" name="waste_typeof" onChange={handler} />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 btn-wasteType" >
                        <div>
                            <img src={grease} alt="" />
                        </div>
                        <div className="input-group-text card-body">
                            <span className=" card-text-wasteType ">Grease</span>
                            <div className="inputCheck">
                                <input className="form-check-input mt-0" type="checkbox" value="grease" aria-label="Checkbox for following text input" name="waste_typeof" onChange={handler} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WasteTypeForm