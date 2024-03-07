import React from 'react';
import './App.css';

// Default Component
function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', }}>
      <CreativeCloudApp names='Adobe Express' text='Quickly and easily make standout content from thousands of beautiful templates.'></CreativeCloudApp>
      <CreativeCloudApp names='Photoshop Express' text='Quickly edit, collage, and retouch photos so they stand out on social and everywhere else.'></CreativeCloudApp>
      <CreativeCloudApp names='Adobe Firefly' text='Use everyday language to create extraordinary results with generative Al.'></CreativeCloudApp>
    </div>
  )
}
const Heading = () => {
  <div>
    <h1>Make share-worthy social posts and unforgettable content wherever you are.</h1>
  </div>
}
function CreativeCloudApp(props) {
  return (
    <div style={{ height: "300px", width: "300px", backgroundColor: '#fff4eb', margin: '10px', padding: '30px', border: '2px solid red', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div><img width='50px' height='50px' src='Screenshot_1.png'></img></div>
      <div style={{ display: 'flex', justifyContent: "space-between", flex: 1 }}>
        <div style={{ padding: '15px', }}>
          <h1><u>{props.names}</u></h1>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  )
}




export default App;
