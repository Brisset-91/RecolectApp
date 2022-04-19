

const PrimaryButton = (props) => {

    const { btnAddNewBusiness } = props

    return (
        <div className="mt-5" >
 
            <button className="col-12 primary-btn d-flex justify-content-center" onClick={btnAddNewBusiness} >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="13" width="24" height="6" rx="2" fill="#38C746"/>
                    <rect x="19" y="4" width="24" height="6" rx="2" transform="rotate(90 19 4)" fill="#38C746"/>
                    <circle cx="16" cy="16" r="15" stroke="#38C746" stroke-width="2"/>
                </svg>
                <p className="m-0 p-0">ADD NEW BUSINESS</p>
            </button>
        </div>

    )
}

export default PrimaryButton