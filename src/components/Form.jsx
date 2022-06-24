import { useState, useEffect } from 'react'

import Error from './Error'

const PATIENT = {
    name: '',
    owner: '',
    email: '',
    date: '',
    syptoms: '',
}

const Form = ({ patients, setPatients, patient, setPatient }) => {
    const [data, setData] = useState(PATIENT)
    const [error, setError] = useState(false)

    const generateId = () => {
        const random = Math.random().toString(36).slice(2)
        const date = Date.now().toString(36)

        return random + date
    }

    const resetForm = () => {
        setData(PATIENT)
    }

    const handleSubmit = evt => {
        evt.preventDefault()

        if (Object.keys(data).includes('')) {
            return setError(true)
        }

        setError(false)

        if (Object.keys(patient).length > 0) {
            const currentPatient = { ...data, id: patient.id }

            setPatients(patients.map(p => p.id === currentPatient.id ? currentPatient : p))
            setPatient({})
        }
        else {
            const newPatient = { ...data, id: generateId() }

            setPatients([...patients, newPatient])
        }

        resetForm()
    }

    const handleChange = evt => {
        setData({
            ...data,
            [evt.target.name]: evt.target.value
        })
    }

    useEffect(() => {
        if (Object.keys(patient).length > 0) {
            setData(patient)
        }
        else {
            resetForm()
        }
    }, [patient])

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento pacientes
            </h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Adminístralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5"
            >
                {error && <Error><p>Todos los campos son obligatorios</p></Error>}

                <div className="mb-5">
                    <label htmlFor="name" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id="name"
                        name='name'
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={data.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        id="owner"
                        name='owner'
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={data.owner}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        name='email'
                        type="email"
                        placeholder="Email de contacto"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={data.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="block text-gray-700 uppercase font-bold">
                        Fecha de alta
                    </label>
                    <input
                        id="date"
                        name='date'
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={data.date}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="syptoms" className="block text-gray-700 uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id="syptoms"
                        name='syptoms'
                        placeholder="Describe los síntomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={data.syptoms}
                        onChange={handleChange}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold 
                    hover:bg-indigo-700 cursor-pointer transition-all"
                    value={Object.keys(patient).length > 0
                        ? "Editar paciente" : "Agregar paciente"}
                />
            </form>
        </div>
    )
}

export default Form