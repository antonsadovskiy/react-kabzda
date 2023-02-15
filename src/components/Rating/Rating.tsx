import React from "react";
import {RatingType} from "../UnControlledRating/UnControlledRating";

type RatingPropsType = {
    value: RatingType
    changeRating: (value: RatingType) => void
}

export default function Rating(props: RatingPropsType) {
    console.log("Rating rendering")

    return (
        <div>
            <Star selected={ props.value > 0 } callback={() => props.changeRating(1)} />
            <Star selected={ props.value > 1 } callback={() => props.changeRating(2)} />
            <Star selected={ props.value > 2 } callback={() => props.changeRating(3)} />
            <Star selected={ props.value > 3 } callback={() => props.changeRating(4)} />
            <Star selected={ props.value > 4 } callback={() => props.changeRating(5)} />
        </div>
    )
}

type StarPropsType = {
    selected: boolean;
    callback: ()=>void
}

function Star(props: StarPropsType) {
    console.log("Star rendering")

    const onClickHandler = () => {
        props.callback()
    }

    return <span onClick={onClickHandler}>{props.selected? <b> star </b> : " star "}</span>
}

