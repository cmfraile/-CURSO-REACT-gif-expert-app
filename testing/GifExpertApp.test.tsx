import { render , screen , fireEvent , waitFor, renderHook } from "@testing-library/react";
import { main as GifExpertApp } from '../src/components/main';
import React from "react";
import { useFetchGifs } from "../src/hooks/useFetchGifs";


jest.mock('../src/components/main.sass',() => {})

const main = () => {

    const inputvalue:string = 'The bad guys'
    
    test('Screenshot',() => {
        expect(render(<GifExpertApp/>).container).toMatchSnapshot();
    });

    test('Debe de generar consulta si el input cumple los requisitos',() => {
        render(<GifExpertApp/>);
        const input:HTMLInputElement = screen.getByLabelText('inputcat');
        const form:HTMLFormElement = screen.getByLabelText('form');
        fireEvent.input(input,{target:{value:inputvalue}});
        fireEvent.submit(form);
        
        expect(screen.getByRole('heading',{name:'Cargando...'})).toBeTruthy();
        expect(input.value).toBe('');
    
    });

    test('No debe de generar 2 consultas del mismo tema',() => {
        render(<GifExpertApp/>)
        const input:HTMLInputElement = screen.getByLabelText('inputcat');
        const form:HTMLFormElement = screen.getByLabelText('form');
        fireEvent.input(input,{target:{value:inputvalue}});
        fireEvent.submit(form);
        fireEvent.input(input,{target:{value:inputvalue}});
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading',{name:'Cargando...'}).length).toBe(1);
    
    });

    test('No debe de generar consulta si el input no cumple los requisitos',() => {
        render(<GifExpertApp/>);
        const input:HTMLInputElement = screen.getByLabelText('inputcat');
        const form:HTMLFormElement = screen.getByLabelText('form');
        fireEvent.input(input,{target:{value:'a'}});
        expect(render(<GifExpertApp/>).container).toMatchSnapshot();
        fireEvent.submit(form);
        expect(render(<GifExpertApp/>).container).toMatchSnapshot();
    })

}

describe('Prueba de la ruta crítica de GifExpertApp',main)