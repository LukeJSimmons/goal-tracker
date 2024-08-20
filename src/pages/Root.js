import './Root.css';

import { Outlet } from "react-router-dom";
import AddButton from '../components/AddButton';

import Home from '../images/Home.png';
import Label from '../images/Label.png';

const Root = () => {
    return (<div id='root' data-testid="root" className='secondary'>
        <header>
            <h1>Goal Tracker</h1>
        </header>
        <Outlet />
        <footer data-testid="footer">
            <AddButton />
            <div className='primary' id='footerContainer'>
                <button className='alternate' id="homeButton" data-testid="homeButton"><img src={Home} /></button>
                <button className='alternate' id="labelButton" data-testid="labelButton"><img src={Label} /></button>
            </div>
        </footer>
    </div>)
}

export default Root;