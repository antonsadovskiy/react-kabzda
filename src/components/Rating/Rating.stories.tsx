import React, {useState} from 'react';
import {Rating} from "./Rating";
import {action} from "@storybook/addon-actions";
import {RatingType} from "../UnControlledRating/UnControlledRating";

export default {
    title: 'Rating',
    component: Rating,
} ;

export const EmptyRating = () => <Rating value={0} changeRating={action('clicked')}/>
export const Rating1 = () => <Rating value={1} changeRating={action('clicked')}/>
export const Rating2 = () => <Rating value={2} changeRating={action('clicked')}/>
export const Rating3 = () => <Rating value={3} changeRating={action('clicked')}/>
export const Rating4 = () => <Rating value={4} changeRating={action('clicked')}/>
export const Rating5 = () => <Rating value={5} changeRating={action('clicked')}/>
export const ChangingMode = () => {

    const [rating, setRating] = useState<RatingType>(0)
    return <Rating value={rating} changeRating={setRating}/>
}


