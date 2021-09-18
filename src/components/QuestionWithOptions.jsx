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

    const [data, setData] = useState(initState);

    useEffect(() => {
        console.log('fetching questions for the day!');

        fetch("http://localhost:8080/question/2021-09-18")
            .then(resp => resp.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, []);

    function onClickHandler() {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                qid: "3",
                oid: "1",
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
                />)}
        </div>
    );
}

export default QuestionWithOptions