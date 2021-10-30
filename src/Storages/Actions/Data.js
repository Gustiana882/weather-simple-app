
class Data {
    DateSet = (data) => {
        return {
            type: "SET_DATE",
            payload: data,
        }
    }

    setLocation = (data) => {
        return {
            type: "SET_LOCATION",
            payload: data,
        }
    }

    setWoeid = (data) => {
        return {
            type: "SET_WOEID",
            payload: data,
        }
    }
}

export default new Data()