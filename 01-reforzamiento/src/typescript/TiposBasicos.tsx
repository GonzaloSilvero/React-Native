
export const TiposBasicos = () => {

    const nombre = 'Gonzalo';
    const edad: number = 20;
    const estaActivo:boolean = false; 

    const poderes = []//'velocidad', 'volar', 'super fuerza'
    poderes.push(1);
    poderes.push('123');

  return (
    <>
        <h3>tipos basicos</h3>
        { nombre }, { edad }, { (estaActivo) ? 'activo' : 'no activo' }
        <br/>
        { poderes.join(', ') }
    </>
  )
}
