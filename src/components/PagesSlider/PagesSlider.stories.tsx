import {useState} from "react";

export default {
    title: 'Pages Slider'
}

export const PagesSlider = () => {

    const [currentPages, setCurrentPages] = useState(10)

    const slideRight = () => {
        setCurrentPages(currentPages + 10)
    }
    const slideLeft = () => {
        if (currentPages > 10){
            setCurrentPages(currentPages - 10)
        }
    }

    const pages = []
    for (let i = currentPages - 9; i <= currentPages; i++){
        pages.push(`${i} `)
    }

    return (
        <div>
            <button onClick={slideLeft}>{`<`}</button>
            {pages}
            <button onClick={slideRight}>{`>`}</button>
        </div>
    )
}