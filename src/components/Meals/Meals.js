import React, { Fragment } from "react";
 import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import Header from "../Layout/Header";

const Meals = props =>{
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    )

};

export default Meals;