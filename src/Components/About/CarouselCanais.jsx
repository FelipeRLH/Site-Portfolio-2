import { useEffect, useState, useRef } from 'react'


function CarouselCanais() {
    const [data, setData] = useState([])
    const carousel = useRef(null);

    useEffect(() => {
        fetch('static/json/canais.json')
            .then((response) => response.json())
            .then(setData)
    }, [])
    if (!data || !data.length) return null;

    const handleLeftClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }
    const handleRightClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    return (
        <div>
            <div className='carousel' ref={carousel}>
                <div className='carousel_itens'>
                    {data.map((item) => {
                        const { id, name, text, image } = item;
                        return (
                            <div className='item' key={id}>
                                <img src={image} alt={name} />

                                <div className="infos">
                                    <span className="name">{name}</span>
                                    <span className="text">{text}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="buttons">
                <button onClick={handleLeftClick}><img src="/static/images/seta.png" alt="Scroll Left" /></button>
                <button onClick={handleRightClick}><img src="/static/images/seta.png" alt="Scroll Right" /></button>
            </div>
        </div> 
    )
}

export default CarouselCanais;