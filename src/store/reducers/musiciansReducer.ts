import {musicianActionType, musiciansState, MusiciansType} from "../types/musicians";

const InitiateState: musiciansState = {
    musicians: [],
    loading: false,
    error: null
}

export const musiciansReducer = (state = InitiateState, action: MusiciansType): musiciansState => {
    switch (action.type) {
        case musicianActionType.FETCH_MUSICIAN:{
            return {
                ...state,
                musicians: action.payload,
                loading: false,
                error: null
            }
        }
        case musicianActionType.FETCH_MUSICIAN_LOADING: {
            return {
                ...state,
                musicians: [],
                loading: true,
                error: null
            }
        }
        case musicianActionType.FETCH_MUSICIAN_ERROR: {
            return {
                ...state,
                musicians: [],
                loading: false,
                error: action.payload
            }
        }
        default:
            return state
    }
}