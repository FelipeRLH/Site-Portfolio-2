// REACT
import { Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { DetailsContexto } from './DetailsContexto';

// COMPONENTS
import Sidebar from '../../Home/Sidebar';

// IMAGES
import github_logo from './github_logo.png'


function DetailsProj() {
  const [projectCurrent, setprojectCurrent] = useState({})
  const [projectidentifier, setprojectidentifier] = useContext(DetailsContexto)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/static/json/detailsproject.json')
      const data = await response.json();
      const objeto = data.find(obj => obj.id === projectidentifier)
      setprojectCurrent(objeto)
      console.log(objeto.aside[0].id)
    }
    fetchData()
  }, [])

  const { imageVid, name, description, tecs, dep, aside, githublink } = projectCurrent;
  return (
    <section className='Container_Project'>
      <div className='sidebar'>
        <Sidebar />
      </div>

      <div className='Container_Video'>
        <img src={imageVid} alt="" />
        <h1>{name}</h1>
        <p>{description}</p>
      </div>

      {imageVid &&
        <>
          <div className='Container_Tecs'>
            <h2>Tecnologias:</h2>
            <img src={tecs[0]} alt="Logo Tecnologia" />
            <img src={tecs[1]} alt="Logo Tecnologia" />
            {tecs[2] &&
              <img src={tecs[2]} alt="Logo Tecnologia" />
            }
            {tecs[3] &&
              <img src={tecs[3]} alt="Logo Tecnologia" />
            }
            {tecs[4] &&
              <img src={tecs[4]} alt="Logo Tecnologia" />
            }
          </div>
          <div className='Container_Dep'>
            <h2>Dependências:</h2>
            {dep[0] &&
              <img src={dep[0]} alt="Logo Tecnologia" />
            }
            {dep[1] &&
              <img src={dep[1]} alt="Logo Tecnologia" />
            }
            {dep[2] &&
              <img src={dep[2]} alt="Logo Tecnologia" />
            }
            {dep[3] &&
              <img src={dep[3]} alt="Logo Tecnologia" />
            }
          </div>

          <aside className='aside_project'>
            <div className='card_nextproject'>
              {projectidentifier &&
                <Link to='' >
                  <div>
                    <h3>{aside[0].title}</h3>
                    <img src={aside[0].image} alt="" />
                  </div>
                </Link>
              }
              <Link to=''>
                <div>
                  <h3>{aside[1].title}</h3>
                  <img src={aside[1].image} alt="" />
                </div>
              </Link>
              <Link to=''>
                <div>
                  <h3>{aside[2].title}</h3>
                  <img src={aside[2].image} alt="" />
                </div>
              </Link>
            </div>

            <a href={aside[3].githublink} target="_blank">
              <div className='card_gitrepository'>
                <h3>Projeto no Repositório Git</h3>
                <img src={github_logo} alt="Logo Git" />
              </div>
            </a>
          </aside>
        </>
      }
    </section>
  )
}

export default DetailsProj