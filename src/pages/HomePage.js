import Goals from "../components/goals";

const HomePage = () => {
    return (<div id="homePage" data-testid="homePage">
        <Goals />
        <button id="addButton" data-testid="addButton"></button>
    </div>);
}

export default HomePage;