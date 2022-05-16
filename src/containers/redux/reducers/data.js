import {SET_LATEST_DATA} from "../constants";

const initialState = {
    latestData: null,
};

const data = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_LATEST_DATA:
            return {
                ...state,
                latestData: {...payload},
            };
        default: return state;
    }
}

export default data;