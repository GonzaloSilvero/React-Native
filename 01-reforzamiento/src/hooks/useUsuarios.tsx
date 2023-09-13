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
            setUsuarios( resp.data.data );
        } else {
            paginaRef.current --;
            alert('no hay mas registros');
        }
    }

    const paginaSiguente = () => {
        paginaRef.current ++;
        cargarUsuarios()
    }

    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
        paginaRef.current --;
        cargarUsuarios()
        }
    }

    return {
        usuarios,
        paginaSiguente,
        paginaAnterior,
    }
}
