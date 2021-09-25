// Hooks personalizado para gestionar el login y el regsiter

/* En este caso el uso de este archivo hooks lo que hace basicamente es que en un mismo arichivo, tengamos las 
lógica de las funciones necesarias para el manejo de la información, eso quiere decir quee esta misma
logica podria estan en el el codigo principal*/

import {useState} from 'react'


// Recibiremos dos parametros, los datos iniciales y la funcipon de pushRegistrar (que basicamente es
// recibir esa funcion para devolverla igual solo que llevará los datos
export default (datosIniciales,pushRegistrar) =>{
    const [inputs,setInputs]= useState(datosIniciales);

    const subscripcion = campo=>valor=>{ 
        /* campo tiene el argumento de la llamada de la funcion y valor recibe el texto que genera 
        el componente inputText*/
        setInputs({...inputs,[campo]:valor}) //...inputs mantiene hace que no se borre los datos que ya existen
    }

    const manejadorPush = () =>{
        pushRegistrar(inputs)
    }

    return{subscripcion,manejadorPush,inputs}
}