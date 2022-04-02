import oil from '../../assets/waterTypeForm/engine-oil.jpg';
import cans from '../../assets/waterTypeForm/beer-can.jpg';
import plastic from '../../assets/waterTypeForm/agua 1.jpg';
import carton from '../../assets/waterTypeForm/caja 1.jpg';
import glass from '../../assets/waterTypeForm/wine 1.jpg';
import grease from '../../assets/waterTypeForm/sin-grasa 1.jpg';
import './wasteTypeForm.scss'


const BusinesTypeForm = props => {
    return(
        <div className='card col-6 col-md-6 mb-3 m-3'>
            <div className=" mb-3 m-3 p-3">
                <div className="wasteType row g-0 mb-5">
                    <div className="col-md-4" >
                        <div>
                            <img src={oil} alt="" />
                        </div>
                        <div className="card-body">
                            <p className="card-text">Oil</p>
                        </div>
                    </div>

                    <div className="col-md-4" >
                        <div>
                            <img src={cans} alt="" />
                        </div>
                        <div className="card-body">
                            <p className="card-text">Cans</p>
                        </div>
                    </div>
                </div>

                <div className="wasteType row g-0 mb-5">
                    <div className="col-md-4" >
                        <div>
                            <img src={plastic} alt="" />
                        </div>
                        <div className="card-body">
                            <p className="card-text">Plastic</p>
                        </div>
                    </div>

                    <div className="col-md-4" >
                        <div>
                            <img src={carton} alt="" />
                        </div>
                        <div className="card-body">
                            <p className="card-text">Carton</p>
                        </div>
                    </div>
                </div>

                <div className="wasteType row g-0">
                    <div className="col-md-4" >
                        <div>
                            <img src={glass} alt="" />
                        </div>
                        <div className="card-body">
                            <p className="card-text">Glass</p>
                        </div>
                    </div>

                    <div className="col-md-4" >
                        <div>
                            <img src={grease} alt="" />
                        </div>
                        <div className="card-body">
                            <p className="card-text">Grease</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

};

export default BusinesTypeForm