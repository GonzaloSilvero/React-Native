import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

// Definir como luce, que informacion tendre aqui
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

// Lo usaremos para decirle a react como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon:  (iconName: string) => void;
}


// Crear el contexto
export const AuthContext = createContext( {} as AuthContextProps );

// Componente que es el proveedor del estado
export const AuthProvider = ({ children }: any) => {
    
    const [authState, dispatch] = useReducer( authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type: 'signIn' }) //al ser de tipo AuthAction, solo viene el signIn
    }   //el dispatch es el unico medio para modificar el estado
    
    const changeFavoriteIcon = ( iconName: string) => {
        dispatch({ type: 'chandeFavIcon', payload: iconName})
    }

    return(
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon
        }}>
            { children }
        </AuthContext.Provider>
    )
}

