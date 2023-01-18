import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from './components/Rating/Rating';

function App() {
    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"This isn't App component"}/>
            Article 1
            <Rating value={1}/>
            <Accordion titleValue={"Accordion 1"} collapsed={true}/>
            <Accordion titleValue={"Accordion 2"} collapsed={false}/>
            Article 2
            <Rating value={5}/>
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
