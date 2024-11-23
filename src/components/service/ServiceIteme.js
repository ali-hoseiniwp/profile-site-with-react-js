function ServiceIteme({serviceIcon, serviceTitle, serviceDesc}){
    return(
        <>
            <div className="col-4">
                <div className="service-box">
                <div className="service-icon">
                    <i className={serviceIcon}></i>
                </div>
                <div className="service-content">
                    <h3 className="service-title">{serviceTitle}</h3>
                    <p className="service-info">
                        {serviceDesc}
                    </p>
                </div>
                </div>
            </div>
        </>
    )
}

export default ServiceIteme