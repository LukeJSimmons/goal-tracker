import './Goal.css';

import { useState } from 'react';

import store from '../store';
import { calculateDate, convertDateToString, calculateRecur } from '../utilities/CalculateDate';

const Goal = ({Key, title, recur, dateCreated, dueDate, completed}) => {

    const handleCompletedClick = () => {
        if (recur) {
            store.dispatch({
                type: 'goals/completeGoal',
                payload: Key
            })
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
        store.dispatch({
            type: 'goals/uncompleteGoal',
            payload: Key
        })
        dueDate = calculateRecur(dueDate);
    }

    return (
        <div className={completed ? 'secondary goal completed' : 'secondary goal'}>
            <div id='textContainer'>
                <h3>{title}</h3>
                <div className='flex'>
                    <p>{convertDateToString(calculateDate(dueDate))}</p>
                    <p>{recur ? 'Repeat' : `Don't Repeat`}</p>
                </div>
            </div>
            <div id='buttonContainer'>
                <button className='alternate' onClick={handleDeleteClick}>X</button>
                <button className={completed ? 'alternate completed' : 'alternate'} onClick={handleCompletedClick}>+</button>
            </div>
        </div>
    );
}

export default Goal;