import React from 'react'

interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNo: number;
}


export const ObjetosLiterales = () => {

    const persona: Persona = {
    nombreCompleto  : 'gonza',
    edad: 20,
    direccion: {
        pais: 'Argentina',
        casaNo: 3875
    }
    }

  return (
    <>
        <h3>ObjetosLiterales</h3>
        <code>
            <pre>{JSON.stringify( persona, null, 2 ) }</pre>
        </code>
    </>
  )
}
