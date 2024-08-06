import "./Goals.css";

import store from "../store";
import React, { useState, useEffect } from 'react';

import CalculateDate from "../utilities/CalculateDate";

import Goal from "./Goal";

const Goals = () => {
    const [goals, setGoals] = useState(store.getState().goals);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setGoals(store.getState().goals);
        })

        return () => unsubscribe();
    }, []);

    return (<div id="goals" data-testid="goals">
        {goals.map((goal) => (
            <Goal key={goal.id} title={goal.title} deadline={CalculateDate(goal.deadline)} recur={goal.recur} />
        ))}
    </div>);
}

export default Goals;