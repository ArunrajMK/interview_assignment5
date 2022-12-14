import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, POST_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS } from "./action"

const initState = {
    isLoading: false,
    isError: false,
    cridentials: [],
    data: []
}

export const dataReducer = (state = initState, action) => {


    switch (action.type) {

        case GET_DATA_REQUEST:
            return ({
                ...state,
                isLoading: true,
                isError: false
            })

        case GET_DATA_SUCCESS:
            return ({
                ...state,
                isLoading: false,
                isError: false,
                cridentials: action.payload
            })

        case GET_DATA_FAILURE:
            return ({
                ...state,
                isLoading: false,
                isError: true
            })
        case POST_DATA_REQUEST:
            return ({
                ...state,
                isLoading: true,
                isError: false
            })

        case POST_DATA_SUCCESS:
            return ({
                ...state,
                isLoading: false,
                isError: false
            })

        case POST_DATA_FAILURE:
            return ({
                ...state,
                isLoading: false,
                isError: true
            })

        default:
            return ({
                ...state
            })

    }


}