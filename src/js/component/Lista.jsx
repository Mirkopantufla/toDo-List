import React from 'react'

const Lista = ({ id, mensaje, funcionEliminar }) => {

    return (
        <li className="list-group-item d-flex justify-content-between botonX">
            {mensaje}
            <button className='border border-none' onClick={() => funcionEliminar(id)}>X</button>
        </li>
    )
}

export default Lista