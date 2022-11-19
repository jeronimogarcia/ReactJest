import React, { useState } from "react";

const Todo = ({ addNota }) => {
  const [nuevaNota, setNuevaNota] = useState("");

  return (
    <div className="mt-20 text-gray-50 flex flex-col items-center">
      <h1 className="mt-6 mb-6 text-2xl font-semibold">
        Creación de notas de forma manual
      </h1>
      <input
        type="text"
        placeholder="Introducir una nota nueva"
        name="nota"
        value={nuevaNota}
        className="mb-4 w-60 h-8 border border-gray-500 px-1 rounded outline-none text-gray-800"
        onChange={(e) => {
          setNuevaNota(e.target.value);
        }}
        onKeyDown={(e) => {
          e.key === "Enter" && addNota(nuevaNota) 
          e.key === "Enter" && setNuevaNota("");
        }}
      />
      <button
        className="mb-8 w-60 py-1 rounded bg-green-600 hover:text-yellow-300"
        onClick={() => {
          addNota(nuevaNota);
          setNuevaNota("");
        }}
        aria-label="button-add"
      >
        Agregar la nota
      </button>
    </div>
  );
};

export default Todo;
