// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'
import AllCss from './AllCss.css'
import CssImage from './images/css_logo.png'
import HtmlImage from './images/html_logo.png'
import JsImage from './images/js_logo.png'
import ReactImage from './images/react_logo.png'

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => {
  const bgColor = hexaColor()
  const styles = {
    height: '100px',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    fontFamily: 'Montserrat',
    margin: '2px auto',
    borderRadius: '5px',
    width: '75%',
    border: '2px solid black',
  }
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  )
}

// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)

// User Card Component
const UserCard = () => (
  <div className='user-card'>
    <img src={asabenehImage} alt='asabeneh image' />
    <h2>Asabeneh Yetayeh</h2>
  </div>
)

// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}
const buttonStyles = {
  padding: '10px 20px',
  background: 'rgb(0, 255, 0)',
  border: 'none',
  borderRadius: 5,
}

const Button = () => <button style={buttonStyles}> action </button>

// Main Component
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
      <div>
        {/* Generate two different hexa colors every time */}
        <HexaColor />
        <HexaColor />
      </div>
    </div>
  </main>
)

// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)

// Front End Technologies
const FirstChallange = function(props) {
  const langageArray = [HtmlImage, CssImage, JsImage, ReactImage]; 
  const mapImages = langageArray.map( items => <img src={items}></img>)
  return (
    <div className='main-div'>
      <h2>Front End Technologies</h2>
      <div className='technologies' alt="image of a programming language I know ">
        {mapImages}
      </div>
    </div>
  )
}

// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    {/* <Header />
    <Main />
    <Footer /> */}
  <FirstChallange />
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)
