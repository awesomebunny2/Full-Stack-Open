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


const Total = ({course}) => {

  const sum = course.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0);

  console.log(sum);


  return (
    <>
      <p><b><u>Total Number of Exercises:<i> {sum}</i></u></b></p>
    </>
  );
};

const Course = ({course}) => {
//   console.log(course);
  return (
    <>
      <Header key={course.id} course={course.name} />
      <Content course={course} />
      <Total course={course} />
      <br />
    </>
  )
}

const App = () => {

  const course = [
    {
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  // return <Course key={course.id} course={course} />
  return (
    <>
      {course.map(section =>
        <Course key={section.id} course={section} />
      )}
    </>
  );

  // return (
  //   <>
  //     <Header course = {course} />
  //     <Content course = {course} />
  //     <Total course = {course}/>
  //    </>
  // );
};

export default App