import './main.sass';
import { useState } from 'react';
import { v4 } from 'uuid';
import { AddCategory } from './addcategory';
import { GifGrid } from './gifgrid';

export const main = () => {

    const [ categoriasHook , setCategorias ] = useState<string[]|[]>([]);

    return(
        <>
            <h1>Gif Expert APP</h1>
            
            <AddCategory
                // sC={setCategorias}
                onNewCategory={(e:string) => {setCategorias([e,...categoriasHook])}}
                cHK={categoriasHook}
            />

            <ol>{categoriasHook.map(valor => {return <GifGrid key={v4()} categoria={valor}/>})}</ol>

            {/*Lista de gifs*/}
                {/*Gif cards*/}
        </>
    )
}