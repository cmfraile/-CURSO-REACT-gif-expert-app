import { v4 } from "uuid";

export const getGifs = async(categoria:string):Promise<{id:string,title:string,url:string}[]> => {

    const querystring = () => {
        const request:any = {
            url:'https://api.giphy.com/v1/gifs/search?',
            api_key:'wOW1tP8JYE60hILwEOnpZ4bIQwDPu7mg',
            q:categoria,
            limit:'5'
        }
        const caso:string[] = [request.url];
        Object.keys(request).map(x => {
            if(x == 'url'){return};
            if(x == 'api_key'){caso.push(`${x}=${request[x]}`)}else{caso.push(`&${x}=${request[x]}`)}
            
        });
        return caso.join('');
    }
    const { data } = await(await fetch(querystring())).json();
    const gifs = data.map((img:any) => ({id:img.id,title:img.title,url:img.images.original.url}));
    return gifs;
}

export const placement = () => {
    let caso:any[] = [];
    for(let i = 1 ; i <= 5 ; i++){
        caso.push(
        <div    
                key={v4()}
                className="ggimg fondodefault"
                style={{backgroundImage:'url(https://c.tenor.com/txPXESQJ_0AAAAAC/the-bad-guys-the-bad-guys-movie.gif)'}}
        >
            <div className="titulo">
                Que ricos los papus
            </div>
        </div>
        )
    }
    return caso;
}