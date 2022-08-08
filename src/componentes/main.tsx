import { useState } from 'react';
import './main.sass';
import { v4 } from 'uuid';

export const main = () => {

    const [ categoriasHook , setCategorias ] = useState<string[]>([]); 
    const addcategory = () => {
        

        /*
        const boton:any = document.getElementById('input');
        let arr:any = categoriasHook;
        arr.push(boton.value);
        setCategorias(arr);
        boton.value = "" ;
        */

        const boton:any = document.getElementById('input');
        setCategorias([...categoriasHook,boton.value]) ; boton.value = "";
        

    }

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

            <input id='input' type="text"/>
            <button onClick={addcategory} >Añadir</button>

            {/*Lista de gifs*/}
                {/*Gif cards*/}
        </>
    )
}