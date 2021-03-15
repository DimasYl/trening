import React, {useState} from "react";


export function UnCotrolledRating() {

    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0 && true} setValue={()=>{setValue(1)}} />
            <Star selected={value > 1 && true} setValue={()=>{setValue(2)}}/>
            <Star selected={value > 2 && true} setValue={()=>{setValue(3)}}/>
            <Star selected={value > 3 && true} setValue={()=>{setValue(4)}}/>
            <Star selected={value > 4 && true} setValue={()=>{setValue(5)}}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={()=>{props.setValue()}}>{props.selected ? <b> star</b> : ' star'} </span>
}