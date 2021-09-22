import React, {useEffect, useState} from 'react';
import Option from './Option';

function QuestionWithOptions() {
    const initState = {
        question: {
            qid: "",
            question_prompt: ""
        },
        options: []
    };

    const date = new Date().toISOString().split('T')[0];
    const [data, setData] = useState(initState);

    useEffect(() => {
        console.log('fetching questions for the day: ', date);

        const URL = `http://localhost:8080/question/${date}`;
        fetch(URL)
            .then(resp => resp.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [date]);

    function onClickHandler(key) {
        console.log('option key: ', key);
        const dateTime = new Date().toISOString();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                qid: data.question.qid,
                oid: key,
                date_time: dateTime,
            }),
        };

        fetch("http://localhost:8080/opinion", options)
            .then(resp => resp.json())
            .then(data => console.log('data: ', data))
            .catch(err => console.log('what an error: ', err))
    }

    return (
        <div className="body-container">
            <p>{data.question.question_prompt}</p>
            {data.options.map(opt =>
                <Option
                    key={opt.oid}
                    option={opt.option_prompt}
                    onClickHandler={onClickHandler}
                    id={opt.oid}
                />)}
        </div>
    );
}

export default QuestionWithOptions