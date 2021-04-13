import { combineReducers } from 'redux';

import { authentication } from './auth-reducer';
import { registration } from './registration-reducer';
import { users } from './users-reducer';
import { msg } from './msg-reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    msg
});

export default rootReducer;