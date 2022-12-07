import React from 'react'

const Turno = ({data}) => {
    const {fechaTurno, horaInicio, horaFin, estado} = data

    return (
        <tr>
            <td>
                {fechaTurno}
            </td>
            <td>
                {horaInicio}
            </td>
            <td>
                {horaFin}
            </td>
            <td>
                {estado}
            </td>              
        </tr>
    )
}

export default Turno