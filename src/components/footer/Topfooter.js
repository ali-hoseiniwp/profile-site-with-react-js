import './Footer.css'
function Topfooter(){
  return(
    <div className="container foot-top-con grid-container" data-cols="3">
      <div className="row">
        <div className="footer-item grid-item">
          <h3>Contact Us</h3>
          <div className="adress">  
            <p>
              <i className="bi bi-geo-alt"></i>
              Iran, Mashhad, panjtan blv
              </p>
          </div>
          <div className="call">
            <p>
            <i className="bi bi-telephone"></i>
              +98-9932448355
              </p>
          </div>
          <div className="email">
            <p>
            <i className="bi bi-envelope-at"></i>
              aliyarweb.mg@gmail.com
              </p>
          </div>
          
        </div>
        <div className="footer-list footer-item grid-item">
            <h3>important links</h3>
            <ul>
              <li className='About text-success'><a className="nav-link" href="#about">About</a></li>
              <li className='Services'><a className="nav-link" href="#services">Services</a></li>
              <li className='Contact'><a className="nav-link" href="#contact">Contact</a></li>
              <li className='blog'><a className="nav-link" href="#blog">Blog</a></li>
            </ul>
        </div>
        <div className=" foot-info footer-item grid-item">
          <h2 className="logo">ROYANSITE <span>.net</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet.</p>
          <div className="social-foot">
          <a href="https://www.instagram.com/alihosseini_wp/profilecard/?igsh=MTN6Mmg2Nmd3NW92OQ==" target='_blonk'><i className="bi bi-instagram"></i></a>
          <a href="http://t.me/Hosseini_contact" target='_blonk'><i className="bi bi-send"></i></a>
          <a href="https://wa.me/message/NLNUMOAG53DOE1" target='_blonk'><i className="bi bi-whatsapp"></i></a>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Topfooter