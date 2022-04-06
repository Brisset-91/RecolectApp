import './collectConfirmedCard.scss'

const CollectConfirmedCard = (props) => { 

    return (
        <form>
            <div className="titleCollect col-12">
                <span className=" card-text ">COLLECT CONFIRMED</span>
                <div className="">
                    <input className="form-check-input inputConfi  mt-0" type="checkbox" value="coffeShop"/>
                </div>
            </div>
           
            <div className='content'>
                <div className="info row">
                    <label for="staticEmail" className="col-3 col-form-label">Name:</label>
                    <div className="col-9">
                        <input className="form-control  inputCollect" type="text" name="businessName" placeholder="name_business" aria-label="default input example"  />
                    </div>    
                </div>
                <div className="info row">
                    <label for="staticEmail" className="col-3 col-form-label">Date:</label>
                    <div className="col-9">
                        <input className="form-control inputCollect" type="text" name="collectHour" placeholder="Collect Hour" aria-label="default input example"  />
                    </div>    
                </div>
                <div className="info row">
                    <label for="staticEmail" className="col-3 col-form-label">Hour:</label>
                    <div className="col-9">
                        <input className="form-control inputCollect" type="text" name="collectID" placeholder="Collect ID" aria-label="default input example"  />
                    </div>    
                </div>
                <div className="info row">
                    <label for="staticEmail" className="col-3 col-form-label">ID:</label>
                    <div className="col-9">
                        <input className="form-control inputCollect" type="text" name="collectID" placeholder="Collect ID" aria-label="default input example"  />
                    </div>    
                </div>
            </div>
        </form>
    )
} 

export default CollectConfirmedCard