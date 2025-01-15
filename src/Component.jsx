import React from 'react'
import { useState } from 'react'


export default function Component() {

    const [text, setText] = useState()
    const [upDated, setUpdated] = useState()
    const [pass, setPass] = useState();

    const textOnChance = (event) => {
        setText(event.target.value)
    }

    const PassOnChange = (event) => {
        setPass(event.target.value)
    }

    const buttonOnClick = () => {

        if (text != 'a') {
            setUpdated(text)
        }
        else{
            setUpdated("Error")
        }
        
    } 

    return (
        <div>
            <input type="text" name="" id="" placeholder='Nombre' value={text} onChange={textOnChance}/>
            <br />
            <input type="password" name="" id="" placeholder='Password' value={pass} onChange={PassOnChange}/>
            <p>{text}</p>
            <p>{pass}</p>

            <button onClick={buttonOnClick}>Actualizar</button>
            <p>{upDated}</p>
        </div>
    )
}
