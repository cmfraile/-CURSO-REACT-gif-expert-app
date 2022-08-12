import { render , screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/gifgrid';
import React from 'react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs'; jest.mock('../../src/hooks/useFetchGifs') ;

const main = () => {

    const valorcat:string = 'Saitama';
    const giftest:{id:string,title:string,url:string}[] = [
        {id:'123',title:'Saitama',url:'http://localhost:5173/saitama'},
        {id:'456',title:'Saitama',url:'http://localhost:5173/saitama'},
    ];
    (useFetchGifs as jest.Mock).mockReturnValue({images:giftest,isLoading:true});

    test('Screenshot',() => {
        expect(render(<GifGrid categoria={valorcat}/>).container).toMatchSnapshot();
    });
    test('debe de aparecer el título de categoria correctamente insertado',() => {
        expect(render(<GifGrid categoria={valorcat}/>));
        expect(screen.getByLabelText('title').innerHTML).toContain(valorcat);
    });

    test('debe de traer las imágenes tras cargar el customHook',() => {
        render(<GifGrid categoria={valorcat}/>);
        expect(screen.getAllByLabelText('imgcard').length).toBe(2);
    });

};

describe('Pruebas en el <GifGrid>',main)