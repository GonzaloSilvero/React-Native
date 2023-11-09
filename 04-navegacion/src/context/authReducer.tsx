import { AuthState } from "./AuthContext";

type AuthAction = { type: 'signIn'}


export const authReducer = ( state: AuthState, action: AuthAction): AuthState => {

    switch ( action.type ) {
        case 'signIn':
            // Mutacion del estado, react no se va a dar cuenta que cambio, mala practica
            //! state.isLoggedIn = true
            //! return state;
            return {
                ...state, //todas las propiedades, despues detallo
                isLoggedIn: true,
                username: 'no-username-yet'
            }

        default:
            return state;
    }

}