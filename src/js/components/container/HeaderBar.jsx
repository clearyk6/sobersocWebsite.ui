import React from "react";
import logo from '../../../logo-white-fill.png';

function HeaderBar() {
  return (
    <header style={headerStyle}>
      <div className="logo">
        <img src={logo} />
      </div>
      <h1>SoberSoc</h1>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default HeaderBar