import './Goal.css';

import { useState } from 'react';

import store from '../store';
import { calculateDate, convertDateToString, calculateRecur } from '../utilities/CalculateDate';

const Goal = ({Key, title, recur, dateCreated, dueDate}) => {
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
            payload: Key
        })
    }

    if (dateCreated > dueDate && completed && recur) {
        setCompleted(false);
        dueDate = calculateRecur(dueDate);
    }

    return (
        <div className={completed ? 'goal completed' : 'goal'}>
            <div id='textContainer'>
                <h3>{title}</h3>
                <div className='flex'>
                    <p>{convertDateToString(calculateDate(dueDate))}</p>
                    <p>{recur ? 'Repeat' : `Don't Repeat`}</p>
                </div>
            </div>
            <button className={completed ? 'completed' : ''} onClick={handleCompletedClick}>-/</button>
            <button onClick={handleDeleteClick}>D</button>
        </div>
    );
}

export default Goal;