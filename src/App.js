import React, { useState, useEffect } from 'react';
import './App.css';

// Default Component
function App() {
  const nayok = ['Anwar', 'Jafor', 'Alomgir', 'Salman']
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '60.99' },
    { name: 'PDF reader', price: '$6.99' },
  ]
  return (
    <div className='App'>
      <header className='App-header'>
        <p>I am React Project</p>
        <Counter></Counter>
        <Users></Users>

      </header>

    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h2>Dynamic Users: {users.length} </h2>
      {
        users.map(user => <li>{user.phone}</li>)
      }
    </div>
  )
}
function Counter(props) {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);

  }

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}




export default App;
