import React, {useState} from 'react';
import './App.css';
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";

function App (props:any) {

    let [ratingValue, setRatingValue] = useState <RatingValueType> (4)

    return(
        <div className="App">
            <OnOff/>
            {/*<AppTitle/>
            <Rating value={3}/>
            <Accordion/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            <UncontrolledAccordion titleValue={"Меню"}/>

            <UncontrolledRating/>

            <Rating value={ratingValue} onClick={setRatingValue}/>

        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return <div>This is App component</div>
}

export default App;
