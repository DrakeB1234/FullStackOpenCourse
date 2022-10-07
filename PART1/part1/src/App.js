const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}! You are {props.age} years old!</p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const age = 12;

  return (
    <div>
      <p>The time is {now.toString()}</p>
      <Hello name = 'George' age = {age + 12} />
      <Hello name = 'Drake' age = {age + 23} />
      <Hello name = 'Johnny' age = {age} />
    </div>
  )
}

export default App;
