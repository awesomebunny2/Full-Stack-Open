const Header = ({course}) => {
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
  );
};


const Total = ({course}) => {
  const sum = course.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0);
  return (
    <>
      <p><b><u>Total Number of Exercises:<i> {sum}</i></u></b></p>
    </>
  );
};


const Course = ({course}) => {
    return (
        <>
          <Header key={course.id} course={course.name} />
          <Content course={course} />
          <Total course={course} />
          <br />
        </>
      );
};


export default Course