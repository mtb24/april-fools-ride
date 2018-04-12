import * as Constants from '../constants';
import { AFR_MARKERS } from '../markers/afr-test-marker-data';

const options = [];
const initialState: State = {
    AFR_MARKERS,
    options,
    active: AFR_MARKERS[0]
};

function reducer( state = initialState, action ) {
    switch (action.type) {
        case Constants.SET_ACTIVE_OPTION:
            return Object.assign({}, state, {
                active: action.option
            });
        default:
            return state;
    }
}

export { reducer, initialState };
