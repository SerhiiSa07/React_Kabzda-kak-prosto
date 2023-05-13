import React, {useState} from 'react';
import './App.css';
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App (props:any) {

    let [ratingValue, setRatingValue] = useState <RatingValueType> (4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false);

    return(
        <div className="App">
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            {/*<AppTitle/>
            <Rating value={3}/>*/}
            {/*<Accordion titleValue={"Меню"}
                       collapsed={accordionCollapsed}
                       onChange={
                () => {setAccordionCollapsed (!accordionCollapsed) }
            }/>*/}
            {/*<Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            {/*<UncontrolledAccordion titleValue={"Меню"}/>
            <UncontrolledRating/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return <div>This is App component</div>
}

export default App;
