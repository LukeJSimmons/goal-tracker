import './AddButton.css';

import { useState } from "react";
import store from "../store";
import { v4 as uuidv4 } from "uuid";

import { convertWordsToInterval } from '../utilities/CalculateDate';

const AddButton = () => {
    const [title, setTitle] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const [dueDate, setDueDate] = useState('');

    const handleDueDateChange = (event) => {
        setDueDate(event.target.value);
    }

    const [recur, setRecur] = useState(false);

    const [recurInterval, setRecurInterval] = useState('');

    const handleRecurIntervalChange = (event) => {
        setRecurInterval(event.target.value);
        if (event.target.value) {
            setRecur(true);
        } else {
            setRecur(false);
        }
    }

    const [showInputs, setShowInputs] = useState(false)
    
    const add = () => {
        if (!title || !dueDate) {
            setShowInputs(!showInputs);
            return;
        }
        store.dispatch({
            type: 'goals/addGoal',
            payload: {title: title, dateCreated: new Date(), dueDate: new Date(dueDate), key: uuidv4(), recur: recur, recurInterval: convertWordsToInterval(recurInterval), completed: false}
        })
        setTitle('');
        setDueDate('');
        setRecur(false);
        setRecurInterval('');
        setShowInputs(false);
    }

    return (<div id='addContainer' className='secondary'>
        <div id={showInputs ? 'shown' : 'hidden'}>
            <input className='primary' id="titleInput" data-testid="titleInput" value={title} onChange={handleTitleChange} placeholder="title"></input>
            <br/>
            <input className='primary' id="deadlineInput" data-testid="deadlineInput" value={dueDate} onChange={handleDueDateChange} placeholder="deadline" type="date"></input>
            <input id='recurInput' className='primary' placeholder='repeat every...' value={recurInterval} onChange={handleRecurIntervalChange}></input>
        </div>
        <button className='alternate' id="addButton" data-testid="addButton" onClick={add}>Add</button>
    </div>);
};

export default AddButton;