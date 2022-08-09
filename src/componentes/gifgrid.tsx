import { useEffect, useState } from "react";
import { getGifs , placement } from '../helpers/getgifs';

export const GifGrid = ({categoria}:{categoria:string}) => {

    const [images,setImages] = useState<{id:string,title:string,url:string}[]|[]>([]);
    useEffect(() => {getGifs(categoria).then(setImages)},[]);

    return(
        <div className="gifgrid">
            <h3>{categoria}</h3>
            {images.map(({id,title,url}) => {
                {/*console.log(x)*/}
            return(
            <div    
                key={id}
                className="ggimg fondodefault"
                style={{backgroundImage:`url(${url})`}}
            >
                <div className="titulo">{title}</div>
            </div>
            )})}
        </div>
    )
}