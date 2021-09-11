import './App.css';
import Option from './components/Option';

function App() {
  
  function onClickHandler(value) {
    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({opinion: value}),
      };

    fetch("http://localhost:8080/opinion", options)
    .then(resp => resp.json())
    .then(data => console.log('data: ', data))
    .catch(err => console.log('what an error: ', err))
  }

  return (
    <div className="App">
      <div className="header-container">
        <h1>Opinion</h1>
        <p>because your opinion matters...</p>
      </div>
      <div className="body-container">
        <p>Do you feel safe eating street food in India?</p>
        <Option option="Can't say" onClickHandler={onClickHandler}/>
        <Option option="Yes, I enjoy street food" onClickHandler={onClickHandler}/>
        <Option option="No, you can't trust the vendors" onClickHandler={onClickHandler}/>
      </div>
      <div className="footer-container"></div>
    </div>
  );
}

export default App;
