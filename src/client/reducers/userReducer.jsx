
//const Posts = new Firebase('https://fbredux.firebaseio.com/');

const userReducer = (state = {}, action) => {

        switch (action.type) {
            case 'ADD_USER': {
                return  Object.assign({}, state, {user: action.payload});
            }
            default:
                return state;
        }
    };

export default userReducer;