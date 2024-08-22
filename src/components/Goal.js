import './Goal.css';

import { useEffect, useState } from 'react';

import store from '../store';
import { calculateDate, convertDateToString } from '../utilities/CalculateDate';

import X from '../images/X.png';
import Check from '../images/Check.png';
import Repeat from '../images/Repeat.png';
import RepeatCompleted from '../images/RepeatCompleted.png';

const Goal = ({Key, title, recur, recurInterval, dueDate, completed}) => {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        setCurrentDate(new Date());
    }, []);

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

    if (currentDate > new Date(dueDate) && completed && recur) {
        const newDueDate = new Date(dueDate);
        newDueDate.setDate(newDueDate.getDate() + recurInterval);

        store.dispatch({
            type: 'goals/uncompleteGoal',
            payload: {Key: Key, newDueDate: newDueDate}
        })
    }

    return (
        <div className={completed ? 'primary goal completed' : 'primary goal'}>
            <div id='textContainer'>
                <h2>{title}</h2>
                <div className='flex'>
                    <p>{convertDateToString(calculateDate(dueDate))}</p>
                    {recur ? (<>
                        <img src={completed ? RepeatCompleted : Repeat} alt='repeat every' />
                        <p>{recurInterval % 7 === 0 ? recurInterval / 7 : recurInterval} {recurInterval % 7 === 0 ? 'weeks' : 'days'}</p>
                    </>) : <></>}
                </div>
            </div>
            <div id='buttonContainer'>
                {completed ? <button className='secondary no-shadow' onClick={handleDeleteClick}><img src={X} alt='delete'/></button> : <></>}
                <button className={completed ? 'completed' : 'alternate'} onClick={handleCompletedClick}><img src={Check} alt='complete'/></button>
            </div>
        </div>
    );
}

export default Goal;