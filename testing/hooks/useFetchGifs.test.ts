import { renderHook , waitFor } from "@testing-library/react";
import React from "react";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

const main = () => {
    test('debe de regresar el estado inicial',() => {
        const { images , isLoading } = renderHook(() => useFetchGifs('One Punch')).result.current;
        expect(images.length).toBe(0) ; expect(isLoading).toBeTruthy() ;
    });
    test('debe de retornar un arreglo de imagenes y definir !isLoading',async() => {
        const result = renderHook(() => useFetchGifs('One Punch')).result;
        await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0),{timeout:2000});
        const { images , isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    });
}

describe('pruebas en el Hook useFetchGifs',main)