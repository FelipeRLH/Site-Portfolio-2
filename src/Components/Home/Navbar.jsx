import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

import logoportfolio from '../../Assets/Home/Img/logoportfolio.png'
import curriculo from '../../Assets/Home/CurriculoFelipe.pdf'

import '../Home/Navbar.css'


function Navbar() {
  return (
    <div className='container_navbar'>
      <div className='navbar'>

        <div className='logo_container'>
          <Link to='/'>
            <div className='logo_box'><img className='logof' src={logoportfolio} alt="Logo Portfólio" width={28} /></div>
            Portfólio
          </Link>
        </div>

        <div className='icons-navbar'>
          <div className='icons'>
            <a href="https://github.com/FelipeRLH"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/felipe-ramalho-/"><FaLinkedin /></a>
            <a href="https://www.instagram.com/felipe_alvezs_/"><FaInstagram /></a>
          </div>
          <a href={curriculo} download className='btn_curriculo'>Download Currículo</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;