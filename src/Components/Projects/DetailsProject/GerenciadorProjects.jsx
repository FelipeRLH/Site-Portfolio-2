// REACT
import { Link } from 'react-router-dom'

import GerenciadorProjetos from '../../../Assets/Projects/GerenciadorProjetos.png'

// COMPONENTS
import Sidebar from '../../Home/Sidebar'

// LOGOS TECS
import html_logo from '../../../Assets/About/html_logo.png'
import logo_css3 from '../../../Assets/About/logo_css3.png'
import JavaScript_logo from '../../../Assets/About/JavaScript_logo.png'
import React_logo from '../../../Assets/About/React_logo.png'

// LOGOS DEPENDÊNCIAS
import reacticonslogo from '../../../Assets/Projects/Reacticonslogo.png'
import reactrouterlogo from '../../../Assets/Projects/Reactrouterlogo.png'
import JsonSever from '../../../Assets/Projects/JsonServerLogo.png'
import uuidLogo from '../../../Assets/Projects/uuidLogo.png'

// LOGOS NEXT PROJECT
import FilmesTmdb from '../../../Assets/Projects/FilmesTmdb.png'
import pokedex from '../../../Assets/Projects/Pokedex.png'
import Portfolio1 from '../../../Assets/Projects/Portfolio1.png'
import GHlogo250 from '../../../Assets/Projects/GHlogo250.png'


function GerenciadorProjects() {

  return (
    <section className='Container_Project'>
      <div className='sidebar'>
        <Sidebar />
      </div>

      <div className='Container_Video'>
        <img src={GerenciadorProjetos} alt="" />
        <h1>Gerenciador de Projetos</h1>
        <p>Esta aplicação é um gerenciador de projetos para
          pessoas/empresa. Com ele podemos adicionar um projeto à
          ser realizado, cada projeto contém nome, orçamento e
          categoria. Os projetos podem ser excluídos ou pode editar
          nome, valor do orçamento e categoria. Ele também adiciona
          serviços à serem feitos em cada projeto, cada serviço
          contém nome, custo do serviço e descrição. OBS: O preço
          do serviço não pode ser maior que o orçamento do projeto.</p>
      </div>

      <div className='Container_Tecs'>
        <h2>Tecnologias:</h2>
        <img src={html_logo} alt="Logo HTML" />
        <img src={logo_css3} alt="Logo CSS" />
        <img src={JavaScript_logo} alt="Logo JavaScript" />
        <img src={React_logo} alt="Logo React" />
      </div>

      <div className='Container_Dep'>
        <h2>Dependências:</h2>
        <img src={reacticonslogo} alt="" />
        <img src={reactrouterlogo} alt="" />
        <img src={JsonSever} alt="" />
        <img src={uuidLogo} alt="" />
      </div>

      <aside className='aside_project'>
        <div className='card_nextproject'>
          <Link to=''>
            <div>
              <h3>Quiz Copa do Mundo</h3>
              <img src={FilmesTmdb} alt="" />
            </div>
          </Link>
          <Link to=''>
            <div>
              <h3>Pokedex</h3>
              <img src={pokedex} alt="" />
            </div>
          </Link>
          <Link to='/projects/Costs'>
            <div>
              <h3>Gerenciador de Projetos</h3>
              <img src={Portfolio1} alt="" />
            </div>
          </Link>
        </div>

        <a href="https://github.com/FelipeRLH/Filmes-TMDB">
          <div className='card_gitrepository'>
            <h3>Projeto no Repositório Git</h3>
            <img src={GHlogo250} alt="Logo Git" />
          </div>
        </a>
      </aside>
    </section>
  )
}

export default GerenciadorProjects;