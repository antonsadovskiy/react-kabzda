import React, {useState} from "react";

export type RatingType =  0 | 1 | 2 | 3 | 4 | 5;
type PropsType = {
    defaultValue?: RatingType
    onChange: (value: RatingType) => void
}
type StarPropsType = {
    selected: boolean
    callback: () => void
}

function UnControlledRatingSecret(props:PropsType) {
    console.log("Rating rendering")

    const [rating, setRating] = useState<RatingType>(props.defaultValue? props.defaultValue : 0)

    const Rating = (value: RatingType) => {
        setRating(value)
        props.onChange(value)
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
export const UnControlledRating = React.memo(UnControlledRatingSecret)

function StarSecret(props: StarPropsType) {
    console.log("Star rendering")

    const onClickHandler = () => {
        props.callback()
    }

    return <span onClick={onClickHandler}>{props.selected? <b> star </b> : " star "}</span>
}
export const Star = React.memo(StarSecret)
