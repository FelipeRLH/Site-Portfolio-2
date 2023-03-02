import React from 'react'
import { Link } from 'react-router-dom'

import { FaHome, FaTh, FaUser, FaMobileAlt, FaHandsHelping } from 'react-icons/fa'

import img_theme_1 from '../../Assets/Home/Img/img_theme_1.png'
import img_theme_2 from '../../Assets/Home/Img/img_theme_2.png'
import img_theme_3 from '../../Assets/Home/Img/img_theme_3.png'
import img_theme_4 from '../../Assets/Home/Img/img_theme_4.png'

import './Sidebar.css'

function Sidebar() {


    return (
        <div className='navigation' >
            <div className='simb_apple'>
                <div className='ball_1'></div>
                <div className='ball_2'></div>
                <div className='ball_3'></div>
            </div>

            <ul>
                <li className='list ' >
                    <Link to='/' className='link'>
                        <span className='icon'><FaHome /></span>
                        <span className='title'>Início</span>
                    </Link>
                </li>
                <li className='list'>
                    <Link to='/projects' className='link'>
                        <span className='icon'><FaTh /></span>
                        <span className='title'>Projetos</span>
                    </Link>
                </li>
                <li className='list'>
                    <Link to='/about' className='link'>
                        <span className='icon'><FaUser /></span>
                        <span className='title'>Sobre mim</span>
                    </Link>
                </li>
                <li className='list'>
                    <Link to='/contact' className='link'>
                        <span className='icon'><FaMobileAlt /></span>
                        <span className='title'>Contato</span>
                    </Link>
                </li>
                <li className='list'>
                    <Link to='/guiadev' className='link'>
                        <span className='icon'><FaHandsHelping /></span>
                        <span className='title'>Guia Dev</span>
                    </Link>
                </li>
            </ul>

            <div>
                <div className='footer'>
                    <div className='div_theme_1'><img className='theme' src={img_theme_1} alt="Tema laranja" /></div>
                    <div><img className='theme' src={img_theme_2} alt="Tema verde" /></div>
                    <div><img className='theme' src={img_theme_3} alt="Tema vermelho" /></div>
                    <div><img className='theme' src={img_theme_4} alt="Tema azul" /></div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar