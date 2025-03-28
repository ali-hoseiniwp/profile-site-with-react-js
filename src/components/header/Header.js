import './header.css'
import Navbar from './NavBar/Navbar'

function Header(){
    return(
    <header id='hero'>
      <Navbar/>
      <div className='header-content'>
      <h1 className="hero-title">I am <span>Ali Hosseini</span></h1>
      <p className="hero-desc">Hello, world!</p>
      </div>
    </header>
    )
}

export default Header