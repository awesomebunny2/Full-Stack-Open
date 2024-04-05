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
      <p><b>{props.partName}</b> | <i>Total Exercises: {props.partExercises}</i></p>
    </>
  );
};


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

  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14



  return (
    <>
      <Header course={course} />
      <Content partName = {part1} partExercises = {exercises1} />
      <Content partName = {part2} partExercises = {exercises2} />
      <Content partName = {part3} partExercises = {exercises3} />
      <Total exercises = {[exercises1, exercises2, exercises3]}/>
     </>
  );
};

export default App