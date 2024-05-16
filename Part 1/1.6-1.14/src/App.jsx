import { useState } from 'react'


const Display = props => {

    const type = props.type;

    if (type == "header") {
        return (
            <div><h1>{props.value}</h1></div>
        )
    } else {
        return (
            <div>{props.value}</div>
        )
    };

};

const Button = props => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
};

const App = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const setValue = (valueArr, value) => {
        console.log(valueArr, value);
        valueArr(value);
    };

    const goodText = <><b>Better than Captian D's on a Friday Afternoon:</b> {good}<br/><br/></>;
    const neutralText = <><b>I only eat for nutrition, not for taste:</b> {neutral}<br/><br/></>;
    const badText = <><b>BAARRRFFFF</b> <i>cough</i> <b>BLEEEHH</b> <i>wheeze</i> <b>UUHHHGGGH</b> <i>i'm dying</i><b>:</b> {bad}<br/><br/></>;

    return (
        <div>
            <Display value={"iS ouR FoOd aNY goOd?!"} type={"header"}/>
            <Button handleClick={() => setValue(setGood, good + 1)} text="so goood 😌" />
            <br/><br/>
            <Button handleClick={() => setValue(setNeutral, neutral + 1)} text="it's sufficient 🥸" />
            <br/><br/>
            <Button handleClick={() => setValue(setBad, bad + 1)} text="BLEH, I JUST THREW UP IN MY MOUTH 🤢" />
            <Display value={"Da Results are in..."} type={"header"}/>
            <Display value={goodText} type={"body"}/>
            <Display value={neutralText} type={"body"}/>
            <Display value={badText} type={"body"}/>
        </div>
    )
};

export default App