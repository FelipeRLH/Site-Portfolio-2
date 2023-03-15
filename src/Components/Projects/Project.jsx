import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { DetailsContexto } from './DetailsProject/DetailsContexto';

import './Project.css'


function Project() {
    const [data, setData] = useState([])
    const [projectIdentifier, setprojectIdentifier] = useContext(DetailsContexto)

    
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
                        <Link to={id} className='link_projects' key={id} onClick={(e)=> setprojectIdentifier(id)}>
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