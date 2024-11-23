import './Contact.css';
import Contitem from './contitem/Contitem';

function Contact(){
  let contItems =[
    {
      id: 1,
      contIcon: 'bi bi-map-fill',
      contTitle: 'Address:',
      contDesc: ' Khorasan Razavi Mashhad city, \n panjtan BLV'
  },
  {
    id: 1,
    contIcon: 'bi bi-telephone-fill',
    contTitle: 'Mobile:',
    contDesc: ' +989350000000, \n +989150000000'
},
{
  id: 1,
  contIcon: 'bi bi-envelope-fill',
  contTitle: 'Email:',
  contDesc: ' info@example.com \n support@example.com'
},
{
  id: 1,
  contIcon: 'bi bi-clock-fill',
  contTitle: 'Timing:',
  contDesc: ' Mon-Fri - 9:00 AM to 5:00 PM \n sat - 10:00 AM to 1:00 PM'
},
  ]
  return(
    <section id="contact">
      <div className="container">
                    <div className="section-info">
                        <h2 className="section-title">Contact Us information</h2>
                        <p className="section-desc">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
        <div className="contactitem-cotainer row">
        {contItems.map(item => <Contitem key={item.id} {...item} />)}
        </div>
        <div className="contactform-container row">
          
        </div>
      </div>
    </section>
  )
}

export default Contact
