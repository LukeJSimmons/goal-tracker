import "./Goals.css";

import store from "../store";
import React, { useState, useEffect } from 'react';

import { calculateDate, convertDateToString } from '../utilities/CalculateDate';

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
            <Goal key={goal.id} title={goal.title} deadline={convertDateToString(calculateDate(goal.deadline))} recur={goal.recur} dateCreated={new Date()} dueDate={new Date(goal.deadline)} />
        ))}
    </div>);
}

export default Goals;