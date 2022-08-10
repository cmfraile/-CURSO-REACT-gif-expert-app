import { render } from '@testing-library/react';
import { GifGrid } from '../../src/components/gifgrid';
import React from 'react';

const main = () => {

    const valorcat:string = 'JoJo';

    test('debe de mandarse por props una categoria',() => {
        console.log(render(<GifGrid categoria={valorcat}/>))
        //expect(render(<GifGrid categoria={valorcat}/>))
    })
};

describe('Pruebas en el <GifGrid>',main)