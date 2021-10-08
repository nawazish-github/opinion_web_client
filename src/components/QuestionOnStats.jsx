import React, {useState} from 'react';
import {LeafPoll, Result} from "react-leaf-polls";
import 'react-leaf-polls/dist/index.css'

function QuestionOnStats() {
    const resData = [
        {text: 'Yes', votes: 10},
        {text: 'No', votes: 5},
        {text: 'Can\'t Say', votes: 2},
    ];

    const [resState, setResState] = useState(resData);

    function vote(item, results) {
        console.log('ITEM: ', item)
        if (item.text === 'Yes') {
            setResState(prevState => {
                prevState[0].votes += 1;
            })
        } else if (item.text === 'No') {
            setResState(prevState => {
                prevState[1].votes += 1;
            })
        } else if (item.text === 'Can\'t Say') {
            setResState(prevState => {
                prevState[2].votes += 1;
            })
        }

        console.log('new state: ', )
    }

    const customTheme = {
        textColor: 'black',
        mainColor: '#00B87B',
        backgroundColor: 'rgb(255,255,255)',
        alignment: 'center'

    };

    return (
        <LeafPoll
            type='multiple'
            question='Is binging OTT madness?'
            results={resData}
            theme={customTheme}
            onVote={vote}
        />
    );
}

export default QuestionOnStats;