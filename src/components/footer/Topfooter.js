import './Footer.css'
function Topfooter(){
  return(
    <div className="container foot-top-con">
      <div className="row">
        <div className="col-4">
          <h3>Contact Us</h3>
          <div className="adress">  
            <p>
              <i class="bi bi-geo-alt"></i>
              Iran, Mashhad, panjtan blv
              </p>
          </div>
          <div className="call">
            <p>
            <i class="bi bi-telephone"></i>
              +98-9932448355
              </p>
          </div>
          <div className="email">
            <p>
            <i class="bi bi-envelope-at"></i>
              aliyarweb.mg@gmail.com
              </p>
          </div>
          
        </div>
      </div>

    </div>
  )
}
export default Topfooter