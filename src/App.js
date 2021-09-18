import './App.css';
import QuestionWithOptions from "./components/QuestionWithOptions";

function App() {
    return (
        <div className="App">
            <div className="header-container">
                <h1>Opinion</h1>
                <p>because your opinion matters...</p>
            </div>
            <QuestionWithOptions />
            <div className="footer-container"></div>
        </div>
    );
}

export default App;
