import './Contitem.css';

function Contitem({contIcon, contTitle, contDesc}){
  return(
    <div className="col-3">
          <div className="contact-box">
          <div className="contact-icon">
              <i className={contIcon}></i>
          </div>
          <div className="contact-content">
              <h3 className="contact-title">{contTitle}</h3>
              <p className="contact-info">
                  {contDesc}
              </p>
          </div>
      </div>
    </div>
  )
}

export default Contitem