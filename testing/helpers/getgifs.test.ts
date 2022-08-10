import { string } from 'prop-types';
import { getGifs } from '../../src/helpers/getgifs';

const main = () => {
    test('debe de retornar un arreglo de gifs',async() => {
        const gifs = await getGifs('JoJo');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id:expect.any(String),
            title:expect.any(String),
            url:expect.any(String)
        });
    })
}

describe('pruebas del helpers [getGifs]',main);