import {GET_LATEST_DATA, SET_LATEST_DATA} from "../constants";

export const getLatestData = () => ({
    type: GET_LATEST_DATA,
})

export const setLatestData = (payload) => ({
    type: SET_LATEST_DATA,
    payload,
})
