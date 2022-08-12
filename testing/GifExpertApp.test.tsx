import { render , screen } from "@testing-library/react";
import { main as GifExpertApp } from '../src/components/main';
import React from "react";

const main = () => {
    test('probamos toda la app',() => {
        render(<GifExpertApp/>);
        screen.debug();
    });
}

describe('Prueba de la ruta crítica de GifExpertApp',main)