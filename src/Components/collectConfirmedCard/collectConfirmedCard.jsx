import './collectConfirmedCard.scss'

const CollectConfirmedCard = ({collect}) => { 
   const {collect_name, collect_date, collect_time, waste_typeof} = collect

    return (
        <div>
            <div className="titleCollect col-12">
                <span className=" card-text ">COLLECT CONFIRMED</span>
                <div className="">
                    <input className="form-check-input inputConfi  mt-0" type="checkbox" value=""/>
                </div>
            </div>
           
            <div className='content'>
                <div className="info row">
                    <p className='col-4'>Name:</p>
                    <div className="col-8">
                        <p>{collect_name} </p>
                    </div>    
                </div>
                <div className="info row">
                    <p className='col-4'>Date:</p>
                    <div className="col-8">
                        <p>{collect_date} </p>
                    </div>    
                </div>
                <div className="info row">
                    <p className='col-4'>Hour:</p>
                    <div className="col-8">
                        <p>{collect_time} </p>
                    </div>    
                </div>
                <div className="info row">
                    <p className='col-4'>ID:</p>
                    <div className="col-8">
                        <p>{waste_typeof}</p>
                    </div>    
                </div>
            </div>
        </div>
        
    )
} 

export default CollectConfirmedCard