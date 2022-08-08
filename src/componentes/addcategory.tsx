import React, { ChangeEvent, SetStateAction, useState } from "react"

export const AddCategory = ({sC}:{sC:React.Dispatch<SetStateAction<string[]|[]>>}) => {

    const [inputValue,setInputValue] = useState<string>('')

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            if(inputValue.trim().length <= 2){return}
            sC((cat) => [inputValue,...cat]);
            setInputValue('');
        }}>
            <input  type="text"
                    value={inputValue}
                    placeholder="buscar gifs"
                    onChange={(e:ChangeEvent<HTMLInputElement>) => {setInputValue(e.target.value)}}
            />
        </form>
    )
}