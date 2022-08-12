import React from "react";
import { fireEvent, render , screen } from "@testing-library/react";
import { AddCategory } from '../../src/components/addcategory';

const main = () => {

    const inputvalue:string = 'Saitama'

    test('debe de cambiar el valor de la caja de texto',() => {
        render(<AddCategory onNewCategory={() => {}} cHK={['jojo','demon slayer']} />);
        //const input = screen.getByRole('textbox');
        const input:HTMLInputElement = screen.getByLabelText('inputcat');
        fireEvent.input(input,{target:{value:inputvalue}});
        expect(input.value).toBe(inputvalue);
    });

    test('Debemos de hacer el submit del formulario',() => {
        
        const onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={onNewCategory} cHK={['jojo','demon slayer']} />);
        const input:HTMLInputElement = screen.getByLabelText('inputcat');
        const form:HTMLFormElement = screen.getByLabelText('form');
        fireEvent.input(input,{target:{value:inputvalue}});
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputvalue);

        //screen.debug();
    });

    test('No debemos llamar el evento si el submit no cumple los requisitos',() => {

        const onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={onNewCategory} cHK={['jojo','demon slayer']} />);
        const input:HTMLInputElement = screen.getByLabelText('inputcat');
        const form:HTMLFormElement = screen.getByLabelText('form');
        fireEvent.input(input,{target:{value:'s'}});
        fireEvent.submit(form);

        expect(input.value).toBe('s');
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalledWith('s');
        expect(onNewCategory).not.toHaveBeenCalled();
        
    });

}

describe('comprobaciones del <AddCategory/>',main)