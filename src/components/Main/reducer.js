import mainState from './state'

export default function (state = mainState, action) {
    switch(action.type){
        case 'SESSION_VALIDATION_REQUEST':
            return Object.assign({}, state, {
                token: action.token,
                isTokenValidation: true
                });
        case 'SESSION_VALIDATION_OK':
            return Object.assign({}, state, {
                token: action.claims.token,
                isAuthenticated: true,
                nombre: action.claims.nombre,
                isTokenValidation: false,
                });
        case 'SESSION_VALIDATION_ERROR':
            return mainState;
        default:
            return state
    }
}