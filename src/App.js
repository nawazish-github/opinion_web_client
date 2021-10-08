import './App.css';
import QuestionWithOptions from "./components/QuestionWithOptions";
import QuestionOnStats from "./components/QuestionOnStats";

function App() {
    return (
        <div className="App">
            <div className="header-container">
                <h1>Opinion</h1>
                <p>because your opinion matters...</p>
            </div>
            <div className="survey">
                <QuestionOnStats/>
            </div>
            <div className="footer-container"></div>
        </div>
    );
}

export default App;
