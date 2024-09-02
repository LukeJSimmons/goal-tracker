import "./Goals.css";

import React from 'react';

import Goal from "./Goal";
import { useSelector } from "react-redux";



const Goals = () => {
    const goals = useSelector(state => state.goals);

    return (<div className="secondary" id="goals" data-testid="goals">
        {goals.map((goal) => (
            <Goal key={goal.key} Key={goal.key} title={goal.title} recur={goal.recur} recurInterval={goal.recurInterval} dueDate={goal.dueDate} completed={goal.completed} />
        ))}
    </div>);
}

export default Goals;