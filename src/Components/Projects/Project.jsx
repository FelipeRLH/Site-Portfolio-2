import { useEffect, useState } from 'react'


function Project() {
    const [data, setData] = useState([])

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
                    const { id, name, text, image, link } = item;
                    return (
                        <a href={link} className='link_projects' key={id}>
                            <div className='project' >
                                <img src={image} alt={name} />

                                <div className="infos">
                                    <span className="name">{name}</span>
                                    <span className="text">{text}</span>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Project;