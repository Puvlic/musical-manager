import {changeMusicianAction, changeMusicianState, ChangeMusicianTypes} from "../../types/changeMusicianTypes";

const InitialState: changeMusicianState = {
    activeMusician: null,
    firstnameText: "",
    middlenameText: "",
    lastnameText: "",
    ageText: "",
    roleText: ""
}

export const changeMusician = (state = InitialState, action: changeMusicianAction) => {
    switch (action.type) {
        case ChangeMusicianTypes.SetActiveMusician: {
            return {
                ...state,
                activeMusician: action.payload
            }
        }
        case ChangeMusicianTypes.SetFirstnameText: {
            return {
                ...state,
                firstnameText: action.payload
            }
        }
        case ChangeMusicianTypes.SetMiddlenameText: {
            return {
                ...state,
                middlenameText: action.payload
            }
        }
        case ChangeMusicianTypes.SetLastnameText: {
            return {
                ...state,
                lastnameText: action.payload
            }
        }
        case ChangeMusicianTypes.SetAgeText: {
            return {
                ...state,
                ageText: action.payload
            }
        }
        case ChangeMusicianTypes.SetRoleText: {
            return {
                ...state,
                roleText: action.payload
            }
        }
        default:
            return state
    }
}