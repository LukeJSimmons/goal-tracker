import './AddButton.css';

import { useEffect, useState } from "react";
import store from "../store";
import { v4 as uuidv4 } from "uuid";

import { convertWordsToInterval } from '../utilities/CalculateDate';

import Add from '../images/Add.png';
import { useLocation } from 'react-router-dom';

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

    const [color, setColor] = useState('');

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    const [showInputs, setShowInputs] = useState(false)

    const location = useLocation();
    const [pageIsGoals, setPageIsGoals] = useState(true);

    useEffect(() => {
        setPageIsGoals(location.pathname !== '/labels');
    }, [location])
    
    const add = () => {
        if (!title) {
            setShowInputs(!showInputs);
            return;
        }
        
        if (pageIsGoals) {
            store.dispatch({
                type: 'goals/addGoal',
                payload: {title: title, dateCreated: new Date(), dueDate: new Date(dueDate), key: uuidv4(), recur: recur, recurInterval: convertWordsToInterval(recurInterval), completed: false}
            })
            setTitle('');
            setDueDate('');
            setRecur(false);
            setRecurInterval('');
            setShowInputs(false);
        } else {
            store.dispatch({
                type: 'labels/addLabel',
                payload: {title: title, color: color, key: uuidv4()}
            })
            setTitle('');
            setColor('');
        }
    }

    return (<div className={showInputs ? 'primary addContainer showInputs' : 'primary addContainer'}>
        <button className='alternate' id="addButton" data-testid="addButton" onClick={add}><img src={Add} alt='add' /></button>
        {pageIsGoals ?
        <div>
            <input className='secondary' id="titleInput" data-testid="titleInput" value={title} onChange={handleTitleChange} placeholder="title"></input>
            <br/>
            <input className='secondary' id="deadlineInput" data-testid="deadlineInput" value={dueDate} onChange={handleDueDateChange} placeholder="deadline" type="date"></input>
            <input id='recurInput' className='secondary' placeholder='repeat every...' value={recurInterval} onChange={handleRecurIntervalChange}></input>
        </div>
        :
        <div>
            <input className='secondary' id='labelTitleInput' placeholder='title' value={title} onChange={handleTitleChange}></input>
            <input className='secondary' id='labelColorInput' placeholder='color' value={color} onChange={handleColorChange} type='color'></input>
        </div>}
    </div>);
};

export default AddButton;