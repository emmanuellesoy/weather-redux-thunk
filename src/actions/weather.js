import axios from "axios";

import api from "../api/api.json";

const GET_WEATHER = "GET_WEATHER";

const get = (data) => ({
    type: GET_WEATHER,
    data
});

export const getWeather = (cityName) => dispatch => {
    axios(`${api.base_url}?${api.params[0]}=${cityName}&${api.params[1]}=${api.key}&units=metric`)
        .then(response => dispatch(get(response.data)));
};