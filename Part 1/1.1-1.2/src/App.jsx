const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  );
};


const Content = (props) => {

  let nameArr = [];
  let exArr = [];

  props.parts.forEach(obj => {

    nameArr.push(obj.name);
    exArr.push(obj.exercises);

  });

  return (
    <>
      <Part partName = {nameArr[0]} partExercises = {exArr[0]}/>
      <Part partName = {nameArr[1]} partExercises = {exArr[1]}/>
      <Part partName = {nameArr[2]} partExercises = {exArr[2]}/>
    </>
  );
};

const Part = (props) => {

  return (
    <>
      <p><b>{props.partName}</b> | <i>Total Exercises: {props.partExercises}</i></p>
    </>
  )
}


const Total = (props) => {

  let sum = 0;

  console.log(props);

  for (let i = 0; i < props.parts.length; i++) {
    sum += props.parts[i].exercises;
  };

  console.log(sum);

  return (
    <>
      <p><i><b>Total Number of Exercises: </b></i>{sum}</p>
    </>
  );
};


const App = () => {

  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];



  return (
    <>
      <Header course = {course} />
      <Content parts = {parts} />
      <Total parts = {parts}/>
     </>
  );
};

export default App