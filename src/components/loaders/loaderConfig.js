import { ACTIONS } from "../../common/config/actions";
import { store } from "../../stores";

export function backdropVisible(visible=false){
    store.dispatch({
        type:visible?ACTIONS.LOADER.BACKDROP_VISIBLE:ACTIONS.LOADER.HIDE_BACKDROP
    })
}