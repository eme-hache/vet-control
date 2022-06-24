import Patient from './Patient'

const List = ({ patients, setPatient, deletePatient }) => {
    if (patients?.length === 0) {
        return (
            <div className="md:w-1/2 lg:w-3/5 flex flex-col mt-10 md:my-0">
                <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

                <p className="text-xl mt-5 mb-20 text-center">
                    Comienza agregando pacientes {''}

                    <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                </p>
            </div>
        )
    }

    return (
        <div className="md:w-1/2 lg:w-3/5 flex flex-col mt-10 md:my-0">
            <h2 className="font-black text-3xl text-center">Listado pacientes</h2>

            <p className="text-xl mt-5 mb-10 text-center">
                Adminístra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>

            <div className="md:overflow-y-scroll md:h-0 md:flex-grow sm:pb-10 md:pb-0">
                {patients.map(patient =>
                    <Patient
                        key={patient.id}
                        patient={patient}
                        setPatient={setPatient}
                        deletePatient={deletePatient}
                    />
                )}
            </div>
        </div>
    )
}

export default List