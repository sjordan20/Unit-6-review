const initialState = {
    user: {}
}

const GET_USER = 'GET_USER';
const LOGOUT = 'LOGOUT';

export function getUser(userObj){

}

export function logout(){

}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_USER:
       //something goes here
            //{user: {}, user: {user_id: 1, user_email: 'email'}}
        case LOGOUT:
            //something goes here
            //return initialState
        default:
            return state;
    }
};