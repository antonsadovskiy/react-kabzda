import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from './components/Rating/Rating';
import UnControlledRating, {RatingType} from "./components/UnControlledRating/UnControlledRating";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";
import {OnOff} from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";

function App() {

    const [rating, setRating] = useState<RatingType>(0)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [filter, setFilter] = useState<boolean>(false)

    const changeRating = (value: RatingType) => {
        setRating(value)
    }
    const changeCollapsed = () => {
        setCollapsed(!collapsed)
    }
    const changeFilter = (value: boolean) => {
        setFilter(value)
    }


    return (
        <div className={"App"}>
            {/*<PageTitle title={"First title"}/>*/}
            {/*<Accordion titleValue={"UnControlledAccordion 1"} collapsed={true}/>*/}

            {/*<PageTitle title={"Second title"}/>*/}
            <Accordion titleValue={"ControlledAccordion"} collapsed={collapsed} changeCollapsed={changeCollapsed}/>
            <UnControlledAccordion titleValue={"UncontrolledAccordion"} />
            <Rating value={rating} changeRating={changeRating}/>
            <UnControlledRating />
            {/*<OnOff filter={filter} changeFilter={changeFilter}/>*/}
            <UnControlledOnOff onChange={setFilter}/> {filter.toString()}
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
