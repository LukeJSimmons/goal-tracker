import "./Goals.css";

import store from "../store";
import React, { useState, useEffect } from 'react';

import Goal from "./Goal";



const Goals = () => {
    const [goals, setGoals] = useState(store.getState().goals);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setGoals(store.getState().goals);
        })

        return () => unsubscribe();
    }, []);

    console.log(goals);

    return (<div id="goals" data-testid="goals">
        {goals.map((goal) => (
            <Goal Key={goal.key} title={goal.title} recur={goal.recur} dateCreated={goal.dateCreated} dueDate={goal.dueDate} />
        ))}
    </div>);
}

export default Goals;