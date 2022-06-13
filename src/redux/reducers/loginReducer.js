const loginReducer = (login = false, action) =>{
    switch(action.type){
        case 'LOGIN':
            return action.login
        default:
            return login
    }
}
export default loginReducer