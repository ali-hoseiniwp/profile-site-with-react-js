import './Contform.css'
function Contform(){
  return(
    <div className="container contactform-container row">
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
  )
}

export default Contform