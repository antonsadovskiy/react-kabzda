import React, {useState} from "react";

export type RatingType =  0 | 1 | 2 | 3 | 4 | 5;

export default function UnControlledRating() {
    console.log("Rating rendering")

    const [rating, setRating] = useState<RatingType>(0)

    const Rating = (value: RatingType) => {
        setRating(value)
    }

    return (
        <div>
            <Star selected={rating > 0} callback={() => Rating(1)}/>
            <Star selected={rating > 1} callback={() => Rating(2)}/>
            <Star selected={rating > 2} callback={() => Rating(3)}/>
            <Star selected={rating > 3} callback={() => Rating(4)}/>
            <Star selected={rating > 4} callback={() => Rating(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    callback: () => void
}

function Star(props: StarPropsType) {
    console.log("Star rendering")

    const onClickHandler = () => {
        props.callback()
    }

    return (props.selected)? <span onClick={onClickHandler}><b> star </b></span> :
        <span onClick={onClickHandler}> star </span>
}

