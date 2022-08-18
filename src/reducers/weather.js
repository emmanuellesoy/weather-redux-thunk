const initialState = [];

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("GET_WEATHER"):
            return [...state, action.data];
        default:
            return state;
    }
};

export default weatherReducer;