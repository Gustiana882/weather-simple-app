import moment from "moment"
const initialState = {
    date: moment(),
    location: [106.8, -6.16667],
    woeid: 1047378,
}

const Data = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case "SET_DATE": {
            return {
                ...state,
                date: payload,
            }
        }

        case "SET_LOCATION": {
            return {
                ...state,
                location: payload,
            }
        }

        case "SET_WOEID": {
            return {
                ...state,
                woeid: payload,
            }
        }

        default:
            return state
    }
}

export default Data