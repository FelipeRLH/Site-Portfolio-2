import Sidebar from '../Components/Home/Sidebar.jsx'
import CarouselCanais from '../Components/About/CarouselCanais.jsx'
import CarouselLivros from '../Components/About/CarouselLivros.jsx'
import Footer from '../Components/Contact/Footer'

import img_escritorio from '../Assets/About/img_escritorio.png'
import html_logo from '../Assets/About/html_logo.png'
import logo_css3 from '../Assets/About/logo_css3.png'
import JavaScript_logo from '../Assets/About/JavaScript_logo.png'
import React_logo from '../Assets/About/React_logo.png'
import bootstrap_logo from '../Assets/About/bootstrap_logo.png'
import figma_logo from '../Assets/About/figma_logo.png'


import './About.css'
import CarouselPodCasts from '../Components/About/CarouselPodCasts.jsx'


function About() {



  return (
    <section className='section_about'>
      <div className='sidebar'>
        <Sidebar />
      </div>

      {/* SOBRE MIM */}
      <div className='intro_about'>
        <div>
          <h1><span>Sobre</span> mim</h1>
          <p>
            Meu nome é <span>Felipe</span> e estou iniciando a carreira em
            <span> Desenvolvimento de Software</span>. Tenho foco em desenvolvimento
            com <span>ReactJS e JavaScript</span>. Me considero ágio e consistente
            para aprender uma nova tecnologia ou funcionalidade e me
            adaptar a qualquer mudança com resiliência!
          </p>
          <p>
            Tenho 20 anos e sou um apaixonado por estudo e leitura,
            busco todos os dias evoluir corpo e mente, gosto de
            assuntos como: <span>Administração, Tecnologia, Psicologia,
              Economia e etc...</span> <br />
            Diria que sou fascinado por Desenvolvimento Pessoal,
            se eu pudesse me definir em 3 palavras, com certeza
            seriam: <span>Otimista, Disciplinado e planejador!</span>
          </p>
        </div>
        <img src={img_escritorio} alt="Imagem de escritório" />
      </div>


      {/* SKILLS */}
      <div className='skill_about'>
        <h2>Skills</h2>
        <p>Tecnologias que <span>domino e estudo</span>:</p>

        <div className='logos_about_container'>
          <div className='logo_about about_1'>
            <img src={html_logo} alt="" />
            <p>HTML5</p>
          </div>
          <div className='logo_about about_2'>
            <img src={logo_css3} alt="" />
            <p>CSS</p>
          </div>
          <div className='logo_about about_3'>
            <img src={JavaScript_logo} alt="" />
            <p>JavaScript</p>
          </div>
          <div className='logo_about about_4'>
            <img src={React_logo} alt="" />
            <p>React</p>
          </div>
          <div className='logo_about about_5'>
            <img src={bootstrap_logo} alt="" />
            <p>Bootstrap</p>
          </div>
          <div className='logo_about about_6'>
            <img src={figma_logo} alt="" />
            <p>Figma</p>
          </div>
        </div>
      </div>


      {/* SOFTSKILLS */}
      <div className='softskills'>
        <h2><span>Soft</span>Skills</h2>
        <p>Minhas <span>habilidades extras</span>:</p>
        <ul>
          <li>Comunicativo</li>
          <li>Espirito empreendedor</li>
          <li>Trabalho em equipe</li>
          <li>Resiliente</li>
          <li>Disciplinado</li>
          <li>Organizado</li>
          <li>Criativo</li>
          <li>Proativo</li>
          <li>Motivador</li>
        </ul>
      </div>


      {/* INDICAÇÕES */}
      <div className='indicacoes'>
        <div className='title_indicacoes'>
          <h2>Indicações</h2>
          <p>Estes são canais, livros, filmes e outros<br />
            que eu <span>consumo e recomendo</span>.</p>
        </div>

        {/* CARROSSEL */}
        <h3>Canais Youtube:</h3>
        <CarouselCanais />

        <h3>Livros:</h3>
        <CarouselLivros />

        <h3>PodCasts:</h3>
        <CarouselPodCasts />

        <Footer />
      </div>
    </section>
  )
}

export default About