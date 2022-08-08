export const GifGrid = ({categoria}:any) => {

    const placement = () => {
        let caso:any[] = [];
        for(let i = 1 ; i <= 5 ; i++){
            caso.push(
            <div    className="ggimg fondodefault"
                    style={{backgroundImage:'url(https://c.tenor.com/txPXESQJ_0AAAAAC/the-bad-guys-the-bad-guys-movie.gif)'}}
            >
                <div className="titulo">
                    Lorem, ipsum dolor.
                </div>
            </div>
            )
        }
        return caso;
    }
    
    return(
        <div className="gifgrid">
            <h3>{categoria}</h3>
            {placement()}
        </div>
    )
}