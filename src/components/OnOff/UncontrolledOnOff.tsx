import React, {useState} from "react";

type OnOffPropsType = {
    // value: boolean
    onChange: (value: boolean) => void
}

function UncontrolledOnOff(props: OnOffPropsType) {
    let [on, setOn] = useState(false)

    let onStyle = {display:'inline-block', border: '1px solid black',backgroundColor:on?'green':''}
    let offStyle = {display:'inline-block',border: '1px solid black',backgroundColor:on?'':'red'}
    let inputStyle = {width: '10px',height: '10px',borderRadius: '10px',backgroundColor:on?'green':'red',marginLeft: '2px'}
   const onClicked = () => {setOn(true)
       props.onChange(true)
   }
    const offClicked = () => {setOn(false)
        props.onChange(false)
    }
    return (
        <div>
            <div>
                <div style={onStyle} onClick={onClicked}>On</div>
                <div style={offStyle} onClick={offClicked}>Off</div>
                <input style={inputStyle}/>
            </div>
        </div>
    )
}

export default UncontrolledOnOff