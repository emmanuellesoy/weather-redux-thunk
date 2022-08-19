import axios from "axios";

import api from "../api/api.json";

const GET_WEATHER = "GET_WEATHER";

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

const get = (data) => ({
    type: GET_WEATHER,
    data
});

export const getWeather = (cityName) => dispatch => {
    axios(`${api.base_url}?q=${cityName}&appid=${API_KEY}&units=metric`)
        .then(response => dispatch(get(response.data)));
};

