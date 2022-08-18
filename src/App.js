import { useSelector, useDispatch } from 'react-redux';

import {getWeather} from "./actions/weather";
import './App.css';

const App = () => {

  const weatherList = useSelector(state=>state.weatherReducer);
  const dispatch = useDispatch();

  const search = (event) => {
    event.preventDefault();
    console.log(event.target.city.value);
    dispatch(getWeather(event.target.city.value));
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(event) => {search(event)}}>
          <input type="text" name="city" />
          <button>Get</button>
        </form>
        <table>
          <thead>
            <tr>
                <th>Ciudad</th>
                <th>Sensación Térmica</th>
                <th>Humedad</th>
                <th>Presión</th>
                <th>Temperatura</th>
                <th>Max</th>
                <th>Min</th>
              </tr>
          </thead>
          <tbody>
            {weatherList.map(item => {
              return (
                <tr key={Math.random()}>
                  <td>{item.name}</td>
                  <td>{item.main?.feels_like}</td>
                  <td>{item.main?.humidity}</td>
                  <td>{item.main?.pressure}</td>
                  <td>{item.main?.temp}</td>
                  <td>{item.main?.temp_max}</td>
                  <td>{item.main?.temp_min}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;