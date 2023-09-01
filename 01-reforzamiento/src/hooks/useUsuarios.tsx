import { useState, useRef, useEffect } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';


export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    const paginaRef = useRef(0)

    useEffect(() => {
        // llamado a la API
        cargarUsuarios(); 
    }, [])

    const cargarUsuarios = async () => {
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })
        
        if ( resp.data.data.length > 0 ){
            console.log(paginaRef.current)
            setUsuarios( resp.data.data );
            paginaRef.current ++;
        } else {
            alert('no hay mas registros');
            console.log(paginaRef.current)
        }
    }

    return {
        usuarios,
        cargarUsuarios,
    }
}
