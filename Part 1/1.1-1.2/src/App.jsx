const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  );
};


const Content = (props) => {
  return (
    <>
      <Part partName = {props.part1Name} partExercises = {props.part1Exercises}/>
      <Part partName = {props.part2Name} partExercises = {props.part2Exercises}/>
      <Part partName = {props.part3Name} partExercises = {props.part3Exercises}/>
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

  for (let i = 0; i < props.exercises.length; i++) {
    sum += props.exercises[i];
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