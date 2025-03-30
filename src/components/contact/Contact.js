import './Contact.css';
import Contform from './contform/Contform';
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
    id: 2,
    contIcon: 'bi bi-telephone-fill',
    contTitle: 'Mobile:',
    contDesc: ' +989350000000, \n +989150000000'
},
{
  id: 3,
  contIcon: 'bi bi-envelope-fill',
  contTitle: 'Email:',
  contDesc: ' info@example.com \n support@example.com'
},
{
  id: 4,
  contIcon: 'bi bi-clock-fill',
  contTitle: 'Timing:',
  contDesc: ' Mon-Fri - 9:00 AM to 5:00 PM \n sat - 10:00 AM to 1:00 PM'
},
  ]
  return(
    <section id="contact">
      <div className="container-contact">
                    <div className="section-info">
                        <h2 className="section-title">Contact Us information</h2>
                        <p className="section-desc">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
        <div className="contactitem-cotainer grid-container" data-cols="4">
        {contItems.map(item => <Contitem key={item.id} {...item} />)}
        </div>
        <div className="container">
          <Contform/>
        </div>
          
      </div>
    </section>
  )
}

export default Contact
