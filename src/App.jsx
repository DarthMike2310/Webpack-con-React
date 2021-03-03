import './App.css';
import './App.scss';
import logo from './logo.svg';
import icon from './icon.png';

const App = () => {

  return(
    <>
      <h1>Hola Mundo</h1>
      <p>Hola soy un titulo</p>
      <h3>Logo React</h3>
      <img src={logo}></img>
      <hr></hr>
      <img src={icon}></img>
    </>
  )
};


export default App