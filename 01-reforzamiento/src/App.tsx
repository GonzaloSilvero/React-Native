import React from 'react'
import { Formularios } from './components/Formularios';
// import { Usuarios } from './components/Usuarios';
// import { Login } from './components/Login';
// import { ContadorConHook } from './components/ContadorConHook';
// import { Funciones } from './typescript/Funciones';
// import { ObjetosLiterales } from './typescript/ObjetosLiterales';
// import { TiposBasicos } from './typescript/TiposBasicos';
// import { Contador } from './components/Contador';

export const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduccion a TS</h1>
      <hr></hr>
      {/* <TiposBasicos/> */}
      {/* <ObjetosLiterales/> */}
      {/* <Funciones /> */}
      {/* <Contador /> */}
      {/* <ContadorConHook /> */}
      {/* <Login/> */}
      {/* <Usuarios /> */}
      <Formularios />

    </div>
  )
}

export default App;