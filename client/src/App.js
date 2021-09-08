import Socket from '../components/Socket';
import './App.css';
import { Route } from 'react-router-dom'
import { Fragment } from 'react';
import Home from '../components/Home'


function App() {
  Socket.emit('connected', 'menssage')
  return (
    <Fragment>
      <Route exact path='/' component={Home} />
    </Fragment>
  );
}

export default App;
