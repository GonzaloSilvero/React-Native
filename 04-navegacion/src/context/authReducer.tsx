import { AuthState } from "./AuthContext";

type AuthAction = 
    | { type: 'signIn' }
    | { type: 'chandeFavIcon', payload: string };
    // payload es la info adicional que se le manda a la accion


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
        
        case 'chandeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }

        default:
            return state;
    }

}