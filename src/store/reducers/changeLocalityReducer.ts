import {ILocalitiesState} from "../../types/localitiesTypes";
import {ChangeStateAction, ChangeStateTypes, IChangeLocalityState} from "../../types/changeLocalityType";


const InitiateState: IChangeLocalityState = {
    nameText: ""
}

export const ChangeLocality = (state = InitiateState, action:
    ChangeStateAction) => {
    switch (action.type) {
        case ChangeStateTypes.setNameText: {
            return {
                ...state,
                nameText: action.payload
            }
        }
        default:
            return state
    }
}