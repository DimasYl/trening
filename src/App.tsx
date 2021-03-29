import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating, RatingValueType} from "./components/Rating";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion";
import {UnCotrolledRating} from "./components/UnControlledRating";
import OnOff from "./components/OnOff/OnOff";
import {Input} from "./components/Input";


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [value, setValue] = useState(false)

    return (
        <div>
            <OnOff value={value} onClick={setValue}/>
            <AppTitle title='This is App component'/>
            <AppTitle title='This is SPARTA'/>
            <UnCotrolledRating/>
            Article 1
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <Accordion title={'Menu'} collapsed={accordionCollapsed}
                       onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
            <UnControlledAccordion title={'Salam'} />
            Article 2

            <UncontrolledOnOff onChange={setValue}/>{value.toString()}
            <Input/>
        </div>
    )
}

type AppTitlePropsType = {
    title: string
}

function AppTitle(props: AppTitlePropsType) {

    return (
        <h3>{props.title}</h3>

    )
}


export default App;
