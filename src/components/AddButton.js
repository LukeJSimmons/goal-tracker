import './AddButton.css';

import { useState } from "react";
import store from "../store";
import { v4 as uuidv4 } from "uuid";

import { convertWordsToInterval } from '../utilities/CalculateDate';

import Add from '../images/Add.png';

const AddButton = () => {
    const [title, setTitle] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const [dueDate, setDueDate] = useState('');

    const handleDueDateChange = (event) => {
        setDueDate(event.target.value);
        console.log(dueDate);
    }

    const [recurInterval, setRecurInterval] = useState('');

    const handleRecurIntervalChange = (event) => {
        setRecurInterval(event.target.value);
    }

    const [showInputs, setShowInputs] = useState(false)

    const add = () => {
        if (!title) {
            setShowInputs(!showInputs);
            return;
        }
        
        store.dispatch({
            type: 'goals/addGoal',
            payload: {title: title, dueDate: dueDate, key: uuidv4(), recurInterval: convertWordsToInterval(recurInterval), completed: false}
        })
        setTitle('');
        setDueDate('');
        setRecurInterval('');
        setShowInputs(false);
    }

    return (<div data-testid="addContainer" className={showInputs ? 'primary addContainer showInputs' : 'primary addContainer'}>
        <button id="addButton" data-testid="addButton" className='alternate' onClick={add}><img src={Add} alt='add' /></button>
        <div>
            <input data-testid="titleInput" className='secondary' value={title} onChange={handleTitleChange} placeholder="title"></input>
            <br/>
            <input data-testid="dueDateInput" className='secondary' value={dueDate} onChange={handleDueDateChange} type="date"></input>
            <input data-testid="recurInput" className='secondary' placeholder='repeat every...' value={recurInterval} onChange={handleRecurIntervalChange}></input>
        </div>
    </div>);
};

export default AddButton;