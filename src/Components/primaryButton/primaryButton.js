function PrimaryButton(props) {
    return (
        <button className="primary-btn d-flex justify-content-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="13" width="24" height="6" rx="2" fill="#38C746"/>
                <rect x="19" y="4" width="24" height="6" rx="2" transform="rotate(90 19 4)" fill="#38C746"/>
                <circle cx="16" cy="16" r="15" stroke="#38C746" stroke-width="2"/>
            </svg>
            <p className="m-0 p-0">{props.text} </p>
        </button>
    )
}

export default PrimaryButton