import './Contform.css'
import formimage from '../../../assets/images/contimage.png'
function Contform() {
  return (
    <div className="contactform-container row grid-container">
      <div className="contact-box-form">
        <form action="">
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='Gmail' />
          <select name="selected" id="subject">
            <option value="web design">web design</option>
            <option value="web development">web development</option>
            <option value="graphic design">graphic design</option>
            <option value="degetal marketing">degetal marketing</option>
            <option value="photography">photography</option>
          </select>
          <textarea name="message" id="message"></textarea>
          <button>Send Message</button>
        </form>
      </div>
      <div className='image-contact-form'>
        <img src={formimage} alt="contact form icon" />
      </div>
    </div>
  )
}

export default Contform