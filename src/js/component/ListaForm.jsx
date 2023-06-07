import React, { useRef, useState } from 'react'
import Lista from './Lista.jsx'

const ListaForm = () => {
    const refInput = useRef("");

    const [tareas, setTareas] = useState([]);

    const [inputValue, setInputValue] = useState("");

    const agregarTarea = (tarea) => {
        if (tarea.mensaje !== "") {
            tarea.mensaje.trim();
            const nuevasTareas = [tarea, ...tareas]
            setTareas(nuevasTareas);
            refInput.current.value = "";
            setInputValue("");
        }
    }

    const eliminarTarea = (id) => {
        const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
        setTareas(nuevasTareas);
    };

    //Esta funcion detecta cada letra añadida en el input y lo almacena en Input Value
    //Esto se pone en el onChange de input para dicho efecto
    const cambiosInput = (e) => {
        setInputValue(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const nuevoTrabajo = {
            id: crypto.randomUUID(),
            mensaje: inputValue
        }

        agregarTarea(nuevoTrabajo);
    }

    return (
        <div className="offset-3 col-6">
            <form action="" onSubmit={handleSubmit}>
                <input ref={refInput} className="form-control" type="text" onChange={cambiosInput} />
            </form>
            <ul className="list-group">
                {/* Si no hay tareas, dentro de una li mostrar mensaje de que no hay ninguna tarea, 
                    de lo contrario, listar con .map todas las tareas en el estado tareas*/}
                {
                    tareas.length == 0 ?
                        <li className='list-group-item d-flex justify-content-center text-dark text-opacity-50'>{tareas.length} tareas, añade una tarea</li>
                        : tareas.map((tarea) => <Lista key={tarea.id} id={tarea.id} mensaje={tarea.mensaje} funcionEliminar={eliminarTarea} />)
                }

                {/* Pregunto si el array contiene un valor para singular, y para mas de uno, plural
                    Lo muestro en la parte inferior igual que en el ejemplo dado con un small*/}

                {
                    tareas.length == 1 ? <small className='text-dark text-opacity-50'>{tareas.length} tarea pendiente</small>
                        : tareas.length > 1 ? <small className='text-dark text-opacity-50'>{tareas.length} tareas pendientes</small>
                            : ""
                }
            </ul>
        </div>
    )
}

export default ListaForm