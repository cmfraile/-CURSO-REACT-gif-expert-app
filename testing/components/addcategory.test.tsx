import React from "react";
import { fireEvent, render , screen } from "@testing-library/react";
import { AddCategory } from '../../src/components/addcategory';

const main = () => {
    test('debe de cambiar el valor de la caja de texto',() => {
        render(<AddCategory onNewCategory={() => {}} cHK={['jojo','demon slayer']} />);
        //const input = screen.getByRole('textbox');
        const input:HTMLInputElement = screen.getByLabelText('inputcat');
        fireEvent.input(input,{target:{value:'Saitama'}});
        expect(input.value).toBe('Saitama');
    })
}

describe('comprobaciones del <AddCategory/>',main)