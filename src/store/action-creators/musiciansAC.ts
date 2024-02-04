import {Dispatch} from "redux";
import {musicianActionType} from "../../types/musicians";


export const fetchUsers = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({type: musicianActionType.FETCH_MUSICIAN_LOADING})
            // there should be a query in the db
        } catch (e) {
            dispatch({type: musicianActionType.FETCH_MUSICIAN_ERROR, payload: 'Ошибка загрузки информации об исполнителяъ'})
        }
    }
}