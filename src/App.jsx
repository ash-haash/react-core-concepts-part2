import './App.css'
import Counter from './Counter';
import Team from './Team';

function App() {

  function handleClick() {
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('button 2 clicked');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h2>React Core Concepts 2</h2>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert('third clicked') }}>Third</button>
      <button onClick={() => addToFive(8)}>Four</button>
    </>
  )
}

export default App
