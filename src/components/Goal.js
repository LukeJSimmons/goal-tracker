import './Goal.css';

import { useState } from 'react';

import store from '../store';
import { calculateDate, convertDateToString, calculateRecur } from '../utilities/CalculateDate';

import X from '../images/X.png';
import Check from '../images/Check.png';
import Repeat from '../images/Repeat.png';

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

    if (new Date(dateCreated) > new Date(dueDate) && completed && recur) {
        dueDate = calculateRecur(dateCreated, dueDate);

        store.dispatch({
            type: 'goals/uncompleteGoal',
            payload: {Key: Key, newDueDate: dueDate}
        })
    }

    return (
        <div className={completed ? 'secondary goal completed' : 'secondary goal'}>
            <div id='textContainer'>
                <h3>{title}</h3>
                <div className='flex'>
                    <p>{convertDateToString(calculateDate(dueDate))}</p>
                    {recur ? (<img id='repeatIcon' src={Repeat}/>) : <></>}
                </div>
            </div>
            <div id='buttonContainer'>
                <button className='alternate' onClick={handleDeleteClick}><img src={X}/></button>
                <button className={completed ? 'alternate completed' : 'alternate'} onClick={handleCompletedClick}><img src={Check}/></button>
            </div>
        </div>
    );
}

export default Goal;