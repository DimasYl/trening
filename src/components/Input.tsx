import React, {useRef, useState} from 'react'

export function Input(){
    const [value, setValue] = useState('Abra')
const inputRef = useRef<HTMLInputElement>(null)
    let save = () =>{
        let el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (

<div>
        <input value={value} onChange={(e)=>{setValue(e.currentTarget.value)}}/>
        <input ref={inputRef}/>
        <button onClick={save}>Save</button>
</div>
    )
}

