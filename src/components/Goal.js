import './Goal.css';

import { useEffect, useState } from 'react';

import store from '../store';
import { calculateDate, convertDateToString } from '../utilities/CalculateDate';

import X from '../images/X.png';
import Check from '../images/Check.png';
import Repeat from '../images/Repeat.png';
import RepeatCompleted from '../images/RepeatCompleted.png';

const Goal = ({Key, title, recurInterval, dueDate, completed}) => {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        setCurrentDate(new Date());
    }, []);

    const handleCompletedClick = () => {
        if (recurInterval) {
            store.dispatch({
                type: 'goals/completeGoal',
                payload: Key
            })
        } else {
            handleDeleteClick(Key);
        }
    }

    const handleDeleteClick = () => {
        store.dispatch({
            type: 'goals/deleteGoal',
            payload: Key
        })
    }

    if (currentDate > new Date(dueDate) && completed && recurInterval) {
        const newDueDate = new Date(dueDate);
        newDueDate.setDate(newDueDate.getDate() + recurInterval);

        store.dispatch({
            type: 'goals/uncompleteGoal',
            payload: {Key: Key, newDueDate: newDueDate}
        })
    }

    return (
        <div data-testid="goal" id={Key} className={completed ? 'primary goal completed' : 'primary goal'}>
            <div id='textContainer'>
                <h2>{title}</h2>
                <div className='flex'>
                    <p>{convertDateToString(calculateDate(dueDate))}</p>
                    {recurInterval ? (<>
                        <img data-testid="recurImg" src={completed ? RepeatCompleted : Repeat} alt='repeat every' />
                        <p>{recurInterval % 7 === 0 ? recurInterval / 7 : recurInterval} {recurInterval % 7 === 0 ? 'weeks' : 'days'}</p>
                    </>) : <></>}
                </div>
            </div>
            <div id='buttonContainer'>
                {completed ? <button data-testid="deleteButton" className='secondary no-shadow' onClick={handleDeleteClick}><img src={X} alt='delete'/></button> : <></>}
                <button data-testid="completeButton" className={completed ? 'completed' : 'alternate'} onClick={handleCompletedClick}><img src={Check} alt='complete'/></button>
            </div>
        </div>
    );
}

export default Goal;