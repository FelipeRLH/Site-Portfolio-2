import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import './Project.css'


function Project() {
    const [data, setData] = useState([])

    // FETCH PARA BUSCAR DADOS JSON
    useEffect(() => {
        fetch('static/json/projet.json')
            .then((response) => response.json())
            .then(setData)
    }, [])
    if (!data || !data.length) return null;

    return (
        <div>
            <div className='projects'>
                {data.map((item) => {
                    const { id, name, text, image } = item;
                    return (
                        <Link to={`/projects/${id}`} className='link_projects' key={id}>
                            <div className='project' >
                                <img src={image} alt={name} />

                                <div className="infos">
                                    <span className="name">{name}</span>
                                    <span className="text">{text}</span>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Project;