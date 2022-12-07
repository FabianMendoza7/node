import React from 'react'

const Turno = ({data}) => {
    const {fechaTurno, horaInicio, horaFin, estado} = data

    return (
        <tr class="bg-white border-b dark:bg-gray-50 dark:border-gray-200">
            <th scope="row" class="py-4 px-6 font-medium text-gray-50 whitespace-nowrap dark:text-sky-700">
                {fechaTurno}
            </th>
            <td class="py-4 px-6">
                {horaInicio}
            </td>
            <td class="py-4 px-6">
                {horaFin}
            </td>
            <td class="py-4 px-6">
                {estado}
            </td>              
        </tr>
    )
}

export default Turno