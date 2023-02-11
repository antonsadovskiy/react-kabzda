import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from './components/Rating/Rating';
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import UnControlledRating, {RatingType} from "./components/UnControlledRating/UnControlledRating";

function App() {

    const [rating, setRating] = useState<RatingType>(0)

    const changeRating = (value: RatingType) => {
        setRating(value)
    }

    return (
        <div className={"App"}>
            {/*<PageTitle title={"First title"}/>*/}
            {/*<Accordion titleValue={"UnControlledAccordion 1"} collapsed={true}/>*/}
            {/*<Rating value={4}/>*/}

            {/*<PageTitle title={"Second title"}/>*/}
            {/*<Accordion titleValue={"UnControlledAccordion 2"} collapsed={false}/>*/}
            <UnControlledAccordion titleValue="news"/>
            <UnControlledRating />
            <Rating value={rating} changeRating={changeRating}/>
            <OnOff />
            {/*<OnOff />*/}
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
