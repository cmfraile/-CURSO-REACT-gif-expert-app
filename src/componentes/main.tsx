import { useState } from 'react';
import './main.sass';

export const main = () => {

    const [ categorias , setCategorias ] = useState();

    return(
        <>
            {/*Titulo*/}
            <h1>Hola mundo</h1>

            {/*Input*/}
            <ol>
                {['lorem','ipsum','dolor'].map(valor => {
                    return <li key={valor}>{valor}</li>
                })}
            </ol>

            {/*Lista de gifs*/}
                {/*Gif cards*/}
        </>
    )
}