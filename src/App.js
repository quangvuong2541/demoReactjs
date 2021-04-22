import { Fragment, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import DemoApiClass from './Pages/DemoApi/DemoApiClass';
import DemoApiFunction from './Pages/DemoApi/DemoApiFunction';
import Detail from './Pages/Detail/Detail';
import Home from './Pages/Home/Home';
import UseEffectDemo from './Pages/Hook/UseEffectDemo/UseEffectDemo';
import UseStateDemo from './Pages/Hook/UseStateDemo/UseStateDemo';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <DemoApiClass/>
         
      </div>
    </BrowserRouter>
  );
}

export default App;
