import React from "react";

type OnOffPropsType = {
     value: boolean
    onClick: (value: boolean) => void
}

function OnOff(props: OnOffPropsType) {


    let onStyle = {display:'inline-block', border: '1px solid black',backgroundColor:props.value?'green':''}
    let offStyle = {display:'inline-block',border: '1px solid black',backgroundColor:props.value?'':'red'}
    let inputStyle = {width: '10px',height: '10px',borderRadius: '10px',backgroundColor:props.value?'green':'red',marginLeft: '2px'}
    return (
        <div>
            <div>
                <div style={onStyle} onClick={()=>{props.onClick(true)}}>On</div>
                <div style={offStyle} onClick={()=>{props.onClick(false)}}>Off</div>
                <input style={inputStyle}/>
            </div>
        </div>
    )
}

export default OnOff