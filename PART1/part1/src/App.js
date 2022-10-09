const App = () => {
  const Header = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
  }

  const Content = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
  }

  const Total = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
  }
  // making an object
  const course = {
    // first attribute
    name: "Half Stack application development",
    // second attribute array of object literals
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      },
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
