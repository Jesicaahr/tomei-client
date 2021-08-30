import { CREATE_USER } from '../actions/types';

const initialState = {
    user: {}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return (state = {
				...state,
				user: action.payload,
			});

        default:
            return state
            break;
    }
}

export default userReducer
