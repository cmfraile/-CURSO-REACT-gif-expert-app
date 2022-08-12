import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';

export const GifGrid = ({categoria}:{categoria:string}) => {

    const { images, isLoading } = useFetchGifs(categoria);

    return(

        <div className="gifgrid">
            <h3 aria-label='title' >{categoria}</h3>
            <h2 style={{display:(isLoading) ? '' : 'none'}}>Cargando...</h2>
            {images.map(({id,title,url}) => (
            <div
                aria-label='imgcard'    
                key={id}
                className="ggimg fondodefault"
                style={{backgroundImage:`url(${url})`}}
            >
            <div className="titulo" style={{display:(title) ? '' : 'none' }} >{title}</div>
            </div>
            ))}
        </div>
    )
}

GifGrid.propTypes = { categoria : PropTypes.string.isRequired };