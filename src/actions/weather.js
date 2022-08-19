import axios from "axios";

import api from "../api/api.json";

const GET_WEATHER = "GET_WEATHER";

const API_KEY = process.env.OPEN_WEATHER_API_KEY;

const get = (data) => ({
    type: GET_WEATHER,
    data
});

export const getWeather = (cityName) => dispatch => {
    axios(`${api.base_url}?${api.params[0]}=${cityName}&${api.params[1]}=${API_KEY}&units=metric`)
        .then(response => dispatch(get(response.data)));
};