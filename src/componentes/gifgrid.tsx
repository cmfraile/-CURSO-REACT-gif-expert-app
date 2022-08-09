import { useEffect, useState } from "react";
import { getGifs , placement } from '../helpers/getgifs';

export const GifGrid = ({categoria}:{categoria:string}) => {

    const [images,setImages] = useState<{id:string,title:string,url:string}[]|[]>([]);
    useEffect(() => {getGifs(categoria).then(setImages)},[]);

    const iftitle = (title:string):any => {if(title){return <div className="titulo">{title}</div>}}

    return(
        <div className="gifgrid">
            <h3>{categoria}</h3>
            {images.map(({id,title,url}) => (
            <div    
                key={id}
                className="ggimg fondodefault"
                style={{backgroundImage:`url(${url})`}}
            >
            {iftitle(title)};
            </div>
            ))}
        </div>
    )
}