import { msgConstants } from '../constants';

export function msg(state = {}, action) {
    switch (action.type) {
        case msgConstants.SUCCESS:
            return {
                type: 'msg-success',
                message: action.message
            };
        case msgConstants.ERROR:
            return {
                type: 'msg-danger',
                message: action.message
            };
        case msgConstants.CLEAR:
            return {};
        default:
            return state
    }
}