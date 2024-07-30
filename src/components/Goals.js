import store from "../store";
import React, { useState, useEffect } from 'react';

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
            <h1 key={goal.id}>{goal.title}</h1>
        ))}
    </div>);
}

export default Goals;