import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({categoria}:{categoria:string}) => {

    const { images, isLoading } = useFetchGifs(categoria);

    return(

        <div className="gifgrid">
            <h3>{categoria}</h3>
            <h2 style={{display:(isLoading) ? '' : 'none'}}>Cargando...</h2>
            {images.map(({id,title,url}) => (
            <div    
                key={id}
                className="ggimg fondodefault"
                style={{backgroundImage:`url(${url})`}}
            >
            <div className="titulo" style={{display:(title) ? '' : 'none' }} >{title}</div>
            </div>
            ))}
        </div>
    )
}

/*
export const GifGrid = ({categoria}:{categoria:string}) => {

    const [images,setImages] = useState<{id:string,title:string,url:string}[]|[]>([]);
    useEffect(() => {getGifs(categoria).then(setImages)},[]);

    
}
*/