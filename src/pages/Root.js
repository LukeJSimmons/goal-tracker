import './Root.css';

import { Outlet, Link } from "react-router-dom";
import { useEffect } from 'react';
import AddButton from '../components/AddButton';

import { SaveData } from '../SaveHandler';
import store from '../store';

import Home from '../images/Home.png';
import Label from '../images/Label.png';

const Root = () => {
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            SaveData(store.getState());
        })

        return () => unsubscribe();
    }, [])

    return (<div id='root' data-testid="root" className='secondary'>
        <header>
            <h1>Goal Tracker</h1>
        </header>
        <Outlet />
        <footer data-testid="footer">
            <AddButton />
            <div className='primary' id='footerContainer'>
                <Link to='/'><button className='alternate' id="homeButton" data-testid="homeButton"><img src={Home} alt='home' /></button></Link>
                <Link to='/labels'><button className='alternate' id="labelButton" data-testid="labelButton"><img src={Label} alt='labels' /></button></Link>
            </div>
        </footer>
    </div>)
}

export default Root;