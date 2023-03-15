// REACT
import React from 'react'

// COMPONENTS
import Sidebar from '../Components/Home/Sidebar'
import Project from '../Components/Projects/Project'

// CSS
import './Projects.css'

function Projects() {
  return (
    <section>
      <div className='container_projects'>
        <div className='sidebar sidebar_Projects'>
          <Sidebar />
        </div>
        <div className='title_projects'>
          <h1>Projetos</h1>
          <p>Clique em um Projeto e será redirecionado para o repositório git.</p>
        </div>
        <Project />
      </div>
    </section>
  )
}

export default Projects