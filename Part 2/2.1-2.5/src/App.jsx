const Header = ({course}) => {
    console.log(course);
    return (
        <>
        <h1>{course}</h1>
        </>
    );
};


const Content = ({course}) => {

    return (
        <>
            {course.parts.map(part =>
                <Part key={part.id} partName={part.name} partExercises={part.exercises} />
            )}
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

  for (let i = 0; i < props.course.parts.length; i++) {
    sum += props.course.parts[i].exercises;
  };

  console.log(sum);

  return (
    <>
      <p><i><b>Total Number of Exercises: </b></i>{sum}</p>
    </>
  );
};

const Course = ({course}) => {
//   console.log(course);
  return (
    <>
      <Header key={course.id} course={course.name} />
      <Content course={course} />
    </>
  )
}

const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  };


  return <Course key={course.id} course={course} />

  // return (
  //   <>
  //     <Header course = {course} />
  //     <Content course = {course} />
  //     <Total course = {course}/>
  //    </>
  // );
};

export default App