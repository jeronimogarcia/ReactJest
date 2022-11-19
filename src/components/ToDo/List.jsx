import React from 'react'

const List = ({ notas = [] }) => {
  return (
    <ol className='flex flex-col items-center' aria-label="listado-notas">
    {notas.map((nota, index) => {
      return (
        <li
          key={index}
          className="mb-2 w-60 py-1 pl-2 bg-blue-600 text-center text-gray-50"
        >
          {nota}
        </li>
      );
    })}
  </ol>
  )
}

export default List