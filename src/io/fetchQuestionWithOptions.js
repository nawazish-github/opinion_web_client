const fetchQuestionWithOptions = () => {
    var questionWithOptions;
    fetch("http://localhost:8080/questionn/2021-09-18")
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            questionWithOptions = data;
            return data;
        })
        .catch(err => console.log(err))
}

export default fetchQuestionWithOptions