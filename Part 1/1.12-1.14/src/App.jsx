import { useState } from 'react'

const Button = (props) => {

    console.log(props);

    return (
        <>
            <button onClick={props.handleClick}>{props.text}</button>
        </>
    )
}



const App = () => {

    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ];

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min +1)) + min;
    };

    let obj = {};

    for (let i = 0; i < anecdotes.length; i++) {
        obj[i] = 0;
    };


    const [selected, setSelected] = useState(getRandomNumber(0, anecdotes.length - 1));
    const [points, setPoints] = useState(obj)


    const updateVotes = (selected) => {

        console.log(obj);

        let newPoints = {...points}
        newPoints[selected] = newPoints[selected] + 1
        setPoints(newPoints)

    };

    const getMaxProperty = (obj, statement) => {

        let property = Object.keys(obj).reduce((max, key) => obj[max] > obj[key] ? max : key);

        console.log(property);

        return statement[property];

    }

    const getMax = (obj) => {

        let arr = Object.values(obj);
        let max = Math.max(...arr);

        console.log(max);

        return max;
    
    }

  return (
    <div>
        {anecdotes[selected]}
        <br/>
        This anecdote has {points[selected]} votes
        <br/>
        <Button handleClick={() => setSelected(getRandomNumber(0, anecdotes.length - 1))} text="another one"/>
        <Button handleClick={() => updateVotes(selected)} text="vote for this one"/>
        <br/>
        <h3>Anecdote with the most votes:</h3>
        {getMaxProperty(points, anecdotes)}
        <br/>
        {getMax(points)}

    </div>
  )
}

export default App