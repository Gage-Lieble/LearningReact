import './App.css';
import { useState, useEffect } from 'react'; // Hooks

const Person = (props) =>{ // Custom Component
  return(
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last: {props.last}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  const name = "gage";
  const isNameShowing = true;
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter(100)
  }, []);
  let fruits = ['Banana', 'Orange', 'Apple', 'Pear', 'Grapes', 'Kiwi']
  let randInt = Math.floor(Math.random() * fruits.length)
  let randFruit = fruits[randInt]
  const [fruit, setFruit] = useState(['Banana', 'Orange'])


  return (
    <div className="App"> 

      <button onClick={() => setFruit((current) => [...current, randFruit])}>Add Fruit</button>
      <h2>{fruit.map((fruit) => <li>{fruit}</li>)}</h2>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
      <h2>{counter}</h2>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>

      <Person name={"Gage"} last={"Lieble"} age={"19"}/> {/* Props */}
      <Person name={"Somer"} last={"Lieble"} age={"47"}/>
      <Person name={"Chase"} last={"Lieble"} age={"17"}/>
      
      <h4>Hello {isNameShowing ?  name : "unkown"}</h4>
      {name ? (
        <>
        <h1>Hey {name}</h1>
        </>
      ) : (
        <>
        <h1>No Name</h1>
        <h1>No Name Wow</h1>
        </>
      )}
    </div>
  );
}

export default App;
