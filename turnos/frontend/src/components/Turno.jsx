import React from 'react'

const Turno = ({data}) => {
    const {fechaTurno, horaInicio, horaFin, estado} = data

    return (
        <tr className="bg-white border-b dark:bg-gray-50 dark:border-gray-200">
            <th scope="row" className="py-4 px-6 font-medium text-gray-50 whitespace-nowrap dark:text-sky-700">
                {fechaTurno}
            </th>
            <td className="py-4 px-6">
                {horaInicio}
            </td>
            <td className="py-4 px-6">
                {horaFin}
            </td>
            <td className="py-4 px-6 dark:text-green-500">
                {estado}
            </td>              
        </tr>
    )
}

export default Turno