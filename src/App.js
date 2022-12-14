import "./App.css";

import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <WeatherSearch />
        <footer>
          <small>
            <a
              href="https://github.com/Yuldenys/react-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>
            , by Yuliya Denysenko from
            <a
              href="https://shecodes.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              She Codes
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
