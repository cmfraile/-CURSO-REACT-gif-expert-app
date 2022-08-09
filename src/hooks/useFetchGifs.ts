import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getgifs';

export const useFetchGifs = (categoria:string) => {

    const [images,setImages] = useState<{id:string,title:string,url:string}[]|[]>([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        getGifs(categoria).then(setImages);
        setIsLoading(false);
    },[]);
    return{images,isLoading}

}