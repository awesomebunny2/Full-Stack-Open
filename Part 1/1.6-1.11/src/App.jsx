import { useState } from 'react'


const Display = props => {

    const type = props.type;

    if (type == "header") {
        return (
            <div><h1>{props.value}</h1></div>
        )
    } else {
        return (
            <>
                <tbody>
                    <tr>
                        <td>{props.text}</td>
                        <td>{props.value}</td>
                    </tr>
                </tbody>
            </>
        )
    };

};

const Button = props => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
};

const Stats = ({ good, neutral, bad }) => {

    const goodText = <><b>Better than Captian D's on a Friday Afternoon:</b></>;
    const neutralText = <><b>I only eat for nutrition, not for taste:</b></>;
    const badText = <><b>BAARRRFFFF</b> <i>cough</i> <b>BLEEEHH</b> <i>wheeze</i> <b>UUHHHGGGH</b> <i>i'm dying</i><b>:</b></>;

    const allText = <><b>Total Votes:</b></>
    const averageText = <><b>Average:</b></>
    const positivePercent = <><b>% of Positive Scores:</b></>

    const all = <>{good + neutral + bad}</>
    const average = <>{(good + -Math.abs(bad))/(good + neutral + bad)}</>
    const percent = <>{(good/(good + neutral + bad))*100}%</>

    if ((good + neutral + bad == 0)) {
        return (
            <>
                <Display value={"Da Results are in..."} type={"header"}/>
                🤷🏻‍♂️ There's No Data Yet...
                <Display value={"Stats 4 Nerds"} type={"header"}/>
                🚫 No Data Is Currently Available...
            </>
        )
    } else {
        return (
            <>
                <Display value={"Da Results are in..."} type={"header"}/>
                <table>
                    <Display text={goodText} value={good} type={"body"}/>
                    <Display text={neutralText} value={neutral} type={"body"}/>
                    <Display text={badText} value={bad} type={"body"}/>
                </table>
               
                <Display value={"Stats 4 Nerds"} type={"header"}/>
                <table>
                    <Display text={allText} value={all} type={"body"}/>
                    <Display text={averageText} value={average} type={"body"}/>
                    <Display text={positivePercent} value={percent} type={"body"}/>
                </table>
            </>
        )
    };
   
};

const App = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const setValue = (valueArr, value) => {
        valueArr(value);
    };





    return (
        <div>
            <Display value={"iS ouR FoOd aNY goOd?!"} type={"header"}/>
            <Button handleClick={() => setValue(setGood, good + 1)} text="so goood 😌" />
            <br/><br/>
            <Button handleClick={() => setValue(setNeutral, neutral + 1)} text="it's sufficient 🥸" />
            <br/><br/>
            <Button handleClick={() => setValue(setBad, bad + 1)} text="BLEH, I JUST THREW UP IN MY MOUTH 🤢" />
            <Stats good={good} neutral={neutral} bad={bad}/>
        </div>
    )
};

export default App