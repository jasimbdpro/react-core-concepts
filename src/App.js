import React from 'react';
import './App.css';

// Default Component
function App() {
  return (
    <div>
      <CreativeCloudApp></CreativeCloudApp>
    </div>
  )
}
function CreativeCloudApp(props) {
  return (
    <div style={{ height: "200px", width: "160px", backgroundColor: '#fff4eb', margin: '10px', padding: '30px', border: '2px solid red', borderRadius: '10px', }}>
      <img src='favicon.ico'></img>
      <h1>HEllo</h1>
    </div>
  )
}



export default App;
