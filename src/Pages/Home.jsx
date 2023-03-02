import React from 'react'
import Navbar from '../Components/Home/Navbar'
import Sidebar from '../Components/Home/Sidebar'

import img_inicial from '../Assets/Home/Img/img_inicial.png'
import { FaHandPaper, FaRegStar } from 'react-icons/fa'

import './Home.css'

function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />

      <div className='container_main'>
        <div className='text'>
          <h2><FaHandPaper /> Olá, eu sou <br /><span>Felipe.</span></h2>
          <h1>Desenvolvedor Front-end Junior </h1>
          <p>
            Eu desenvolvo aplicações web usando <span>HTML, CSS,
              JavaScript, React</span> e <span>etc</span>. Uso ferramentas de Design
            como Figma e PhotoShop. Atualmente estou estudando e
            realizando projetos pessoais/freelancer, em busca da
            minha primeira oportunidade profissional.
          </p>
          <button>Enviar E-mail</button>
        </div>
        <div className='img_container'>
          <img src={img_inicial} alt="" width={'450px'} />
        </div>
      </div>
      <div className='barra_footer'>
        <p>HTML</p> <FaRegStar className='iconStar' />
        <p>CSS</p> <FaRegStar className='iconStar' />
        <p>JAVASCRIPT</p> <FaRegStar className='iconStar' />
        <p>REACT</p> <FaRegStar className='iconStar' />
        <p>FIGMA</p> <FaRegStar className='iconStar' />
        <p>FRONT-END</p> <FaRegStar className='iconStar' />
        <p>BOOTSTRAP</p>
      </div>
    </div>
  )
}

export default Home