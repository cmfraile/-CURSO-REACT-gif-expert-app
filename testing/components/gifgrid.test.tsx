import { render , screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/gifgrid';
import React from 'react';

const main = () => {

    const valorcat:string = 'JoJo';

    test('Screenshot',() => {
        expect(render(<GifGrid categoria={valorcat}/>).container).toMatchSnapshot();
    });
    test('debe de aparecer el título de categoria correctamente insertado',() => {
        expect(render(<GifGrid categoria={valorcat}/>));
        expect(screen.getByLabelText('title').innerHTML).toContain(valorcat);
    });

    test('debe de traer las imágenes tras cargar el customHook',() => {
        
    });

};

describe('Pruebas en el <GifGrid>',main)