import './Goal.css';

import { useState } from 'react';

import store from '../store';

const Goal = ({title, deadline, key, recur, dateCreated, dueDate}) => {
    const [completed, setCompleted] = useState(false);

    const handleCompletedClick = () => {
        if (recur) {
            setCompleted(true);
        } else {
            handleDeleteClick();
        }
    }

    const handleDeleteClick = () => {
        store.dispatch({
            type: 'goals/deleteGoal',
            payload: title
        })
    }

    if (dateCreated > dueDate && completed && recur) {
        setCompleted(false);
    }

    return (
        <div className={completed ? 'goal completed' : 'goal'}>
            <div id='textContainer'>
                <h3 key={key}>{title}</h3>
                <div className='flex'>
                    <p>{deadline}</p>
                    <p>{recur ? 'Repeat' : `Don't Repeat`}</p>
                </div>
            </div>
            <button className={completed ? 'completed' : ''} onClick={handleCompletedClick}>-/</button>
            <button onClick={handleDeleteClick}>D</button>
        </div>
    );
}

export default Goal;