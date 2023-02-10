import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from './components/Rating/Rating';
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import UnControlledRating from "./components/UnControlledRating/UnControlledRating";

function App() {
    return (
        <div>
            {/*<PageTitle title={"First title"}/>*/}
            {/*<Accordion titleValue={"UnControlledAccordion 1"} collapsed={true}/>*/}
            {/*<Rating value={4}/>*/}

            {/*<PageTitle title={"Second title"}/>*/}
            {/*<Accordion titleValue={"UnControlledAccordion 2"} collapsed={false}/>*/}
            {/*<Rating value={2}/>*/}

            <UnControlledAccordion titleValue="news"/>
            <UnControlledRating />
            <OnOff />
            <OnOff />
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
