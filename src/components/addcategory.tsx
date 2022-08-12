import { useState } from "react";
import propTypes from 'prop-types';

//export const AddCategory = ({sC}:{sC?:React.Dispatch<SetStateAction<string[]|[]>>}) => {
interface ACface {onNewCategory:any,cHK:string[]|[]};
export const AddCategory = ({onNewCategory,cHK}:ACface) => {

    const [inputValue,setInputValue] = useState<string>('')

    return(
        <form   aria-label='form'
                onSubmit={(e) => {
            //console.log('Hola mundo desde el submit');
            e.preventDefault();
            
            //VALIDADORES:
            if(inputValue.trim().length <= 2){return}
            if(cHK.map(x => x.toUpperCase()).includes(inputValue.trim().toUpperCase())){return};
            
            //sC((cat) => [inputValue,...cat]);
            onNewCategory(inputValue.trim())
            setInputValue('');
        }}>
            <input  type="text"
                    value={inputValue}
                    aria-label='inputcat'
                    placeholder="buscar gifs"
                    onChange={(e) => {setInputValue(e.target.value)}}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory:propTypes.func.isRequired
}
