import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components'
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { cyan, green, blue, teal, purple, pink } from '@mui/material/colors';
import Box from '@mui/material/Box';



/*const goalButt = styled.button`
background-color = #3949ab

`
*/

const goal = cyan[100]

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p> 
          <br /> Welcome home, Swati <br />
          Let's get studying!
        </p>

        <Button variant="contained" color="secondary" style={{minWidth: '250px', minHeight: '250px', position: 'absolute', left: 500, top: 150}} size="large" href="https://www.checkli.com/checklists/view/622cf6aeaf393">
        goals
       </Button>


       <Button variant="contained" color="secondary" style={{font: "Times New Roman", minWidth: '250px', minHeight: '250px', position: 'absolute', right: 500, top: 150}} size="large"href="https://calendar.google.com/calendar/u/0/r?tab=rc">
        calendar
       </Button>

       <Button variant="contained" color="secondary"style={{minWidth: '250px', minHeight: '250px', position: 'absolute', left: 500, bottom: 150}} size = "large"href="https://www.youtube.com/watch?v=lTRiuFIWV54&list=PLtsnaBiy5FHtFss-bEewIH8P5tDUpgHHn&index=1&ab_channel=LofiGirl">
        tunes
       </Button>

       <Button variant="contained" color="secondary" style={{minWidth: '250px', minHeight: '250px', position: 'absolute', right: 500, bottom: 150}} size="large" href="https://docs.google.com/document/d/1c0IYtwjcY2E6qun9-fwyfCFRlbYRd_muHfdfxQEg0KQ/edit">
        brain break!
       </Button>

       <Button variant="contained" color ="success" style={{}}> test </Button>


{/* 
       //styling
box: {
  height: 100,
  display: "flex",
  border: "1px solid black",
  padding: 8
},
spreadBox: {
  justifyContent: "space-between",
  alignItems: "center"
}
//JSX
<Box
  component="span"
  m={1}
  className={`${classes.spreadBox} ${classes.box}`}
>
  <Button 
    variant="contained" 
    color="primary" 
    style={{ height: 40 }}
  >
    Primary
  </Button>
  <Button 
    variant="contained" 
    color="secondary" 
    style={{ height: 40 }}
  >
    Secondary
  </Button>
</Box> */}







        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
