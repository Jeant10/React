import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";


const ListarPacientes = () => 
{

  const navigate = useNavigate()
  const [pacientes, setPacientes] = useState([])

  useEffect(() => 
  {
      const consultarPacientes = async() => {
         try 
         {
          
          const peticion = await fetch("http://localhost:4000/pacientes")
          const respuesta = await peticion.json()
          setPacientes(respuesta)

         } catch (error) 
         {
           console.log(error);
         }
      }

      consultarPacientes()

  }, [])

  return (

    <div>
      <h1 className='font-black text-4xl text-sky-900'>Mostrar Pacientes</h1>
      <hr className='mt-3'/>
      <p className='mt-3'>Módulo para listar todos los pacientes que se han registrado</p>

      <table className='w-full mt-5 table-auto shadow bg-white'>
            <thead className='bg-sky-900 text-white'>
                <tr>
                  <th className='p-2'>Nombre de la mascota</th>
                  <th className='p-2'>Nombre del propietario</th>
                  <th className='p-2'>Email</th>
                  <th className='p-2'>Teléfono</th>
                  <th className='p-2'>Fecha de atención</th>
                  <th className='p-2'>Síntomas</th>
                  <th className='p-2'>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                  pacientes.map(paciente => (
                    <tr key={paciente.id} className="border-b hover:bg-gray-100">
                        <td className='p-3'>{paciente.nombre}</td>
                        <td className='p-3'>{paciente.propietario}</td>
                        <td className='p-3'>{paciente.email}</td>
                        <td className='p-3'>{paciente.telefono}</td>
                        <td className='p-3'>{paciente.fecha}</td>
                        <td className='p-3 '>{paciente.sintomas}</td>
                        <td className='p-3'>

                          <button type='button' className='bg-sky-800 block w-full text-white p-2 uppercase font-bold text-xs rounded-xl' onClick={() => navigate(`/pacientes/detalle/${paciente.id}`)}>Visualizar</button>

                          <button type='button' className='bg-cyan-900 block w-full text-white p-2 uppercase font-bold text-xs mt-2 mb-2 rounded-xl'>Editar</button>
                          
                          <button type='button' className='bg-red-800 block w-full text-white p-2 uppercase font-bold text-xs rounded-xl'>Eliminar</button>
                        </td>
                    </tr>
                  ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListarPacientes

