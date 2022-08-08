import { useState } from 'react';
import './main.sass';
import { v4 } from 'uuid';

import { AddCategory } from './addcategory';

export const main = () => {

    const [ categoriasHook , setCategorias ] = useState<string[]|[]>([]); 
    

    return(
        <>
            {/*Titulo*/}
            <h1>Hola mundo</h1>

            {/*Input*/}

            <ol>
                {categoriasHook.map(valor => {
                    return <li key={v4()}>{valor}</li>
                })}
            </ol>

            <AddCategory sC={setCategorias} />

            {/*Lista de gifs*/}
                {/*Gif cards*/}
        </>
    )
}