import {database} from '../client.js'

/* export const setUser = (user) => (dispatch, getState) => {
    database.ref('users/' + user.uid).set(user).then((check)=>{
        dispatch(innerSetUser(user));
    });
}; */

/*
export const getUserDetails = (userId) => (dispatch, getState) => {
    return database.ref('/users/' + userId).once('value').then(function(snapshot) {
        return dispatch(innerSetUser(snapshot.val()));
    })
}

*/


export const setUser = (user) => (
    {
        type: 'ADD_USER',
        payload: user
    }
)