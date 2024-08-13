import './Root.css';

import { Outlet } from "react-router-dom";
import AddButton from '../components/AddButton';

import store from '../store';

const Root = () => {
    return (<div id='root' data-testid="root" className='primary'>
        <Outlet />
        <footer data-testid="footer">
            <AddButton />
            <div className='secondary' id='footerContainer'>
                <button className='primary' id="homeButton" data-testid="homeButton">Home</button>
            </div>
        </footer>
    </div>)
}

export default Root;