import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as MusiciansAC from "../store/action-creators/musiciansAC"
import * as SetDeleteMusicianWindowActiveAC from "../store/action-creators/deleteMusicianWindowAC";

export const useMusicianActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(MusiciansAC, dispatch)
}