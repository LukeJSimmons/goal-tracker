import './HomePage.css';

import Goals from "../components/Goals";

const HomePage = () => {
    return (<div id="homePage" data-testid="homePage">
        <Goals />
    </div>);
}

export default HomePage;