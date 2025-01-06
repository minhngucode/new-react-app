import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
// import { ToastContainer, toast, Bounce } from 'react-toastify'; // Import Bounce
// import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <MyComponent/> */}
          {/* <ListTodo /> */}
          <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/todo">
            <ListTodo />
          </Route>
          <Route path="/about">
            <MyComponent />
          </Route>
        </Switch>
        </header>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
