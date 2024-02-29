import React from 'react';
import './App.css';

// Default Component
function App() {
  return (
    <div>
      <AdobeProduct></AdobeProduct>
    </div>
  )

}
function AdobeProduct(props) {
  return (
    <div style={{
      color: 'red'
    }}>
      <h2>Adobe Photoshop CC</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et recusandae quia repudiandae temporibus optio aut deleniti aliquam ullam debitis.</p>
      <p>Price: 350$ <span>Yearly</span></p>
    </div >
  )
}


export default App;
