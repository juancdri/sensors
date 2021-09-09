import './App.css';
import { Route } from 'react-router-dom'
import { Fragment } from 'react';
import Home from './components/Home'
import Sensors from './components/Sensors/Sensors';
import SensorEvents from './components/SensorEvents/SensorEvents'


function App() {
  return (
    <Fragment>
      <Route exact path='/' component={Home} />
      <Route path='/sensor' component={Sensors} />
      <Route path='/sensorEvents/:id' component={SensorEvents} />
    </Fragment>
  );
}

export default App;
